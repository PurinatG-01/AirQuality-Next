import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography
} from "@material-ui/core"
import styled from "styled-components"
import {
    motion
} from "framer-motion"
import { THEME2 } from './variable'

const ContentWrapper = styled(DialogContent)`
    display :flex;
    flex-direction: column;
    min-width: 300px
    width: 480px;
`

const Paragraph = styled(motion.p)`
    margin-top: 16px;
    font-size: 12px;
    font-weight: 100;
    color: ${THEME2.black};
    line-height: 1.6;
    text-align: center;
`

const DialogSubTitle = styled(Typography)`
    text-align: start;
    margin-bottom : 16px !important;
`

export default function FactorDialog(props) {

    const { data, open, onClose } = props

    const listBasicInfo = () => {
        return (
            <>
                <DialogSubTitle variant="h6" component="h6" color="primary">
                    Basic Information
                </DialogSubTitle>
                {
                    data?.basicInfo?.map((e) => (
                        <Typography varaint="body1" component="body1">
                            {e}
                        </Typography>
                    ))
                }
            </>
        )

    }

    const listHumanEffectInfo = () => {
        return (
            <>
                <DialogSubTitle variant="h6" component="h6" color="primary">
                    Human Effect
                </DialogSubTitle>
                {
                    data?.humanEffectInfo?.map((e) => (
                        <Typography varaint="body1" component="body1">
                            {e}
                        </Typography>
                    ))
                }
            </>
        )

    }

    const listSuggestionInfo = () => {
        return (
            <>
                <DialogSubTitle variant="h6" component="h6" color="primary">
                    Suggestion
                </DialogSubTitle>
                <ol>
                    {
                        data?.suggestionInfo?.map((e) => (
                            <li style={{ textAlign: "start" }} >
                                <Typography varaint="body1" component="body1">
                                    &nbsp;{e}
                                </Typography>
                            </li>

                        ))
                    }
                </ol>
            </>
        )

    }



    return (<Dialog open={open} onClose={onClose}>
        <DialogTitle style={{ color: THEME2.primary, fontWeight: 400, }}>
            {data?.title}
        </DialogTitle>
        <ContentWrapper>
            <Paragraph>
                {listBasicInfo()}
            </Paragraph>
            <Paragraph>
                {listHumanEffectInfo()}
            </Paragraph>
            <Paragraph>
                {data?.suggestionInfo && listSuggestionInfo()}
            </Paragraph>
        </ContentWrapper>
    </Dialog>
    )
}