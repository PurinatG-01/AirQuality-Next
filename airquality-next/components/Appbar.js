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
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/Info";
import { THEME } from "./variable";
import useUsers from "./hooks/useUsers"
import { useRouter } from "next/router"

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


const EmailWrapper = styled(motion.div)`
  display: flex;
  align-items:center;
`

const UsernameWrapper = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
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
  const { matches, userData } = props
  const [open, setOpen] = React.useState(false);
  const { signOut } = useUsers();
  const router = useRouter();

  const LabelItem = (color, text) => {
    return <Typography type="body2" style={{ color: color, fontWeight: 400 }}>{text ?? ""}</Typography>
  }

  const list = () => (
    <DrawerListRoot style={{ minWidth: 240 }}>
      <ListItem button key={"Dashboard"}>
        <ListItemIcon>
          <DashboardIcon style={{ color: THEME2.primary }} />
        </ListItemIcon>
        <ListItemText style={{ color: THEME2.primary }} primary={LabelItem(THEME2.primary, "Overview")} />
      </ListItem>
      <ListItem button key={"About"}>
        <ListItemIcon>
          <InfoIcon style={{ color: THEME2.primary }} />
        </ListItemIcon>
        <ListItemText primary={LabelItem(THEME2.primary, "Info")} />
      </ListItem>
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
        <CenterWrapper style={{ marginTop: !matches ? "0" : "10px" }}>
          <Logo size="48px" />
          <Typography style={{ display: !matches ? "none" : "block", marginTop: 8 }} variant="h4" color="primary">AIRADAR</Typography>
        </CenterWrapper>
        <UsernameWrapper>
  <Typography variant="body1" align="center">{ (userData[1]?.firstname ?? "")+ " "+ (userData[1]?.surname ?? "") }</Typography>
          <EmailWrapper>
            <Circle /><Typography variant="body1" align="center">{userData[1]?.email ?? "Anonymous"}</Typography>
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
