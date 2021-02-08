import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { THEME2, INFO } from "./variable"
import { Button, IconButton, Dialog, DialogTitle, DialogContent, Select, MenuItem, FormControl } from "@material-ui/core"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AverageScoreSvg from './Svg/AverageScoreSvg'
import UtilityOverviewBg from './Svg/UtilityOverviewBg'
import FactorDialog from "./FactorDialog"
import useUsers from "./hooks/useUsers"
import useScore from "./hooks/useScore"
import useAirData from "./hooks/useAirData"

const OverviewWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    padding: ${props => props.matches ? "40px" : "0"};
    justify-content: ${props => props.matches ? "none" : "center"};
    width: 100%;
    height: 100%;
    position:relative;
`


const AverageScoreWrapper = styled(motion.div)`
    width: ${props => props.matches ? "320px" : "100%"};
    max-width: ${props => props.matches ? ";" : "400px"};
    margin-top: ${props => props.matches ? "auto" : "48px"};
    height: 823px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const AverageCard = styled(motion.div)`
    width: 100%;
    height: 580px;
    border-radius: 30px;
    background-color: ${THEME2.white};
    border: 1px solid ${THEME2.dividerColor};
    margin-top:244px; 
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: static; 
`

const AverageScore = styled(motion.div)`
    text-align: center;
    font-size: 180px;
    font-weight: 800;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background-color: ${props => {
        if (props.level == "good") { return THEME2.shade1 }
        else if (props.level == "warning") { return THEME2.yellow }
        else { return THEME2.red }
    }};
    color: ${THEME2.white};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
`

const RightWrapper = styled(motion.div)`
    width: ${props => props.matches ? ";" : "100%"};
    flex-grow: 1;
    min-height: 800px;
    background: ${THEME2.white};
    border-radius: 30px;
    margin: ${props => props.matches ? "0 24px" : "24px 0"};
    background: transparent;
    display: flex;
    flex-direction: column;   
`

const FactorWrapper = styled(motion.div)`
    height: 408px;
    width: 100%;
    border-radius : 30px;
    background-color: ${THEME2.white};
    border: 1px solid ${THEME2.dividerColor};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 5px;
    position: relative;
`

const BottomWrapper = styled(motion.div)`
    margin-top: 24px;
    display:flex;
    flex-wrap: wrap;
`

const RawDataWrapper = styled(motion.div)`
    height: 395px;
    border-radius : 30px;
    background-color: ${THEME2.white};
    border: 1px solid ${THEME2.dividerColor};
    width: ${props => props.matches ? "308px" : "100%"};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const UtilityWrapper = styled(motion.div)`
    height: 395px;
    border-radius : 30px;
    background-color: ${THEME2.white};
    border: 1px solid ${THEME2.dividerColor};
    margin-top: ${props => props.matches ? "0" : " 24px"};
    margin-left: ${props => props.matches ? "24px" : " 0"};
    width: ${props => props.matches ? "" : "100%"};
    flex-grow:1;
`

const DeviceDetailWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width:100%;
    overflow-y: scroll;
    height: 268px;
    padding: 16px 0;
    box-shadow: inset 0px 0px 24px 4px ${THEME2.white};
`
const ScoreCircle = styled(motion.div)`
    width: 48px; 
    height: 48px; 
    border-radius: 50%;
    padding: 10px;
    background-color: ${props => {
        if (props.level == "good") { return THEME2.shade1 }
        else if (props.level == "warning") { return THEME2.yellow }
        else { return THEME2.red }
    }};
    color: ${THEME2.white};
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
`

const Device = styled(motion.div)`
    display: flex;
    margin-bottom: 24px;
    align-items: center;
    justify-content: center;
    color: ${THEME2.black};
`

const OnlineInfoWrapper = styled(motion.div)`
    width: 100%;
    margin-top: 24px;
    display : flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 100;
    color: ${THEME2.black};
`

const BarWrapper = styled(motion.div)`
    flex-grow: 1;
    padding: 0 16px;
    padding-top: 24px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    overflow-x: scroll;
`

