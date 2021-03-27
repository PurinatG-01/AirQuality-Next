import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import LineChart from "./LineChart";
import useAirData, { useHistoricalData } from "./hooks/useAirData";
import { THEME2 } from "./variable";
import { motion } from "framer-motion"
import { MenuItem, Select, FormControl, useMediaQuery, IconButton, Button } from "@material-ui/core"
import DownloadIcon from '@material-ui/icons/GetAppRounded';
import useUsers from "./hooks/useUsers"
import useScore from './hooks/useScore';
import Loading from "./Loading"
import axios from 'axios'
import Offline from './Offline'

const ItemGrid = styled(motion.div)`
    ${(props) => props.width && `width : ${props.width}`};
    ${(props) => props.height && `height: ${props.height}`};
    background: ${(props) => (props.bg ? props.bg : THEME2.white)};
    color: ${THEME2.secondary};
    border-radius: 30px;
    border: 1px solid ${THEME2.dividerColor};
    display: flex;
    align-items: center;
    overflow: scroll;
    padding: 16px;
    flex-grow:1;
    margin: 16px;
    ${(props) => props.margin && `margin: ${props.margin}`};
`;


const LiveDataWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    min-height: 80vh;
    height: 100%;
    width: 100%;
    // background: cyan;
`

const TopWrapper = styled(motion.div)`
    display: flex;
    flex-grow: 1;
    // background: blue;
`

const BottomWrapper = styled(motion.div)`
    flex-grow: 1;
    // background: blue;
    margin-bottom: 16px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
