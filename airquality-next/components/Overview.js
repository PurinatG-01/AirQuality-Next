import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { THEME2, THEME } from "./variable"
import { Grid } from "@material-ui/core"
import useMediaQuery from '@material-ui/core/useMediaQuery';

const OverviewWrapper = styled(motion.div)`

    display: flex;
    // background: blue;
    flex-wrap: wrap;
    padding: ${props=> props.matches ? "40px": "0"};
    
    justify-content: ${props=> props.matches ? "none": "center"};
    width: 100%;
    height: 100%;
    overflow-x : scroll;
    
`


const AverageScoreWrapper = styled(motion.div)`
    // background: black;
    width: 280px;
    // height: 823px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
`

const AverageCard = styled(motion.div)`
    
   
    width: 280px;
    height: 580px;
    border-radius: 30px;
    background-color: ${THEME2.white};
    ${THEME2.boxShadow};

    margin-top:220px;
    // position: absolute;
    // z-index: 4;
    
    
`

const AverageScore = styled(motion.div)`

    text-align: center;
    font-size: 180px;
    font-weight: 800;
    width: 280px;
    height: 280px;
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
    flex-grow: 1;
    display:flex;
    flex-wrap: wrap;
    
`

const RawDataWrapper = styled(motion.div)`
    
    height: 395px;
    width: 308px;
    border-radius : 30px;
    background-color: ${THEME2.white};
    ${THEME2.boxShadow}
    width: ${props=> props.matchs ? "308px": "100%"};
`

const UtilityWrapper = styled(motion.div)`
    height: 395px;

    
    border-radius : 30px;
    background-color: ${THEME2.white};
    ${THEME2.boxShadow}
    margin-top: ${props=> props.matchs ? "0": " 24px"};
    width: ${props=> props.matchs ? "593px": "100%"};
`



export default function Overview(props) {

    const matches = useMediaQuery(`(min-width: ${THEME2.breakpointM}px)`);
  

    return (

        <OverviewWrapper matches={matches}>
            <AverageScoreWrapper>
                <AverageScore>
                    <motion.span>80</motion.span>
                </AverageScore>
                {/* <AverageCard>

                </AverageCard> */}
                <AverageCard>

                </AverageCard>
            </AverageScoreWrapper>



            <RightWrapper matches={matches}>
                <FactorWrapper></FactorWrapper>
                <BottomWrapper>
                    <RawDataWrapper>

                    </RawDataWrapper>
                    <UtilityWrapper matches={matches}>

                    </UtilityWrapper>
                </BottomWrapper>
            </RightWrapper>



        </OverviewWrapper>

    )
}