const FactorBarScore = styled(motion.div)`
    background-color: ${props => props.color}; 
    width: 100%;
    flex-grow: 1;
    border-radius: 30px;
    display: flex;
    align-items: flex-end;
    justify-content:center;
`

const FactorTextScore = styled(motion.span)`
    font-size: ${props => props.matches2 ? "48px" : "16px"};
    font-weight: ${props => props.matches2 ? "800" : "800"};
    margin-bottom: 16px; 
    color: ${THEME2.white};
    position: absolute;
    ${props => props.matches2 ? "text-shadow: 3px 1px 14px rgba(0,0,0,0.33);" :
        `-webkit-text-stroke-width: 0.1px; -webkit-text-stroke-color: ${THEME2.dividerColor};`}
`

const FactorScore = styled(motion.div)`
    flex-grow: 1;
    margin: 0 8px;
    height: ${props => props.score}%;
    border-radius: 30px;
    flex-direction: column;
    transition: height 1.0s;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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

const FactorLabel = styled(motion.label)`
    ${props => !props.matches && "display: none;"}
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 100;
    color: ${props => props.color};
`

const FactorCircle = styled(motion.div)`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-right: 8px;
`


const RawDataBody = styled(motion.div)`
    flex-grow: 1;
    margin: 16px 24px 24px 24px; 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const RawDataRowWrapper = styled(motion.div)`
    flex-grow: 1;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${THEME2.dividerColor};
`

const RawDataLabel = styled(motion.span)`
    color: ${props => props.color};
    font-size: 12px;
    font-weight: 100;
`

