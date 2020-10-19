import React from "react";
import { THEME2 } from "./variable";
import Appbar from "./Appbar";
import styled from "styled-components";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Container,Grid} from "@material-ui/core"
const LayoutWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${THEME2.white};
`;

const PageLayout2 = (props) => {
  const matches = useMediaQuery(`(min-width: ${THEME2.breakpointM}px)`);

  return (
    <LayoutWrapper>
      <Appbar matches={matches}></Appbar>
      <Container maxWidth="lg" style={{ width: "100vw",backgroundColor: THEME2.transColor,margin: "120px auto 30px auto",borderRadius: 30 }}>
      </Container>
    </LayoutWrapper>
  );
};

export default PageLayout2;
