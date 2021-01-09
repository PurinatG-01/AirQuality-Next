import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME2 } from '../components/variable'


const AboutUsWrapper = styled(motion.div)`

    // background: cyan;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    min-height: 80vh;
    height: 100%;
    width: 100%;
`

const ProfileWrapper = styled(motion.div)`

    // min-height: 400px;
    width: 100%;
    // background: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-grow: 1;
    align-items: center;

`

const ProfileCardWrapper = styled(motion.div)`

    // flex-grow: 1;
    height: 300px;
    min-width: 300px;
    // background: cyan;
    border-radius: 30px;
    margin: 16px 24px;
    font-size: 12px;
    text-align: center;
    padding: 48px 0;

`

const ImgPro = styled(motion.img)`

    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid ${THEME2.primary};

`

export default function AboutUs(props) {



    return (
        <AboutUsWrapper>
            <motion.h1 style={{ fontSize: 24, textAlign: "center", color: THEME2.primary, fontWeight: 400, marginBottom: 24,marginTop: 48  }} >About us</motion.h1>
            <ProfileWrapper>
                <ProfileCardWrapper whileHover={{scale: 1.1}}>
                    <ImgPro src="/static/aom_im.jpg" ></ImgPro>
                    <motion.h5 style={{ fontSize: 16, color: THEME2.primary ,fontWeight: 400}} >6088004<br/>Chayarat Boontham <br/>(Aom)</motion.h5>
                    <motion.p style={{fontSize: 12, color: THEME2.black, lineHeight: 1.6, fontWeight: 100}}>6088004 Management Information System (MS) 
                        <br />Faculty of ICT Mahidol University 
                        <br />chayarat.boo@student.mahidol.ac.th 
                        <br />084-655-5229
                    </motion.p>
                </ProfileCardWrapper>
                <ProfileCardWrapper whileHover={{scale: 1.1}}>
                    <ImgPro src="/static/fame_im.jpg" ></ImgPro>
                    <motion.h5 style={{ fontSize: 16, color: THEME2.primary ,fontWeight: 400}} >6088159<br/>Purinat Sanbundit <br/>(Fame)</motion.h5>
                    <motion.p style={{fontSize: 12, color: THEME2.black, lineHeight: 1.6, fontWeight: 100}}>Software Engineering (SE) 
                        <br />Faculty of ICT Mahidol University 
                        <br />purinat.san@gmail.com
                        <br />097-227-1804
                    </motion.p>
                </ProfileCardWrapper>
                <ProfileCardWrapper whileHover={{scale: 1.1}}>
                    <ImgPro src="/static/earth_im.jpg" ></ImgPro>
                    <motion.h5 style={{ fontSize: 16, color: THEME2.primary ,fontWeight: 400}} >6088132<br/>Supawit Puengchim <br/>(Earth)</motion.h5>
                    <motion.p style={{fontSize: 12, color: THEME2.black, lineHeight: 1.6, fontWeight: 100}}>Database and Intelligent Systems (DB) 
                        <br />Faculty of ICT Mahidol University 
                        <br />supawit.pue@gmail.com
                        <br />085-119-6018
                    </motion.p>
                </ProfileCardWrapper>

            </ProfileWrapper>
        </AboutUsWrapper>
    )
}
