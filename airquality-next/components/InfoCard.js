import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME2 } from './variable'
import FactorDialog from './FactorDialog'

const CardWrapper = styled(motion.div)`

    width: 200px;
    height: 300px;
    border-radius: 30px ;
    display: flex;
    // background: black;
    margin: 16px;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${THEME2.dividerColor};

`

const IconWrapper = styled(motion.div)`

    width: 100px;
    height: 100px; 
    border-radius: 50%; 
    // background: white;
    margin-top: 16px;
    border: 4px solid ${THEME2.primary};
    text-align: center;

`

const InfoDescription = styled(motion.p)`

    width: 80%;
    height: 110px;
    text-align: center;
    font-size: 12px;
    font-weight: 100;
    color: ${THEME2.black};
    margin: 8px 0;
    margin-bottom: 16px;
    // background: blue;
    overflow: scroll;
    white-space: no-wrap;
    text-overflow: ellipsis;
    line-height: 1.6;
    
`

const InfoTitle = styled(motion.h6)`

    font-size: 16px;
    font-weight:400;
    color: ${THEME2.primary};
    text-align : center;
    margin: 8px auto;
    margin-top: 16px;

`

export default function InfoCard(props) {
    const { info } = props
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
        <CardWrapper whileHover={{ y: -8}} onClick={()=>{setIsOpen(true)}}>
            <IconWrapper>
                
            </IconWrapper>
            <InfoTitle>
                {info.title}
                </InfoTitle>
            <InfoDescription>
                
                {info.description}
            </InfoDescription>
        </CardWrapper>
        <FactorDialog data={info} open={isOpen} onClose={()=>{setIsOpen(false)}} />
        </>
    )
}
