import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core"
import { THEME2 } from "./variable";
import { motion } from "framer-motion"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "./Logo"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { THEME } from "./variable";
import useUsers from "./hooks/useUsers"
import { useRouter } from "next/router"

const AppbarWrapper = styled(motion.div)`
  height: 72px;
  width: 100%;
  position: fixed;
  background-color: transparent;
  display: flex;
  align-items: center;
  background: ${THEME2.primary};
  border-bottom-right-radius: 30px; 
  border-bottom-left-radius: 30px; 
 ${THEME2.boxShadow}
  z-index: 100;  
`;

const AppbarContentWrapper = styled(motion.div)`
  margin: 0 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


const EmailWrapper = styled(motion.div)`
  display: flex;
  align-items:center;
`

const UsernameWrapper = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  max-width: 100px;
  
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
  position: fixed;
  width: 100vw;
  left:0;
  z-index: -1;
`

const ProfileIcon = styled(AccountCircleIcon)`
  margin-right: 8px;
  font-size: 32px !important;
  color: ${THEME2.white};
`

export default function Appbar(props) {
  const { matches, userData, setPage, PAGE } = props
  const [open, setOpen] = React.useState(false);
  const { signOut } = useUsers();
  const router = useRouter();

  const LabelItem = (color, text) => {
    return <Typography type="body2" style={{ color: color, fontWeight: 400 }}>{text ?? ""}</Typography>
  }


  const list = () => (
    <DrawerListRoot style={{ minWidth: 240 }}>
      {PAGE.map((el) => {
        return (<motion.div whileHover={{ scale: 1.2, x: 30 }} key={el.tag}><ListItem onClick={() => { setPage(el.tag); setOpen(false); }} button key={el.tag}>
          <ListItemIcon>
            <el.icon style={{ color: THEME2.primary }} />
          </ListItemIcon>
          <ListItemText primary={LabelItem(THEME2.primary, el.tag)} />
        </ListItem>
        </motion.div>
        )
      })}
      <motion.div whileHover={{ scale: 1.2, x: 30 }} >
        <ListItem onClick={() => {
          signOut(() => {
            router.push("/")
          })
        }
        }
          button key={"Sign out"}>
          <ListItemIcon>
            <ExitToAppIcon style={{ color: THEME.red }} />
          </ListItemIcon>
          <ListItemText primary={LabelItem(THEME2.red, "Sign out")} />
        </ListItem>
      </motion.div>
    </DrawerListRoot>
  );

  return (
    <AppbarWrapper initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} >
      <AppbarContentWrapper>
        <IconButton
          style={{ color: THEME2.white }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <CenterWrapper>
          <Logo size="48px" />
        </CenterWrapper>
        <UsernameWrapper>
          <EmailWrapper>
            <ProfileIcon />
            <Typography style={{ display: !matches ? "none" : "block", color: THEME2.white }} variant="body1" align="center">{userData[1]?.firstname ?? "Anonymous"}</Typography>
          </EmailWrapper>
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


{/* <ListItem onClick={() => { setPage(PAGE.Dashboard); setOpen(false); }} button key={"Dashboard"}>
        <ListItemIcon>
          <DashboardIcon style={{ color: THEME2.primary }} />
        </ListItemIcon>
        <ListItemText style={{ color: THEME2.primary }} primary={LabelItem(THEME2.primary, "Dashboard")} />
      </ListItem>
      <ListItem onClick={() => { setPage(PAGE.AboutUs); setOpen(false); }} button key={"About us"}>
        <ListItemIcon>
          <InfoIcon style={{ color: THEME2.primary }} />
        </ListItemIcon>
        <ListItemText primary={LabelItem(THEME2.primary, "About us")} />
      </ListItem> */}