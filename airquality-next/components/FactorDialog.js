import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent
} from "@material-ui/core"
import styled from "styled-components"
import {
    motion
} from "framer-motion"
import { THEME2 } from './variable'

const ContentWrapper = styled(DialogContent)`
    display :flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-width: 300px
    width: 480px;
`

const Paragraph = styled(motion.p)`
    margin-top: 16px;
    font-size: 12px;
    font-weight: 100;
    color: ${THEME2.black};
    // text-indent: 24px;
    line-height: 1.6;
    text-align: center;
`

export default function FactorDialog(props) {

    const { data, open, onClose } = props

    const listBody = () => {
        return (data?.body.map((e) => (
            <Paragraph>
                {e}
            </Paragraph>
        ))
        )
    }

    return (<Dialog open={open} onClose={onClose}>
        <DialogTitle style={{color: THEME2.primary, fontWeight: 400,}}>
            {data?.title}
        </DialogTitle>
        <ContentWrapper>
            <Paragraph>
                {data?.description}
            </Paragraph>
            {listBody()}
        </ContentWrapper>
    </Dialog>
    )
}