import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import {THEME2} from './variable'
const OfflineWrapper = styled.div`
    width: 100%;
    text-align: center;
`
export default function Offline() {
    return (
        <OfflineWrapper>
            <Typography variant="body1" component="body1">
            Device is offline
            </Typography>
        </OfflineWrapper>
    )
}
