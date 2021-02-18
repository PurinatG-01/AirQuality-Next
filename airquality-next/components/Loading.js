import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'
import {THEME2} from './variable'

const ProgressWrapper = styled.div`
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LoadingLabel = styled.span`
    font-size: 12px;
    font-weight: 100;
    margin-top: 16px;
    color: ${THEME2.primary};
    
`

export default function Loading() {
    return (
        <ProgressWrapper>
            <CircularProgress />
            <LoadingLabel>Loading</LoadingLabel>
        </ProgressWrapper>
    )
}
