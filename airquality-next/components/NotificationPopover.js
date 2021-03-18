import React, { useState } from 'react'
import { Popover, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { THEME2, EVENT } from './variable'

const PopoverContentWrapper = styled.div`
    min-height: 400px;
    overflow-y :scroll;
    overflow-x : hidden;
    margin: 16px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const PopoverList = styled.div`
    padding: 8px 0;
    height: 64px;
    border-bottom: 1px solid ${THEME2.dividerColor};
`

const NotificationTitle = styled(Typography)`
 padding: 16px;
`

const EventTitle = styled(Typography)`
font-weight: 100;
`

const EventContent = styled(Typography)`
    font-weight: 100;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100% !important;
`

export default function NotificationPopOver(props) {
    const { open, onClose, data, matches } = props

    const listEvent = () => (
        data.map((event) => {
            console.log(event)
            const date = (new Date(Date.parse(event.date))).getDate()
            const hours = (new Date(Date.parse(event.date))).getHours()
            const minutes = (new Date(Date.parse(event.date))).getMinutes()
            const month = (new Date(Date.parse(event.date))).getMonth()
            const year = (new Date(Date.parse(event.date))).getFullYear()
            return (
                <PopoverList key={event.date}>
                    <EventTitle color="primary">
                        {date}/{month}/{year} | {hours}:{minutes < 10 && '0'}{minutes}
                    </EventTitle>
                    <EventContent>
                        {EVENT.dialog}
                        <br />
                        Factors : {event.event_factors.map((factor, index) => {
                            let str = factor
                            if (index != event.event_factors.length - 1) str += ', '
                            return str
                        })}
                    </EventContent>
                </PopoverList>
            )
        })
    )

    return (
        <Popover
            open={open}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            style={{
                top: matches ? '36%' : '72px',
                left: matches ? '112px' : '0',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
            }}
            PaperProps={{
                style: {
                    right: matches ? 'auto': 0,
                }
            }}
            elevation={1}
        >
            <NotificationTitle color="primary" variant="h6" component="h6">Notification</NotificationTitle>
            <PopoverContentWrapper>
                {data && listEvent()}
            </PopoverContentWrapper>
        </Popover>
    )
}
