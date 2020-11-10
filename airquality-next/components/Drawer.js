import React from "react";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/Info";
import { THEME } from "./variable";
import useUsers from "./hooks/useUsers"
import {useRouter} from "next/router"
import clsx from 'clsx';

const DrawerRoot = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  color: ${THEME.secondary};
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(254,254,254,1) 30%, rgba(254,254,254,0) 100%);
`;

const DrawerListRoot = styled(List)`
  min-width: 240px;
  background: ${THEME.primary};
  height: 100%;
  color: ${THEME.secondary} !important;
  border-radius: 0 30px 30px 0;
`;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function PersistentDrawerLeft(props) {
  const [open, setOpen] = React.useState(false);

  const { signOut } = useUsers();
  const router = useRouter();

  const list = () => (
    <DrawerListRoot style={{ minWidth: 240 }}  >
      <ListItem button key={"Dashboard"}>
        <ListItemIcon>
          <DashboardIcon style={{ color: THEME.secondary }} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button key={"About"}>
        <ListItemIcon>
          <InfoIcon style={{ color: THEME.secondary }} />
        </ListItemIcon>
        <ListItemText primary="About us" />
      </ListItem>
      
    </DrawerListRoot>
  );


  

  return (
    <DrawerRoot style={{  width: "100vw", height: 50 , position: "fixed" }}>
      <IconButton
        style={{ color: THEME.secondary}}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>      
    </DrawerRoot>
  );
}

export default PersistentDrawerLeft;