export default function Overview(props) {
    const { setPage, PAGE } = props
    const matches = useMediaQuery(`(min-width: ${THEME2.breakpointL}px)`);
    const matches2 = useMediaQuery(`(min-width: ${THEME2.breakpointM}px)`);
    const { devicesData } = useUsers()
    const { setAuthToken, airData } = useAirData()

    const [overallScore, setOverallScore] = useState({ score: 87, level: "good" })
    const [isFactorInfoDialogOpen, setIsFactorInfoDialogOpen] = useState(false)
    const [factorDisplayInfo, setFactorDisplayInfo] = useState()
    const [metaFactorDialog, setMetaFactorDialog] = useState(false)

    // Raw data of selected device
    const [rawData, setRawData] = useState({
        co: 400,
        temp: 25,
        humidity: 44,
        pressure: 1083,
        voc: 20,
        pm1_0: 0,
        pm2_5: 14,
        pm10_0: 15,
    })

    // Devices
    const [devices, setDevices] = useState([
        { level: "good", score: 80, name: "Device1", online: true },
        { level: "warning", score: 70, name: "Device2", online: true },
        { level: "bad", score: 49, name: "Device3", online: false },
    ])

    const [selectedDevice, setSelectedDevice] = useState({ name: "", key: "" })

    // Score of selected device
    const { setScoreDevice, deviceScore } = useScore()
    const [factorsScore, setFactorsScore] = useState({
        co: 40,
        temp: 54,
        humidity: 100,
        pressure: 40,
        voc: 0,
        pm: 85,
    })

    // Waiting for getting devicesData
    useEffect(() => {
        if (devicesData.length >= 1) {
            setSelectedDevice(devicesData[0])
            // console.log("> devicesData : ", devicesData)
        }
    }, [devicesData])

    useEffect(() => {
        setScoreDevice(selectedDevice)
        setAuthToken(selectedDevice?.key ?? "")
    }, [selectedDevice])

    console.log("> deviceScore : ", deviceScore)
    console.log("> airData : ", airData)

    const listDevices = () => {
        return (devices.map((el) => (
            <Device whileHover={{ y: -8 }} key={el.name} style={{ fontSize: 12, fontWeight: 100, }}>
                <ScoreCircle level={el.level}>
                    <div>{el.score}</div>
                </ScoreCircle>
                <motion.div style={{ marginRight: 16, width: 16, height: 16, borderRadius: "50%", backgroundColor: el.online ? THEME2.shade1 : THEME2.red }} />
                {el.name}
            </Device>
        )))
    }

    return (
        <OverviewWrapper matches={matches}>
            <AverageScoreWrapper matches={matches} whileHover={{ y: -8 }}>
                <AverageScore level={overallScore.level}>
                    <motion.span>{overallScore.score}</motion.span>
                </AverageScore>
                <AverageCard >
                    <motion.div style={{ height: "100%", display: "flex", flexDirection: "column", width: "80%", margin: "80px 10%" }}>
                        <motion.h4 style={{ color: THEME2.primary, textAlign: "center", fontSize: 24, fontWeight: 400 }}> Overall Score </motion.h4>
                        <DeviceDetailWrapper>

                            {devicesData.length >= 1 ?
                                listDevices() :
                                (
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
                                )
                            }
                        </DeviceDetailWrapper>
                        <OnlineInfoWrapper>
                            <motion.div style={{ marginRight: 8, width: 18, height: 18, borderRadius: "50%", backgroundColor: THEME2.shade1 }} />
                            Online
                            <motion.div style={{ marginLeft: 16, marginRight: 8, width: 18, height: 18, borderRadius: "50%", backgroundColor: THEME2.red }} />
                            Offline
                            </OnlineInfoWrapper>
                    </motion.div>
                </AverageCard>
                <AverageScoreSvg />
            </AverageScoreWrapper>

            <RightWrapper matches={matches}>
                <FactorWrapper matches={matches} whileHover={{ y: -8 }}>
                    <motion.h4 style={{ paddingLeft: 24, color: THEME2.primary, fontSize: 24, marginBottom: 8, display: "flex", alignItems: "center", fontWeight: 400 }}>
                        Factor Score
                         <IconButton onClick={() => { setMetaFactorDialog(true) }} aria-label="factors information" color="primary">
                            <InfoOutlinedIcon />
                        </IconButton>
                        <Dialog onClose={() => { setMetaFactorDialog(false) }} open={metaFactorDialog}>
                            <DialogTitle style={{ color: THEME2.primary }} id="factor-information">Factors Information</DialogTitle>
                            <DialogContent>
                                <motion.div style={{ color: THEME2.factors.co, display: "flex", alignItems: "center", marginBottom: 16 }}>
                                    <FactorCircle color={THEME2.factors.co} />
                                    CO
                                </motion.div>
                                <motion.div style={{ color: THEME2.factors.temp, display: "flex", alignItems: "center", marginBottom: 16 }}>
                                    <FactorCircle color={THEME2.factors.temp} />
                                    Temperature
                                </motion.div>
                                <motion.div style={{ color: THEME2.factors.humidity, display: "flex", alignItems: "center", marginBottom: 16 }}>
                                    <FactorCircle color={THEME2.factors.humidity} />
                                    Humidity
                                </motion.div>
                                <motion.div style={{ color: THEME2.factors.pressure, display: "flex", alignItems: "center", marginBottom: 16 }}>
                                    <FactorCircle color={THEME2.factors.pressure} />
                                    Pressure
                                </motion.div>
                                <motion.div style={{ color: THEME2.factors.voc, display: "flex", alignItems: "center", marginBottom: 16 }}>
                                    <FactorCircle color={THEME2.factors.voc} />
                                    VOC
                                </motion.div>
                                <motion.div style={{ color: THEME2.factors.pm, display: "flex", alignItems: "center", marginBottom: 16 }}>
                                    <FactorCircle color={THEME2.factors.pm} />
                                    PM
                                </motion.div>
                            </DialogContent>
                        </Dialog>

                        {(devicesData.length >= 1) &&
                            <FormControl>
                                <Select
                                    autoWidth
                                    id="Device Selector"
                                    value={selectedDevice}
                                    onChange={(e) => { setSelectedDevice(e.target.value) }}
                                    style={{ height: "100%", minWidth: 100, fontWeight: 100 }}
                                >
                                    {(devicesData.length != 0) && devicesData.map((e) => {
                                        return (<MenuItem key={e.name} value={e} style={{ color: THEME2.black, fontWeight: 100 }}>{e.name}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl>
                        }


                    </motion.h4>
                    {(devicesData.length >= 1 && deviceScore?.factors_score ) ?
                        (
                            <BarWrapper>
                                <FactorScore onClick={() => { setIsFactorInfoDialogOpen(true); setFactorDisplayInfo(INFO.factors[0]); }}
                                    whileHover={{ y: -8 }}
                                    color={THEME2.factors.co}
                                    score={Math.round(deviceScore?.factors_score[0].AQI) ?? 0}
                                >
                                    <FactorBarScore color={THEME2.factors.co}>
                                        <FactorTextScore matches={matches} matches2={matches2}>
                                            {Math.round(deviceScore?.factors_score[0].AQI) ?? 0}
                                        </FactorTextScore>
                                    </FactorBarScore>
                                </FactorScore>

                                <FactorScore onClick={() => { setIsFactorInfoDialogOpen(true); setFactorDisplayInfo(INFO.factors[1]); }}
                                    whileHover={{ y: -8 }}
                                    color={THEME2.factors.temp}
                                    score={Math.round(deviceScore?.factors_score[1].AQI) ?? 0}
                                >
                                    <FactorBarScore color={THEME2.factors.temp}>
                                        <FactorTextScore matches={matches} matches2={matches2}>
                                            {Math.round(deviceScore?.factors_score[1].AQI) ?? 0}
                                        </FactorTextScore>
                                    </FactorBarScore>
                                </FactorScore>

                                <FactorScore onClick={() => { setIsFactorInfoDialogOpen(true); setFactorDisplayInfo(INFO.factors[2]); }}
                                    whileHover={{ y: -8 }}
                                    color={THEME2.factors.humidity}
                                    score={Math.round(deviceScore?.factors_score[2].AQI) ?? 0}
                                >
                                    <FactorBarScore color={THEME2.factors.humidity}>
                                        <FactorTextScore matches={matches} matches2={matches2}>
                                            {Math.round(deviceScore?.factors_score[2].AQI) ?? 0}
                                        </FactorTextScore>
                                    </FactorBarScore>
                                </FactorScore>

                                <FactorScore onClick={() => { setIsFactorInfoDialogOpen(true); setFactorDisplayInfo(INFO.factors[3]); }}
                                    whileHover={{ y: -8 }}
                                    color={THEME2.factors.pressure}
                                    score={Math.round(deviceScore?.factors_score[3].AQI) ?? 0}
                                >
                                    <FactorBarScore color={THEME2.factors.pressure}>
                                        <FactorTextScore matches={matches} matches2={matches2}>
                                            {Math.round(deviceScore?.factors_score[3].AQI) ?? 0}
                                        </FactorTextScore>
                                    </FactorBarScore>
                                </FactorScore>

                                <FactorScore onClick={() => { setIsFactorInfoDialogOpen(true); setFactorDisplayInfo(INFO.factors[4]); }}
                                    whileHover={{ y: -8 }}
                                    color={THEME2.factors.voc}
                                    score={Math.round(deviceScore?.factors_score[4].AQI) ?? 0}
                                >
                                    <FactorBarScore color={THEME2.factors.voc}>
                                        <FactorTextScore matches={matches} matches2={matches2}>
                                        {Math.round(deviceScore?.factors_score[4].AQI) ?? 0}
                                        </FactorTextScore>
                                    </FactorBarScore>
                                </FactorScore>
                                <FactorScore onClick={() => { setIsFactorInfoDialogOpen(true); setFactorDisplayInfo(INFO.factors[5]); }}
                                    whileHover={{ y: -8 }}
                                    color={THEME2.factors.pm}
                                    score={Math.round(deviceScore?.factors_score[5].AQI) ?? 0}
                                >
                                    <FactorBarScore color={THEME2.factors.pm}>
                                        <FactorTextScore matches={matches} matches2={matches2}>
                                            {Math.round(deviceScore?.factors_score[5].AQI) ?? 0}
                                        </FactorTextScore>
                                    </FactorBarScore>
                                </FactorScore>
                            </BarWrapper>
                        ) :
                        (
                            <NoDeviceLabel>
                                <div>
                                    Please add your device to view data
                                </div>
                            </NoDeviceLabel>
                        )
                    }
                    {/* Factor info display */}
                    <FactorDialog data={factorDisplayInfo} open={isFactorInfoDialogOpen} onClose={() => { setIsFactorInfoDialogOpen(false) }} />
                </FactorWrapper>

                <BottomWrapper>
                    <RawDataWrapper matches={matches} whileHover={{ y: -8 }}>
                        <motion.h4 style={{ paddingLeft: 24, color: THEME2.primary, fontSize: 24, marginBottom: 8, fontWeight: 400 }}>
                            Raw Data
                        </motion.h4>
                        <RawDataBody>
                            {devicesData.length >= 1 ?
                                (<>
                                    <RawDataRowWrapper>
                                        <RawDataLabel color={THEME2.factors.co}>
                                            CO
                                </RawDataLabel>
                                        <RawDataLabel color={THEME2.factors.black}>
                                            {airData.v0 ?? 0} ppm
                                </RawDataLabel>
                                    </RawDataRowWrapper>
                                    <RawDataRowWrapper>
                                        <RawDataLabel color={THEME2.factors.temp}>
                                            Temperature
                                </RawDataLabel>
                                        <RawDataLabel color={THEME2.factors.black}>
                                            {airData.v1 ?? 0} °C
                                </RawDataLabel>
                                    </RawDataRowWrapper>
                                    <RawDataRowWrapper>
                                        <RawDataLabel color={THEME2.factors.humidity}>
                                            Humidity
                                </RawDataLabel>
                                        <RawDataLabel color={THEME2.factors.black}>
                                            {airData.v2 ?? 0} %
                                </RawDataLabel>
                                    </RawDataRowWrapper>
                                    <RawDataRowWrapper>
                                        <RawDataLabel color={THEME2.factors.pressure}>
                                            Pressure
                                </RawDataLabel>
                                        <RawDataLabel color={THEME2.factors.black}>
                                            {airData.v3 ?? 0} ppm
                                </RawDataLabel>
                                    </RawDataRowWrapper>
                                    <RawDataRowWrapper>
                                        <RawDataLabel color={THEME2.factors.voc}>
                                            VOC
                                </RawDataLabel>
                                        <RawDataLabel color={THEME2.factors.black}>
                                            {airData.v4 ?? 0} kPa
                                </RawDataLabel>
                                    </RawDataRowWrapper>
                                    <RawDataRowWrapper>
                                        <RawDataLabel color={THEME2.factors.pm}>
                                            PM 1.0
                                </RawDataLabel>
                                        <RawDataLabel color={THEME2.factors.black}>
                                            {airData.v5 ?? 0} µg/m3
                                </RawDataLabel>
                                    </RawDataRowWrapper>
                                    <RawDataRowWrapper>
                                        <RawDataLabel color={THEME2.factors.pm}>
                                            PM 2.5
                                </RawDataLabel>
                                        <RawDataLabel color={THEME2.factors.black}>
                                            {airData.v6 ?? 0} µg/m3
                                </RawDataLabel>
                                    </RawDataRowWrapper>
                                    <RawDataRowWrapper>
                                        <RawDataLabel color={THEME2.factors.pm}>
                                            PM 10.0
                                </RawDataLabel>
                                        <RawDataLabel color={THEME2.factors.black}>
                                            {airData.v7 ?? 0} µg/m3
                                </RawDataLabel>
                                    </RawDataRowWrapper>
                                </>
                                )
                                :
                                (<NoDeviceLabel>
                                    <div>
                                        Please add your device to view data
                                    </div>
                                </NoDeviceLabel>)
                            }
                        </RawDataBody>
                    </RawDataWrapper>
                    <UtilityWrapper matches={matches}>
                        {/* Can remove if nothing to put in here */}
                        <UtilityOverviewBg />
                    </UtilityWrapper>
                </BottomWrapper>
            </RightWrapper>
        </OverviewWrapper>

    )
}
