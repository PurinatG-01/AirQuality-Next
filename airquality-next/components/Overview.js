import React from 'react'
import { motion }  from 'framer-motion'
import styled from 'styled-components'
import { THEME2 } from "./variable"
const OverviewWrapper = styled(motion.div)`

   width: 100%;
    min-height: 500px;
    display: flex;
    background: transparent;
    

`

const AverageScoreWrapper = styled(motion.div)`

width: 320px;
height: 521px;
border-radius: 30px;
position: absolute;
display: flex;
align-items: center;
flex-direction: column;

`

const AverageCard  = styled(motion.div)`

width: 320px;
height: 368px;
border-radius: 30px;
background-color: ${THEME2.white};
position: absolute;
    bottom:0;
    ${THEME2.boxShadow};
    
`

const AverageScore = styled(motion.div)`

    text-align: center;
    font-size: 180px;
    font-weight: 800;
    width: 270px;
    height: 270px;
    border-radius: 50%;
    background-color: ${THEME2.primary};
    color: ${THEME2.white};
    display: flex;
    position: absolute;
    top:0;
    justify-content: center;
    align-items: center;
    z-index: 5;


`


export default function Overview() {
    return (
        <OverviewWrapper >
            <AverageScoreWrapper  whileHover={{scale:1.1}}>
                <AverageScore>
                    <motion.span>80</motion.span>
                </AverageScore>
                <AverageCard>

                </AverageCard>
            </AverageScoreWrapper>

        </OverviewWrapper>
    )
}
