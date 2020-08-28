import React from "react";
import Drawer from "./Drawer";
import styled from "styled-components";
import Head from "next/head";
import { Container, Typography, Grid } from "@material-ui/core";

const PageRoot = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(20, 20, 20, 1) 0%,
    rgba(35, 35, 35, 1) 100%
  );
`;

const DashBoardTitle = styled.h1`
  text-align: center;
  color: #fefefe;
`;

function PageLayout(props) {
  const [state, setState] = React.useState(0);
  return (
    <PageRoot>
      <Head>
        <title>MUICT Senior 2020 : Air Quality </title>∏
        <link rel="shortcut icon" href="/static/muict_logo.ico" />
      </Head>

      <Drawer>
        <h1>Test use next.js</h1>
        <button onClick={() => setState(state + 1)}> Button : {state} </button>
      </Drawer>
      <DashBoardTitle>Air Quality Sensor</DashBoardTitle>
      <Container maxWidth="lg" style={{ marginBottom: 100 }}>
        <Grid container justify="center" style={{ width: "100%", flexGrow: 1 }}>
          {props.children}
        </Grid>
      </Container>
      <style jsx global>
        {`
          * {
            font-family: monospace;
            color: #fefefe;
            font-weight: 100;
            letter-spacing: 5px;
          }
        `}
      </style>
    </PageRoot>
  );
}

export default PageLayout;
