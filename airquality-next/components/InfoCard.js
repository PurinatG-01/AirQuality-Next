import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME2 } from './variable'

const CardWrapper = styled(motion.div)`

    width: 200px;
    height: 300px;
    border-radius: 30px;
    display: flex;
    // background: black;
    margin: 16px;
    flex-direction: column;
    align-items: center;

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
    height: 130px;
    text-align: center;
    font-size: 12px;
    font-weight: 100;
    color: ${THEME2.black};
    margin: 16px 0;
    // background: blue;
    overflow: hidden;
    white-space: no-wrap;
    text-overflow: ellipsis;
    line-height: 1.6;
    
`

export default function InfoCard(props) {
    const { info } = props
    const [isOpen, setIsOpen] = useState(false)


    return (
        <CardWrapper whileHover={{ y: -8, boxShadow: THEME2.boxShadowVal }}>
            <IconWrapper>
                
            </IconWrapper>
            <InfoDescription>
                {info.description}
            </InfoDescription>
        </CardWrapper>
    )
}
