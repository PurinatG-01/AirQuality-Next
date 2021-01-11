import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME2 } from './variable'
import InfoCard from './InfoCard'

const InformationWrapper = styled(motion.div)`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex-wrap: wrap;

`

const CategoryTitle = styled(motion.h2)`

    color: ${THEME2.primary};
    padding-bottom: 16px;
    // border-bottom: 2px solid ${THEME2.primary};
    font-weight: 400;

`

const CategoryWrapper = styled(motion.div)`

    width: 100%;
    display: flex;
    flex-wrap : wrap;
    justify-content: center;

`


export default function Information() {


    const factorsInfo = [
        {
            title: "CO2",
            description: "CO2 is one of the most important factor for air quality in home",
            body: ["this is paragraph 1", "this is paragraph 2", "this is paragraph 3",]
        }, {
            title: "CO2",
            description: "CO2 is one of the most important factor for air quality in home",
            body: ["this is paragraph 1", "this is paragraph 2", "this is paragraph 3",]
        }, {
            title: "CO2",
            description: "CO2 is one of the most important factor for air quality in home",
            body: ["this is paragraph 1", "this is paragraph 2", "this is paragraph 3",]
        }, {
            title: "CO2",
            description: "CO2 is one of the most important factor for air quality in home CO2 is one of the most important factor for air quality in home CO2 is one of the most important factor for air quality in home CO2 is one of the most important factor for air quality in home CO2 is one of the most important factor for air quality in home CO2 is one of the most important factor for air quality in home",
            body: ["this is paragraph 1", "this is paragraph 2", "this is paragraph 3",]
        }, {
            title: "CO2",
            description: "CO2 is one of the most important factor for air quality in home",
            body: ["this is paragraph 1", "this is paragraph 2", "this is paragraph 3",]
        }, {
            title: "CO2",
            description: "CO2 is one of the most important factor for air quality in home",
            body: ["this is paragraph 1", "this is paragraph 2", "this is paragraph 3",]
        }
    ]

    const listFactors = () => (factorsInfo.map((e) => (
        <InfoCard info={e}></InfoCard>
    )))

    return (
        <InformationWrapper>
            <motion.h1 style={{ fontSize: 24, textAlign: "center", color: THEME2.primary, fontWeight: 400, marginBottom: 24 }}>Information</motion.h1>
            <CategoryTitle>
                Factors
            </CategoryTitle>
            <CategoryWrapper>
                {listFactors()}
            </CategoryWrapper>
            <CategoryTitle>
                Hardware
            </CategoryTitle>
            <CategoryWrapper>
                {listFactors()}
            </CategoryWrapper>
        </InformationWrapper>
    )
}
