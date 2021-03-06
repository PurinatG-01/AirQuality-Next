import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME2 } from '../components/variable'
import {
    Button, TableContainer, Table,
    TableHead, TableRow, TableCell,
    TableBody, IconButton
} from "@material-ui/core"
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeviceDialogForm from './Form/DeviceDialogForm'
import useUsers, { TestHook } from "./hooks/useUsers"

const DevicesWrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    padding: 0 16px;
    overflow: scroll;
`

const CustomTableWrapper = styled(TableContainer)`
    max-width: 780px;
    border: 1px solid ${THEME2.dividerColor};
    padding: 16px;
    border-radius: 30px;
    display:flex;
    flex-direction: column;
`

const NoDeviceLabel = styled(motion.div)`
    flex-grow: 1;
    font-size: 12px;
    font-weight: 100;
    color: ${THEME2.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    min-height: 200px;
`

export default function Devices() {

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const { devicesData, addDevice, editDevice, deleteDevice } = useUsers();

    const [selectDevice, setSelectDevice] = useState()
    const [rowId, setRowId] = useState()
    const [method, setMethod] = useState("edit")

    const [displayDevices, setDisplayDevices] = useState([])

    useEffect(() => {
        setDisplayDevices(devicesData)
        console.log("devicesData in comp : ", devicesData)
    }, [devicesData])


    return (
        <DevicesWrapper>
            <motion.h1 style={{ fontSize: 24, textAlign: "center", color: THEME2.primary, fontWeight: 400, marginBottom: 24, marginTop: 48 }} >Devices</motion.h1>
            <CustomTableWrapper>
                {devicesData.length >= 1 ?
                    <Table aria-label="simple table" style={{ width: "100%" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: "400" }} >Device name</TableCell>
                                <TableCell style={{ fontWeight: "400" }} align="right">Device key</TableCell>
                                <TableCell style={{ fontWeight: "400" }} align="right">Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {displayDevices?.map((e, index) => (
                                <TableRow key={e.name}>
                                    <TableCell style={{ fontWeight: "100" }} component="th" scope="row">
                                        {e.name}
                                    </TableCell>
                                    <TableCell style={{ fontWeight: "100" }} align="right">{e.key}</TableCell>
                                    <TableCell style={{ fontWeight: "100" }} align="right">
                                        <IconButton onClick={() => { setRowId(index); setIsDialogOpen(true); setSelectDevice(e); setMethod("edit") }} color="primary" aria-label="Edit device information">
                                            <EditRoundedIcon style={{ fontSize: 16 }} />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    :
                    <NoDeviceLabel>
                        <div>
                            Please add your device to view data
                        </div>
                    </NoDeviceLabel>
                }
                <Button onClick={() => { setIsDialogOpen(true); setMethod("add") }} variant="outlined" color="primary" style={{ alignSelf: "flex-end", fontSize: 12, padding: "8px 16px", marginTop: 16 }}>
                    Add Device
                </Button>
            </CustomTableWrapper>
            <DeviceDialogForm rowId={rowId} deleteDevice={deleteDevice} editDevice={editDevice} addDevice={addDevice} method={method} data={selectDevice} open={isDialogOpen} onClose={() => { setIsDialogOpen(false); setSelectDevice({ name: "", key: "" }) }} />
        </DevicesWrapper>
    )
}
