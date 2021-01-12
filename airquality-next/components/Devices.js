import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME2 } from '../components/variable'
import { 
        Button ,TableContainer, Table, 
        TableHead, TableRow, TableCell,
        TableBody, IconButton 
        } from "@material-ui/core"
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeviceDialogForm from './Form/DeviceDialogForm'


const DevicesWrapper = styled(motion.div)`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    padding: 0 16px;
    // background: blue;

`

const CustomTableWrapper = styled(TableContainer)`

    max-width: 780px;
    border: 1px solid ${THEME2.dividerColor};
    padding: 16px;
    border-radius: 30px;
    display:flex;
    flex-direction: column;

`

export default function Devices() {

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const rows = [
        { name: "Front door", key: "GHJHJ@#jgF-JgjSA" },
        { name: "Kitchen", key: "mobSxsdgFDsD" },
        { name: "Back door", key: "#dsDgF@s-aSNX" },
    ]


    return (
        <DevicesWrapper>
            <motion.h1 style={{ fontSize: 24, textAlign: "center", color: THEME2.primary, fontWeight: 400, marginBottom: 24, marginTop: 48 }} >Devices</motion.h1>
            <CustomTableWrapper>
                <Table aria-label="simple table" style={{ width: "100%" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: "400"}} >Device name</TableCell>
                            <TableCell style={{fontWeight: "400"}} align="right">Device key</TableCell>
                            <TableCell style={{fontWeight: "400"}} align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((e) => (
                            <TableRow  key={e.name}>
                                <TableCell style={{fontWeight: "100"}} component="th" scope="row">
                                    {e.name}
                                </TableCell>
                                <TableCell style={{fontWeight: "100"}} align="right">{e.key}</TableCell>
                                <TableCell style={{fontWeight: "100"}} align="right">
                                    <IconButton color="primary" aria-label="Edit device information">
                                        <EditRoundedIcon style={{fontSize: 16}} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button onClick={()=>{setIsDialogOpen(true)}} variant="outlined" color="primary" style={{alignSelf: "flex-end",fontSize: 12,padding: "8px 16px",marginTop: 16}}>
                    Add Device
                </Button>
            </CustomTableWrapper>
            <DeviceDialogForm open={isDialogOpen} onClose={()=>{setIsDialogOpen(false)}} />

        </DevicesWrapper>
    )
}
