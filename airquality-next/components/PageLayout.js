import React from "react";
import Drawer from "./Drawer";
import styled from "styled-components";
import Head from "next/head";
import { Container, Typography, Grid } from "@material-ui/core";
import { THEME } from "./variable";

const PageRoot = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
    background: linear-gradient(140deg, ${THEME.primary} 60%, #fafafa 60%);
`;


const DashBoardTitle = styled.h1`
  text-align: center;
  color: ${THEME.secondary};
  font-weight: 500;
  margin-top: 100px;

`;

function PageLayout(props) {
  const [state, setState] = React.useState(0);
  return (
    <PageRoot>
      <Head>
        <title>MUICT Senior 2020 : Air Quality </title>∏
        <link rel="shortcut icon" href="/static/muict_logo.ico" />
      </Head>
      <Drawer />
      <DashBoardTitle >Air Quality Sensor</DashBoardTitle>
      <Container maxWidth="lg" style={{ marginBottom: 100 }}>
        <Grid container justify="center" style={{ width: "100%"}}>
          {props.children}
        </Grid>
      </Container>
      <style jsx global>
        {`
          * {
            font-family: ${THEME.fontFam};
           
            font-weight: 100;
            letter-spacing: 5px;
          }
        `}
      </style>
    </PageRoot>
  );
}

export default PageLayout;
