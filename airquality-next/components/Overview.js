import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { THEME2 } from "./variable"
import { IconButton, Dialog, DialogTitle, DialogContent, Select, MenuItem, FormControl } from "@material-ui/core"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
const OverviewWrapper = styled(motion.div)`

    display: flex;
    flex-wrap: wrap;
    padding: ${props => props.matches ? "40px" : "0"};
    justify-content: ${props => props.matches ? "none" : "center"};
    width: 100%;
    height: 100%;
    
`


const AverageScoreWrapper = styled(motion.div)`

    // background: black;
    width: ${props => props.matches ? "320px" : "100%"};
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
    ${THEME2.boxShadow};
    margin-top:244px; 
    // background: black;
    display: flex;
    flex-direction: column;
    
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
    ${THEME2.boxShadow}
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

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
    ${THEME2.boxShadow}
    width: ${props => props.matches ? "308px" : "100%"};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

`

const UtilityWrapper = styled(motion.div)`

    height: 395px;
    border-radius : 30px;
    background-color: ${THEME2.primary};
    ${THEME2.boxShadow}
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

`

const Device = styled(motion.div)`

    display: flex;
    margin-bottom: 24px;
    align-items: center;
    justify-content: space-around;
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

    width: 100%;
    flex-grow: 1;
    padding: 0 auto;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    overflow-x: scroll;
    overflow-y: width;
   
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

    font-size: 16px;
    margin-bottom: 16px; 
    font-weight: 100; 
    color: ${THEME2.white};
    text-shadow: 3px 1px 14px rgba(0,0,0,0.33);

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

    // background: black;
    flex-grow: 1;
    margin: 16px 24px 24px 24px; 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

`

const RawDataRowWrapper = styled(motion.div)`

    flex-grow: 1;
    margin-bottom: 8px;
    // background: red;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${THEME2.dividerColor};

`

const RawDataLabel = styled(motion.span)`

    color: ${props=> props.color};
    font-size: 12px;
    font-weight: 100;

`

