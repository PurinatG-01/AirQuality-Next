import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME2 } from '../variable'
import { Dialog, DialogContent, DialogTitle, TextField, Button } from "@material-ui/core"


const DialogContentWrapper = styled(DialogContent)`

    // background: blue;
    // margin: 16px;
    margin-top: auto;
    min-width: 300px;

`




export default function DeviceDialogForm(props) {

    const { open, onClose, data } = props
    const [state, setState] = useState(data ?? {name: "",key:""})
    console.log("> state : ",state)
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle
                style={{ color: THEME2.primary, fontWeight: 400, fontSize: 24 }}
                id="Device form">
                Device form
                </DialogTitle>
            <DialogContentWrapper>
                <motion.form onSubmit={(e) => {
                    e.preventDefault();
                    console.log("> ",state)
                    setState({name: "",key:""})
                    onClose();
                }}
                style={{display: "flex", flexDirection: "column"}}
                >
                    <TextField value={state.name ?? ""} required onChange={(e)=>{setState({...state, [e.target.id]: e.currentTarget.value})}} style={{ marginBottom: 16 }} fullWidth id="name" label="Device name" variant="outlined" />
                    <TextField value={state.key ?? ""} required onChange={(e)=>{setState({...state, [e.target.id]: e.currentTarget.value})}} style={{ marginBottom: 16 }} fullWidth id="key" label="Device key" variant="outlined" />
                    <motion.div style={{display: "flex", justifyContent:"flex-end"}}>
                    <Button style={{ marginRight: 8,marginBottom: 16, fontSize: 12, padding: "8px 16px" }} variant="outlined" color="primary" type="submit">Submit</Button>
                    <Button style={{ marginRight: 8,marginBottom: 16, fontSize: 12, padding: "8px 16px", color: THEME2.dividerColor }} variant="outlined" onClick={()=>{onClose();setState({name: "",key:""})}}>Cancel</Button>
                
                    </motion.div>
                   </motion.form>
            </DialogContentWrapper>
        </Dialog>
    )
}
