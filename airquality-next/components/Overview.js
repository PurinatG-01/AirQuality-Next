import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { THEME2, THEME } from "./variable"
import { Grid } from "@material-ui/core"
import useMediaQuery from '@material-ui/core/useMediaQuery';

const OverviewWrapper = styled(motion.div)`

    display: flex;
    flex-wrap: wrap;
    padding: ${props=> props.matches ? "40px": "0"};
    justify-content: ${props=> props.matches ? "none": "center"};
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
    background-color: ${THEME2.shade1};
    color: ${THEME2.white};

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    z-index: 5;


`

const RightWrapper = styled(motion.div)`

    width: ${ props=> props.matches ? ";" : "100%"};
    flex-grow: 1;
 
    min-height: 800px;
    background: ${THEME2.white};
    border-radius: 30px;
    margin: ${props=> props.matches ? "0 24px" : "24px 0"};

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
    width: ${props=> props.matches ? "308px": "100%"};
`

const UtilityWrapper = styled(motion.div)`

    height: 395px;
    border-radius : 30px;
    background-color: ${THEME2.primary};
    ${THEME2.boxShadow}
    margin-top: ${props=> props.matches ? "0": " 24px"};
    margin-left: ${props=> props.matches ? "24px": " 0"};
    width: ${props=> props.matches ? "": "100%"};
    flex-grow:1;

`

const DeviceDetailWrapper = styled(motion.div)`

    display: flex;
    flex-direction: column;
    width:100%;
    overflow-y: scroll;
    height: 268px;

`
const ScoreCircle = styled(motion.div)`

    width: 48px; 
    height: 48px; 
    border-radius: 50%;
    padding: 10px;
    ${THEME2.boxShadow}
    background-color: ${props=>{
        if(props.level == "good"){return THEME2.shade1}
        else if(props.level == "warning"){return THEME2.yellow}
        else{return THEME2.red}
    }};
    color: ${THEME2.white};
    font-size: 24px;
    font-weight: 800;
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
    font-size: 14px;
    color: ${THEME2.black};

`



export default function Overview(props) {

    const matches = useMediaQuery(`(min-width: ${THEME2.breakpointL}px)`);
    const [devices, setDevices] = useState([
        {level: "good",score: 80,name: "Device1", online: true},
        {level: "warning",score: 70,name: "Device2", online: true},
        {level: "bad",score: 49,name: "Device3", online: false},
        {level: "good",score: 80,name: "Device1", online: true},
        {level: "warning",score: 70,name: "Device2", online: true},
        {level: "bad",score: 49,name: "Device3", online: false},
        {level: "good",score: 80,name: "Device1", online: true},
        {level: "warning",score: 70,name: "Device2", online: true},
        {level: "bad",score: 49,name: "Device3", online: false},
    ])

    const listDevices = ()=>{
        return (devices.map((el)=>(
            <Device>
                <ScoreCircle level={el.level}>
                    <div>{el.score}</div>
                </ScoreCircle>
                <motion.div style={{ width: 18, height: 18, borderRadius: "50%",backgroundColor: el.online ? THEME2.shade1 : THEME2.red }} />
                {el.name}
            </Device>
        )))
    }

    return (
        <OverviewWrapper matches={matches}>
            <AverageScoreWrapper matches={matches}>
                <AverageScore>
                    <motion.span>80</motion.span>
                </AverageScore>
                <AverageCard>
                        <motion.div style={{height: "100%",display: "flex", flexDirection: "column",width: "80%", margin: "80px 10%", flexWrap: "wrap"}}>
                             <motion.h4 style={{color: THEME2.primary, textAlign: "center", fontSize: 24}}> Overall Score </motion.h4>
                             <DeviceDetailWrapper>
                                {listDevices()}
                            </DeviceDetailWrapper>
                            <OnlineInfoWrapper>
                            <motion.div style={{ marginRight: 8,width: 18, height: 18, borderRadius: "50%",backgroundColor: THEME2.shade1}} />
                            Online
                            <motion.div style={{ marginLeft: 16,marginRight: 8,width: 18, height: 18, borderRadius: "50%",backgroundColor: THEME2.red}} />
                            Offline
                            </OnlineInfoWrapper>
                        </motion.div>
                        
                </AverageCard>
            </AverageScoreWrapper>

            <RightWrapper matches={matches}>
                <FactorWrapper matches={matches}>
                <motion.h4 style={{paddingLeft: 24,color: THEME2.primary, fontSize: 24}}> Factor Score </motion.h4>
                </FactorWrapper>
                <BottomWrapper>
                    <RawDataWrapper matches={matches}>

                    </RawDataWrapper>
                    <UtilityWrapper matches={matches}>

                    </UtilityWrapper>
                </BottomWrapper>
            </RightWrapper>



        </OverviewWrapper>

    )
}