export default function Overview(props) {

    const matches = useMediaQuery(`(min-width: ${THEME2.breakpointL}px)`);
    const matches2 = useMediaQuery(`(min-width: ${THEME2.breakpointM}px)`);


    const [overallScore, setOverallScore] = useState({ score: 87, level: "good" })

    const [factorDialog, setFactorDialog] = useState(false)

    const [rawData, setRawData] = useState({
        co2:400,
        temp:25,
        humidity: 44,
        pressure: 1083,
        voc: 20,
        pm1_0: 0,
        pm2_5: 14,
        pm10_0: 15,
    })


    const [devices, setDevices] = useState([
        { level: "good", score: 80, name: "Device1", online: true },
        { level: "warning", score: 70, name: "Device2", online: true },
        { level: "bad", score: 49, name: "Device3", online: false },
       ])

    const [selectedDevice, setSelectedDevice] = useState(devices[0])

    const [factorsScore, setFactorsScore] = useState({
        co2: 40,
        temp: 54,
        humidity: 100,
        pressure: 88,
        voc: 32,
        pm: 85,
    })

    // console.log("> selected : ", selectedDevice)

    const listDevices = () => {
        return (devices.map((el) => (
            <Device whileHover={{y: -8}} key={el.name} style={{fontSize: 12, fontWeight: 100,}}>
                <ScoreCircle level={el.level}>
                    <div>{el.score}</div>
                </ScoreCircle>
                <motion.div style={{  width: 16, height: 16, borderRadius: "50%", backgroundColor: el.online ? THEME2.shade1 : THEME2.red }} />
                {el.name}
            </Device>
        )))
    }

    return (
        <OverviewWrapper matches={matches}>
            <AverageScoreWrapper matches={matches}>
                <AverageScore level={overallScore.level}>
                    <motion.span>{overallScore.score}</motion.span>
                </AverageScore>
                <AverageCard>
                    <motion.div style={{ height: "100%", display: "flex", flexDirection: "column", width: "80%", margin: "80px 10%", flexWrap: "wrap" }}>
                        <motion.h4 style={{ color: THEME2.primary, textAlign: "center", fontSize: 24, fontWeight: 400 }}> Overall Score </motion.h4>
                        <DeviceDetailWrapper>
                            {listDevices()}
                        </DeviceDetailWrapper>
                        <OnlineInfoWrapper>
                            <motion.div style={{ marginRight: 8, width: 18, height: 18, borderRadius: "50%", backgroundColor: THEME2.shade1 }} />
                            Online
                            <motion.div style={{ marginLeft: 16, marginRight: 8, width: 18, height: 18, borderRadius: "50%", backgroundColor: THEME2.red }} />
                            Offline
                            </OnlineInfoWrapper>
                    </motion.div>
                </AverageCard>
            </AverageScoreWrapper>

            <RightWrapper matches={matches}>
                <FactorWrapper matches={matches}>
                    <motion.h4 style={{ paddingLeft: 24, color: THEME2.primary, fontSize: 24, marginBottom: 8, display: "flex", alignItems: "center", fontWeight: 400 }}>
                        Factor Score
                         <IconButton onClick={() => { setFactorDialog(true) }} aria-label="factors information" color="primary">
                            <InfoOutlinedIcon />
                        </IconButton>
                        <Dialog onClose={() => { setFactorDialog(false) }} open={factorDialog}>
                            <DialogTitle style={{ color: THEME2.primary }} id="factor-information">Factors Information</DialogTitle>
                            <DialogContent>

                                <motion.div style={{ color: THEME2.factors.co2, display: "flex", alignItems: "center", marginBottom: 16 }}>
                                    <FactorCircle color={THEME2.factors.co2} />
                                    CO2
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

                        <FormControl>
                            <Select
                                autoWidth
                                id="Device Selector"
                                value={selectedDevice}
                                onChange={(e) => { setSelectedDevice(e.target.value) }}
                                style={{ height: "100%", minWidth: 100, fontWeight: 100 }}
                            >
                                {devices.map((e) => {
                                    return (<MenuItem key={e.name} value={e} style={{color: THEME2.black, fontWeight: 100}}>{e.name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>

                    </motion.h4>
                    <BarWrapper>
                        <FactorScore whileHover={{ y:-8 }} color={THEME2.factors.co2} score={factorsScore.co2}>
                            <FactorLabel matches={matches2} color={THEME2.factors.co2} >CO2</FactorLabel>
                            <FactorBarScore color={THEME2.factors.co2}>
                                <FactorTextScore>{factorsScore.co2}</FactorTextScore>
                            </FactorBarScore>
                        </FactorScore>
                        <FactorScore whileHover={{ y:-8 }} color={THEME2.factors.temp} score={factorsScore.temp}>
                            <FactorLabel matches={matches2} color={THEME2.factors.temp}>Temperature</FactorLabel>
                            <FactorBarScore color={THEME2.factors.temp}>
                                <FactorTextScore>{factorsScore.temp}</FactorTextScore>
                            </FactorBarScore>
                        </FactorScore>
                        <FactorScore whileHover={{ y:-8 }} color={THEME2.factors.humidity} score={factorsScore.humidity}>
                            <FactorLabel matches={matches2} color={THEME2.factors.humidity}>Humidity</FactorLabel>
                            <FactorBarScore color={THEME2.factors.humidity}>
                                <FactorTextScore>{factorsScore.humidity}</FactorTextScore>
                            </FactorBarScore>
                        </FactorScore>
                        <FactorScore whileHover={{ y:-8 }} color={THEME2.factors.pressure} score={factorsScore.pressure}>
                            <FactorLabel matches={matches2} color={THEME2.factors.pressure} >Pressure</FactorLabel>
                            <FactorBarScore color={THEME2.factors.pressure}>
                                <FactorTextScore>{factorsScore.pressure}</FactorTextScore>
                            </FactorBarScore>
                        </FactorScore>
                        <FactorScore whileHover={{ y:-8 }} color={THEME2.factors.voc} score={factorsScore.voc}>
                            <FactorLabel matches={matches2} color={THEME2.factors.voc}>VOC</FactorLabel>
                            <FactorBarScore color={THEME2.factors.voc}>
                                <FactorTextScore>{factorsScore.voc}</FactorTextScore>
                            </FactorBarScore>
                        </FactorScore>
                        <FactorScore whileHover={{ y:-8 }} color={THEME2.factors.pm} score={factorsScore.pm}>
                            <FactorLabel matches={matches2} color={THEME2.factors.pm}>PM</FactorLabel>
                            <FactorBarScore color={THEME2.factors.pm}>
                                <FactorTextScore>{factorsScore.pm}</FactorTextScore>
                            </FactorBarScore>
                        </FactorScore>
                    </BarWrapper>
                </FactorWrapper>

                <BottomWrapper>
                    <RawDataWrapper matches={matches} >
                        <motion.h4 style={{ paddingLeft: 24, color: THEME2.primary, fontSize: 24, marginBottom: 8, fontWeight: 400 }}>
                            Raw Data
                        </motion.h4>
                        <RawDataBody>
                            <RawDataRowWrapper>
                                <RawDataLabel color={THEME2.factors.co2}>
                                    CO2
                                </RawDataLabel>
                                <RawDataLabel color={THEME2.factors.black}>
                                    {rawData.co2} ppm
                                </RawDataLabel>
                            </RawDataRowWrapper>
                            <RawDataRowWrapper>
                            <RawDataLabel color={THEME2.factors.temp}>
                                    Temperature
                                </RawDataLabel>
                                <RawDataLabel color={THEME2.factors.black}>
                                    {rawData.temp} °C
                                </RawDataLabel>
                            </RawDataRowWrapper>
                            <RawDataRowWrapper>
                            <RawDataLabel color={THEME2.factors.humidity}>
                                    Humidity
                                </RawDataLabel>
                                <RawDataLabel color={THEME2.factors.black}>
                                    {rawData.humidity} %
                                </RawDataLabel>
                            </RawDataRowWrapper>
                            <RawDataRowWrapper>
                            <RawDataLabel color={THEME2.factors.pressure}>
                                    Pressure
                                </RawDataLabel>
                                <RawDataLabel color={THEME2.factors.black}>
                                    {rawData.pressure} ppm
                                </RawDataLabel>
                            </RawDataRowWrapper>
                            <RawDataRowWrapper>
                            <RawDataLabel color={THEME2.factors.voc}>
                                    VOC
                                </RawDataLabel>
                                <RawDataLabel color={THEME2.factors.black}>
                                    {rawData.voc} kPa
                                </RawDataLabel>
                            </RawDataRowWrapper>
                            <RawDataRowWrapper>
                            <RawDataLabel color={THEME2.factors.pm}>
                                    PM 1.0
                                </RawDataLabel>
                                <RawDataLabel color={THEME2.factors.black}>
                                    {rawData.pm1_0} µg/m3
                                </RawDataLabel>
                            </RawDataRowWrapper>
                            <RawDataRowWrapper>
                            <RawDataLabel color={THEME2.factors.pm}>
                                    PM 2.5
                                </RawDataLabel>
                                <RawDataLabel color={THEME2.factors.black}>
                                    {rawData.pm2_5} µg/m3
                                </RawDataLabel>
                            </RawDataRowWrapper>
                            <RawDataRowWrapper>
                                <RawDataLabel color={THEME2.factors.pm}>
                                    PM 10.0
                                </RawDataLabel>
                                <RawDataLabel color={THEME2.factors.black}>
                                    {rawData.pm10_0} µg/m3
                                </RawDataLabel>
                            </RawDataRowWrapper>
                        </RawDataBody>
                    </RawDataWrapper>
                    <UtilityWrapper matches={matches}>
                                {/* Can remove if nothing to put in here */}
                    </UtilityWrapper>
                </BottomWrapper>
            </RightWrapper>
        </OverviewWrapper>

    )
}
