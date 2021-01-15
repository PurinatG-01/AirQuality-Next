import React from 'react'
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import styled from 'styled-components'
import useUsers from './hooks/useUsers'
import { THEME2 } from "./variable";
import {motion} from "framer-motion"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const FullName = styled(motion.h4)`
    
    font-weight: 400;
    color: ${THEME2.primary};
    font-size: 16px;
    text-align: center;

` 

const Email = styled(motion.h5)`
    text-align:center;
    font-size: 12px;
    font-weight: 100;
    color: ${THEME2.black};
`

const IconWrapper = styled(motion.div)`

    display: flex;
    flex-grow: 1;
    justify-content: center;
`

const ProfileIcon = styled(AccountCircleIcon)`
  margin-right: 8px;
  font-size: 128px !important;
  color: ${THEME2.primary};
`

export default function ProfileDialog(props) {

    const {userData} = useUsers()
    return (
        <Dialog {...props}>
       <DialogContent 
            style={{ 
                diplay: "flex", 
                flexDirection: "column",
                padding: 16,
                flexWrap: "wrap",
                alignItems: "center",
                minWidth: 200,
                }}>
            <IconWrapper>
                <ProfileIcon/>
            </IconWrapper>
           <FullName>{userData[1]?.firstname}&nbsp;&nbsp;&nbsp;{userData[1]?.surname}</FullName>
           <Email>{userData[1]?.email}</Email>
          </DialogContent>
      </Dialog>

    )
}
