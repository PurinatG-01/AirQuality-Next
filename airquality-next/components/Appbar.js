import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography} from "@material-ui/core"
import { THEME2 } from "./variable";
import { motion } from "framer-motion"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LogoW from "./LogoW"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { THEME } from "./variable";
import useUsers from "./hooks/useUsers"
import { useRouter } from "next/router"


const useStyles = makeStyles({
  paper: {
    background: 'transparent',
    boxShadow: "none",
  },
  list: {
    background: "red",
  },
  backdrop: {
    backdropFilter: "blur(10px)",
    background: "rgba(120,120,120,0.2)",
  }
})


const AppbarWrapper = styled(motion.div)`
  height: 72px;
  width: 100%;
  position: fixed;
  background-color: ${props => (props.matches ? "transparent" : THEME2.primary)};
  display: flex;
  align-items: center;
  border-bottom-right-radius:  ${props => (props.matches ? "0" : "30px")} ;
  border-bottom-left-radius: ${props => (props.matches ? "0" : "30px")} ;
  
  z-index: 100;  
  
`

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

const DrawerListRoot = styled(List)`
  min-width: 240px;
  background: ${THEME.primary};
  height: 100%;
  color: ${THEME.secondary} !important;
  border-radius: 0 30px 30px 0;
  
`

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
  color: ${props => (props.matches ? THEME2.primary : THEME2.white)};
`

export default function Appbar(props) {
  const { matches, userData, setPage, PAGE, setProfileOpen } = props
  const [open, setOpen] = React.useState(false);
  const { signOut } = useUsers();
  const router = useRouter();

  const classes = useStyles();

  // animate navbar
  const [hideNav, setHideNav] = useState(false)
  const [lastPosY, setLastPosY] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY
      const isScrollingUp = yPos < lastPosY;
      setHideNav(!isScrollingUp)
      setLastPosY(yPos)
    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }

  }, [lastPosY])

  const LabelItem = (color, text) => {
    return <Typography type="body2" style={{ color: color, fontWeight: 400 }}>{text ?? ""}</Typography>
  }


  const list = () => (
    <DrawerListRoot style={{ minWidth: 240, background: THEME2.primary }}>
      {PAGE.map((el) => {
        return (<motion.div whileHover={{ scale: 1.2, }} key={el.tag}><ListItem onClick={() => { setPage(el.tag); setOpen(false); }} button key={el.tag}>
          <ListItemIcon>
            <el.icon style={{ color: THEME2.white }} />
          </ListItemIcon>
          <ListItemText primary={LabelItem(THEME2.white, el.tag)} />
        </ListItem>
        </motion.div>
        )
      })}
      <motion.div whileHover={{ scale: 1.2, backgroundColor: THEME2.red }} >
        <ListItem onClick={() => {
          signOut(() => {
            router.push("/")
          })
        }
        }
          button key={"Sign out"}

        >
          <ListItemIcon>
            <ExitToAppIcon style={{ color: THEME2.white }} />
          </ListItemIcon>
          <ListItemText primary={LabelItem(THEME2.white, "Sign out")} />
        </ListItem>
      </motion.div>
    </DrawerListRoot>
  );

  return ( matches ? <></> : 
    <AppbarWrapper matches={matches} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1.0, y: hideNav ? -100 : 0 }} >
      <AppbarContentWrapper>
        <IconButton
          style={{ color: THEME2.white}}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <CenterWrapper>
            <LogoW size="48px" />
        </CenterWrapper>
        <UsernameWrapper>
          <EmailWrapper onClick={setProfileOpen}>
            <ProfileIcon matches={matches} />
            <Typography style={{ display: !matches ? "none" : "block", color: THEME2.primary }} variant="body1" align="center">{userData[1]?.firstname ?? "Anonymous"}</Typography>
          </EmailWrapper>
        </UsernameWrapper>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          classes={{ paper: classes.paper }}
          ModalProps={{
            BackdropProps: {
              classes: {
                root: classes.backdrop
              }
            }
          }}
        >
          {list()}
        </SwipeableDrawer>
        
      </AppbarContentWrapper>
    </AppbarWrapper>
        )
  
}

