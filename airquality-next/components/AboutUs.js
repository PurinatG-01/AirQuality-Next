import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME2 } from '../components/variable'


const AboutUsWrapper = styled(motion.div)`

    // background: cyan;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
`

const ProfileWrapper = styled(motion.div)`

    // min-height: 400px;
    width: 100%;
    background: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

`

const ProfileCardWrapper = styled(motion.div)`

    // flex-grow: 1;
    height: 500px;
    width: 300px;
    background: cyan;
    border-radius: 30px;
    margin: 0 24px;

`

export default function AboutUs(props) {

    

    return (
        <AboutUsWrapper>
            <motion.h1 style={{fontSize: 24, textAlign: "center", color: THEME2.primary, fontWeight: 400}} >About Us</motion.h1>
            <ProfileWrapper>
                <ProfileCardWrapper>

                </ProfileCardWrapper>
                <ProfileCardWrapper>
                    
                </ProfileCardWrapper>
                <ProfileCardWrapper>
                    
                </ProfileCardWrapper>
            </ProfileWrapper>
        </AboutUsWrapper>
    )
}
