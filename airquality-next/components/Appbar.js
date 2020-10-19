import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core"
import { THEME2 } from "./variable";
import { motion } from "framer-motion"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/Info";
import { THEME } from "./variable";
import useUsers from "./hooks/useUsers"
import {useRouter} from "next/router"

const AppbarWrapper = styled(motion.div)`
  height: 100px;
  width: 100%;
  position: fixed;
  background-color: transparent;
  display: flex;
  align-items: center;
`;

const AppbarContentWrapper = styled(motion.div)`
  margin: 0 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrapper = styled(motion.div)`
  width: 48px;
  height: 48px;
  background-color: ${THEME2.primary};
  border-radius: 50%; 
  display:flex;
  justify-content: center;
  align-items: center;
`

const UsernameWrapper = styled.div`
  display: flex;
  align-items:center;
`
const Circle = styled.div`
  background-color: ${THEME2.primary};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
  
`

const DrawerListRoot = styled(List)`
  min-width: 240px;
  background: ${THEME.primary};
  height: 100%;
  color: ${THEME.secondary} !important;
  border-radius: 0 30px 30px 0;
`;

const CenterWrapper = styled.div`
  display:flex;
  flex-direction: column;
  height: 100px;
  justify-content:center;
  align-items: center;
`

export default function Appbar(props) {
  const { matches } = props
  const [open, setOpen] = React.useState(false);

  const { signOut } = useUsers();
  const router = useRouter();
  console.log("matches :" + matches)
  const LabelItem = (color,text)=>{
  return <Typography type="body2" style={{ color: color, fontWeight: 400 }}>{text ?? ""}</Typography>
  }
  const list = () => (
    <DrawerListRoot style={{ minWidth: 240 }}>
      <ListItem button key={"Dashboard"}>
        <ListItemIcon>
          <DashboardIcon style={{ color: THEME2.primary }} />
        </ListItemIcon>
        <ListItemText style={{color: THEME2.primary}} primary={LabelItem(THEME2.primary, "Overview")}/>
      </ListItem>
      <ListItem button key={"About"}>
        <ListItemIcon>
          <InfoIcon style={{ color: THEME2.primary }} />
        </ListItemIcon>
        <ListItemText primary={LabelItem(THEME2.primary, "Info")}/>
      </ListItem>
      <ListItem onClick={()=>{
        signOut(()=>{
          router.push("/")
        })
    }
  }
     button key={"Sign out"}>
        <ListItemIcon>
          <ExitToAppIcon style={{ color: THEME.red }} />
        </ListItemIcon>
        <ListItemText  primary={LabelItem(THEME2.red,"Sign out")} />
      </ListItem>
    </DrawerListRoot>
  );

  return (
    <AppbarWrapper initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} >
      <AppbarContentWrapper>
        <IconButton
          style={{ color: THEME2.primary }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <CenterWrapper style={{marginTop: !matches ? "0": "10px"}}>
        <LogoWrapper>
          <svg width="40" height="40" preserveAspectRatio="none" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7078 9.21347C15.6928 10.412 21.0785 12.5843 26.7415 11.6854C32.4044 10.7865 35.3932 10.2247 37.0785 11.4607" stroke="white" stroke-width="2" />
            <path d="M9.77539 9.10114C12.6967 11.573 18.5728 15.7066 20.899 16.4045C23.1462 17.0787 25.6564 17.7059 32.472 16.8539C34.2698 16.6292 38.8765 18.2023 39.1012 19.2135" stroke="white" stroke-width="2" />
            <path d="M6.06738 7.75281C7.82768 8.87641 12.809 10.4494 18.6517 7.75281C25.955 4.38203 30.2247 5.28089 33.146 6.29212" stroke="white" stroke-width="2" />
            <path d="M2.13477 14.7191C3.93252 16.03 8.16415 17.7844 11.573 16.9663C14.382 16.2922 19.1385 15.9551 20.6741 16.2922" stroke="white" stroke-width="2" />
            <path d="M36.2921 30.7865L27.7342 37.9775C21.4972 37.9775 17.0786 37.5159 17.0786 37.5159C17.0786 31.1931 19.9427 25.955 26.1797 25.955C32.4168 25.955 37.7528 32.4719 36.2921 30.7865Z" fill="white" />
            <path d="M2.20368 28.5132L7.70652 34.6067C12.1401 34.6067 15.281 34.1451 15.281 34.1451C11.4608 33.0337 9.93928 25.2809 5.50572 25.2809C1.6855 26.1798 1.49155 27.6822 2.20368 28.5132Z" fill="white" />
            <path d="M31.6855 36.0709C31.6855 36.0709 28.1443 38.5067 20.4496 38.5067C12.7548 38.5067 5.73045 33.2584 5.73045 33.2584C4.26977 34.2697 8.87652 26.1798 15.3934 25.5056C23.0881 25.5056 27.8653 30.2247 31.6855 36.0709Z" fill="white" />
            <circle cx="20" cy="20" r="19" stroke="white" stroke-width="2" />
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
              <circle cx="20" cy="20" r="18" stroke="#6FCF97" stroke-width="4" />
            </mask>
            <g mask="url(#mask0)">
            </g>
          </svg>
          
        </LogoWrapper>
        <Typography style={{display: !matches ? "none" : "block", marginTop: 8}} variant="h4" color="primary">AIRADAR</Typography>
        </CenterWrapper>
        <UsernameWrapper>
          <Circle /><Typography variant="body1" align="center">Purinat</Typography>
        </UsernameWrapper>
        <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        {list()}
      </SwipeableDrawer>
      </AppbarContentWrapper>
    </AppbarWrapper>
  )
}