`

const NoDeviceLabel = styled(motion.div)`
    flex-grow: 1;
    font-size: 12px;
    font-weight: 100;
    color: ${THEME2.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
`



export default function LiveData(props) {

    const { setPage, PAGE } = props

    const matches2 = useMediaQuery(`(min-width: ${THEME2.breakpointM}px)`);
    const { devicesData } = useUsers()
    const { getHistoricalData } = useHistoricalData()

    const { airData, setAuthToken, resetAirData } = useAirData()
    const { setScoreDevice, deviceScore, resetScore, isOffline, setIsScoreOffline } = useScore()

    const [selectedDevice, setSelectedDevice] = useState({ name: "", key: "" })

    useEffect(() => {
        setAuthToken(selectedDevice.key)
    }, [selectedDevice])

    useEffect(() => {
        if (selectedDevice?.key != "" && selectedDevice?.key) {
            axios.get(`http://139.59.126.32:8081/api/airdata/getDeviceStatus/${selectedDevice.key}`)
                .then((response) => {
                    console.log(`> response.data : `, response.data)
                    setIsDeviceOnline(response.data)
                }).catch((error) => {
                    console.error(`> error : `, error)
                })
        }
    }, [selectedDevice])


    // Waiting for getting devicesData
    useEffect(() => {
        if (devicesData.length >= 1) {
            setSelectedDevice(devicesData[0])
            setAuthToken(devicesData[0].key)
        }
    }, [devicesData])


    useEffect(() => {
        if (devicesData.length >= 1) {
            setScoreDevice(selectedDevice)
            setAuthToken(selectedDevice?.key ?? "")
            setIsScoreOffline('-')
            // Clear all data in hook
            resetScore()
            resetAirData()
        }
    }, [selectedDevice])

    return (

        <LiveDataWrapper>
            <motion.h1
                style={{
                    fontSize: 24, textAlign: "center",
                    color: THEME2.primary, fontWeight: 400,
                    marginBottom: 24, marginTop: 48
                }}
            >
                Live Data
            </motion.h1>
            { devicesData.length >= 1 ?
                <>
                    <motion.h2
                        style={{
                            color: THEME2.primary, fontWeight: 400,
                            paddingBottom: 16,
                        }}
                    >
                        Device Score
            </motion.h2>
                    <TopWrapper>
                        {
                            deviceScore ? (
                                <ItemGrid width="100%" height="500px" margin="0">
                                    <LineChart
                                        label="Device Score"
                                        color="rgba(111, 207, 151, 1.0)"
                                        areaColor="rgba(111, 207, 151, 0.4)"
                                        newData={{ value: Math.round(deviceScore?.device_score) ?? 0, label: "" }}
                                        range={{ min: 0, max: 100 }}
                                    />
                                </ItemGrid>
                            ) :
                                (isOffline == 'offline' ? <Offline>Device Offline</Offline> : <Loading />)
                        }


                    </TopWrapper>
                    <motion.h2
                        style={{
                            color: THEME2.primary, fontWeight: 400, marginTop: 48,
                            paddingBottom: 16,
                            display: "flex", alignItems: "center"
                        }}
                    >
                        Factors data
                        <FormControl style={{ marginLeft: 16 }}>
                            <Select
                                autoWidth
                                id="Device Selector"
                                value={selectedDevice}
                                onChange={(e) => { setSelectedDevice(e.target.value) }}
                                style={{ height: "100%", minWidth: 100, fontWeight: 100 }}
                            >
                                {(devicesData.length >= 1) && devicesData.map((e) => {
                                    return (
                                        <MenuItem key={e.name} value={e} style={{ color: THEME2.black, fontWeight: 100 }}>
                                            {e.name}
                                        </MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                        <IconButton
                            color="primary"
                            onClick={() => {
                                getHistoricalData(selectedDevice.key, `${selectedDevice.name}.csv`, 10);
                            }}
                        >
                            <DownloadIcon />
                        </IconButton>
                    </motion.h2>

                    <BottomWrapper>
                        {
                            airData ? (
                                <>
                                    <ItemGrid width="300px" height="240px">
                                        <LineChart
                                            label="CO"
                                            color="rgb(230,230,230)"
                                            areaColor="rgba(230,230,230,0.2)"
                                            newData={{ value: airData.v0, label: "" }}
                                            range={{ min: 0, max: 50 }}
                                        ></LineChart>
                                    </ItemGrid>
                                    <ItemGrid width="300px" height="240px" >
                                        <LineChart
                                            label="VOC"
                                            color="rgb(200, 40, 53)"
                                            areaColor="rgba(200, 40, 53, 0.2)"
                                            newData={{ value: airData.v4, label: "" }}
                                            range={{ min: 0, max: 1000 }}
                                        ></LineChart>
                                    </ItemGrid>

                                    <ItemGrid width="300px" height="240px" >
                                        <LineChart
                                            label="Temperature"
                                            color="rgb(40, 200, 184)"
                                            areaColor="rgba(40, 200, 184, 0.2)"
                                            newData={{ value: airData.v1, label: "" }}
                                            range={{ min: 0, max: 50 }}
                                        ></LineChart>
                                    </ItemGrid>
                                    <ItemGrid width="300px" height="240px" >
                                        <LineChart
                                            label="Humidity"
                                            color="rgb(40, 200, 93)"
                                            areaColor="rgba(40, 200, 93, 0.2)"
                                            newData={{ value: airData.v2, label: "" }}
                                            range={{ min: 0, max: 100 }}
                                        ></LineChart>
                                    </ItemGrid>
                                    <ItemGrid width="300px" height="240px" >
                                        <LineChart
                                            label="Pressure"
                                            color="rgb(117, 40, 200)"
                                            areaColor="rgba(117, 40, 200,  0.2)"
                                            newData={{ value: airData.v3, label: "" }}
                                            range={{ min: 0, max: 2000 }}
                                        ></LineChart>
                                    </ItemGrid>
                                    <ItemGrid width="300px" height="240px" >
                                        <LineChart
                                            label="PM 1.0"
                                            color="rgb(0, 20, 10)"
                                            areaColor="rgba(0, 20, 10, 0.2)"
                                            newData={{ value: airData.v5, label: "" }}
                                            range={{ min: 0, max: 100 }}
                                        ></LineChart>
                                    </ItemGrid>
                                    <ItemGrid width="300px" height="240px" >
                                        <LineChart
                                            label="PM 2.5"
                                            color="rgb(0, 20, 10)"
                                            areaColor="rgba(0, 20, 10, 0.2)"
                                            newData={{ value: airData.v6, label: "" }}
                                            range={{ min: 0, max: 100 }}
                                        ></LineChart>
                                    </ItemGrid>
                                    <ItemGrid width="300px" height="240px" >
                                        <LineChart
                                            label="PM 10.0"
                                            color="rgb(0, 20, 10)"
                                            areaColor="rgba(0, 20, 10, 0.2)"
                                            newData={{ value: airData.v7, label: "" }}
                                            range={{ min: 0, max: 100 }}
                                        ></LineChart>
                                    </ItemGrid>
                                </>
                            ) : (isOffline == 'offline' ? <Offline>Device Offline</Offline> : <Loading />)
                        }
                    </BottomWrapper>

                </> :
                <NoDeviceLabel>
                    <div>
                        Please add your device to view data
                </div>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                            setPage(PAGE[4].tag)
                        }}
                        style={{ fontSize: 12, padding: "8px 16px", marginTop: 16 }} >
                        Go to Devices Page
                </Button>
                </NoDeviceLabel>
            }

        </LiveDataWrapper >

    )
}
