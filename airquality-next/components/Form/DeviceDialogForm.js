import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { THEME2 } from '../variable'
import { Dialog, DialogContent, DialogTitle, TextField, Button } from "@material-ui/core"
import useUsers from "../hooks/useUsers"

const DialogContentWrapper = styled(DialogContent)`

    // background: blue;
    // margin: 16px;
    margin-top: auto;
    min-width: 300px;

`




export default function DeviceDialogForm(props) {

    const { open, onClose, data, method } = props
    const [state, setState] = useState(data ?? { name: "", key: "" })
    const { addDevice, editDevice } = useUsers()
    const [status, setStatus] = useState("")

    useEffect(() => {
        setState(data)
    }, [data])

    return (
        <Dialog open={open} onClose={() => { onClose(); setStatus("") }}>
            <DialogTitle
                style={{ color: THEME2.primary, fontWeight: 400, fontSize: 24 }}
                id="Device form">
                Device form
                </DialogTitle>
            <DialogContentWrapper>
                <motion.div style={{fontSize: 12, color: THEME2.red,marginBottom: 16}}>
                    {status}
                </motion.div>
                <motion.form
                    onSubmit={(e) => {
                        e.preventDefault();
                        // console.log("> ", state)
                        if (method == "add") {
                            addDevice(state, 
                            // Success Handler
                            () => {
                                setState({ name: "", key: "" })
                                setStatus("")
                                onClose();
                            }, 
                            // Error Handler
                            () => { 
                                alert("Exist Name----")
                                setStatus("Existing name. Please select another name") 
                            })
                        } else if (method == "edit") {
                            editDevice()
                        }

                    }}
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <TextField value={state?.name ?? ""} required onChange={(e) => { setState({ ...state, [e.target.id]: e.currentTarget.value }) }} style={{ marginBottom: 16 }} fullWidth id="name" label="Device name" variant="outlined" />
                    <TextField value={state?.key ?? ""} required onChange={(e) => { setState({ ...state, [e.target.id]: e.currentTarget.value }) }} style={{ marginBottom: 16 }} fullWidth id="key" label="Device key" variant="outlined" />
                    <motion.div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            style={{
                                marginRight: 8,
                                marginBottom: 16,
                                fontSize: 12,
                                paddingz: "8px 16px"
                            }}
                            variant="outlined"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                        {method == "edit" && <Button style={{ marginRight: 8, marginBottom: 16, fontSize: 12, padding: "8px 16px", color: THEME2.red, borderColor: THEME2.red }} variant="outlined" onClick={() => { onClose(); setState({ name: "", key: "" }) }}>Delete</Button>
                        }
                        <Button
                            style={{
                                marginRight: 8,
                                marginBottom: 16,
                                fontSize: 12,
                                padding: "8px 16px",
                                color: THEME2.dividerColor
                            }}
                            variant="outlined"
                            onClick={() => {
                                onClose();
                                setState({ name: "", key: "" });
                                setStatus("")
                            }}
                        >
                            Cancel
                        </Button>
                        
                    </motion.div>

                </motion.form>
            </DialogContentWrapper>
        </Dialog>
    )
}
