import React from "react";
import { THEME2 } from "./variable";
import Appbar from "./Appbar";
import styled from "styled-components";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container, Grid } from "@material-ui/core"
import useUsers from '../components/hooks/useUsers'

const LayoutWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${THEME2.white};
`;

const PageLayout2 = (props) => {
  const matches = useMediaQuery(`(min-width: ${THEME2.breakpointM}px)`);
  const { userData } = useUsers()


  return (
    <LayoutWrapper>
      <Appbar matches={matches} userData={userData} ></Appbar>
      <Container maxWidth="lg" style={{ width: "100vw", margin: "120px auto 30px auto" }}>
        {props.children}
      </Container>
    </LayoutWrapper>
  );
};

export default PageLayout2;
