import React from "react";
import { THEME2 } from "./variable";
import Appbar from "./Appbar";
import styled from "styled-components";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container, Grid, Drawer, List, Typography } from "@material-ui/core"
import useUsers from '../components/hooks/useUsers'
import { motion } from "framer-motion"
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useRouter } from "next/router"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Logo from './Logo'

const LayoutWrapper = styled.div`

  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${THEME2.white};
  // background-image: url("../static/Main-BG.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 80% 100%;
  overflow: hidden;

`;

const CustomSidebar = styled(motion.div)`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  padding-left: 20px; 
`

const CustomTab = styled(motion.div)`
  
  padding: 20px 0 20px 0;
  background: ${THEME2.white};
  border: 1px solid ${THEME2.dividerColor};
  border-radius: 30px;

`
const LogoWrapper = styled(motion.div)`

margin-bottom: 8px;
padding: 8px; 
border-radius:50%;
background-color: ${THEME2.white};
border: 1px solid ${THEME2.dividerColor};

`

const PageLayout2 = (props) => {
  const matches = useMediaQuery(`(min-width: ${THEME2.breakpointM}px)`);
  const { userData } = useUsers()
  const { setPage, PAGE } = props
  const { signOut } = useUsers();
  const router = useRouter()

  const list = () => (
    // <DrawerListRoot >
    <CustomSidebar>


      <LogoWrapper>
        <Logo size="48px"></Logo>
      </LogoWrapper>


      <CustomTab>
        <motion.div>
          <ListItem onClick={() => {
            alert("Profile")
          }}
            button
            key={"Sign out"}
          >
            <ListItemIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <AccountCircleIcon style={{ color: THEME2.primary }} />
            </ListItemIcon>
          </ListItem>
        </motion.div>

        {PAGE.map((el) => {
          return (
            <motion.div key={el.tag}>
              <ListItem onClick={() => { setPage(el.tag); }} button key={el.tag}>
                <ListItemIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  <el.icon style={{ color: THEME2.primary }} />
                </ListItemIcon>
              </ListItem>
            </motion.div>
          )
        })}

        <motion.div>
          <ListItem onClick={() => {
            signOut(() => {
              router.push("/")
            })
          }}
            button
            key={"Sign out"}
          >
            <ListItemIcon style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <ExitToAppIcon style={{ color: THEME2.red }} />
            </ListItemIcon>
          </ListItem>
        </motion.div>

      </CustomTab>
    </CustomSidebar>

  );


  return (
    <motion.div style={{ display: "flex", width: "100%", height: "100%" }}>
      { matches && list()}
      <LayoutWrapper>
        {matches ? <></>
          :
          <Appbar PAGE={PAGE} setPage={setPage} matches={matches} userData={userData} />
        }
        <div style={{ padding: matches ? "40px 140px 0 140px" : "40px 0px 0 0px", flexGrow: 1 }}>
          <Container maxWidth="xl" style={{ display: "flex", margin: "40px auto 30px auto" }}>
            {props.children}
          </Container>
        </div>
      </LayoutWrapper>
    </motion.div>
  );
};

export default PageLayout2;
