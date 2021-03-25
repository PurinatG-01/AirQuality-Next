import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME2, INFO } from './variable'
import InfoCard from './InfoCard'
import DeviceCard from './DeviceCard'

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
    border-bottom: 1px solid ${THEME2.primary};
    font-weight: 400;
    // text-align: center;

`

const CategoryWrapper = styled(motion.div)`

    // width: 100%;
    display: flex;
    flex-wrap : wrap;
    // justify-content: center;

`


export default function Information() {


    const factorsInfo = INFO.factors
    const hardwareInfo = INFO.hardware

    const listFactorCards = (infos) => (infos.map((e) => (
        <InfoCard info={e}></InfoCard>
    )))

    const listDeviceCards = (infos) => (infos.map((e) => (
        <DeviceCard info={e}></DeviceCard>
    )))

    return (
        <InformationWrapper>
            <motion.h1
                style={{
                    fontSize: 24,
                    textAlign: "center",
                    color: THEME2.primary,
                    fontWeight: 400,
                    marginBottom: 24
                }}
            >
                Information
            </motion.h1>
            <CategoryTitle>
                Factors
            </CategoryTitle>
            <CategoryWrapper>
                {listFactorCards(factorsInfo)}
            </CategoryWrapper>
            <CategoryTitle>
                Hardware
            </CategoryTitle>
            <CategoryWrapper>
                {listDeviceCards(hardwareInfo)}
            </CategoryWrapper>
        </InformationWrapper>
    )
}
