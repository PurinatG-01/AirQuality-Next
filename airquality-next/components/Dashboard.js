import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, Chip } from "@material-ui/core";
import TestChart from "./ChartJS";
import useAirData from "./hooks/useAirData";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { THEME } from "./variable";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import Typography from "@material-ui/core/Typography";

const ItemGrid = styled(Grid)`
  && {
    margin: 10px;
    ${(props) => props.width && `width : ${props.width};`}
    ${(props) => props.borderRadius && `border-radius: ${props.borderRadius}`}
  }
  padding: 10px;
  background: ${(props) => (props.bg ? props.bg : THEME.primary)};
  color: ${THEME.secondary};
  border-radius: 10px;
  ${THEME.boxShadow}
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 200px;
`;

const RawDataWrapper = styled(Grid)`
  && {
    margin: 10px;
  }
  display: flex;
  flex-direction: column;
  min-width: 400px;
  background: ${THEME.primary};
  color: ${THEME.secondary};
  border-radius: 10px;
`;

const StyleTableCell = styled(TableCell)`
  && {
    color: ${THEME.secondary};
    border: none;
  }
`;

const H1Title = styled.h3`
  background: ${THEME.primary};
`;

const Dashboard = () => {
  const airData = useAirData();

  return (
    <React.Fragment>
      <ItemGrid width="50px" borderRadius="40px">
        <Typography>
          <NetworkCellIcon
            style={{
              border: "1px solid ",
              borderRadius: "50%",
              borderColor: airData.resCheck
                ? "rgba(70, 206, 115, 1)"
                : "rgba(206, 70, 70, 1)",

              padding: 8,
              fill: airData.resCheck
                ? "rgba(70, 206, 115, 1)"
                : "rgba(206, 70, 70, 1)",
            }}
          />
        </Typography>
      </ItemGrid>
      <ItemGrid width="300px" item>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "none", backgroundColor: "transparent" }}
        >
          <Table
            size="small"
            aria-label="Raw data table"
            style={{ border: "none" }}
          >
            <TableHead>
              <TableRow>
                <StyleTableCell style={{fontSize: 24}}>Raw Data</StyleTableCell>
                <StyleTableCell style={{fontSize: 24}} align="right">Value</StyleTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={0}>
                <StyleTableCell component="th" scope="row">
                  CO2
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v0} ppm</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={1}>
                <StyleTableCell component="th" scope="row">
                  Temperature
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v1} &#xb0;C</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={2}>
                <StyleTableCell component="th" scope="row">
                  Humidity
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v2} %</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={3}>
                <StyleTableCell component="th" scope="row">
                  Pressure
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v3} &#xb5;A</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={4}>
                <StyleTableCell component="th" scope="row">
                  Gas
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v4} mA</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={5}>
                <StyleTableCell component="th" scope="row">
                  PM 1.0
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v5} &#xb5;g/m3</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={6}>
                <StyleTableCell component="th" scope="row">
                  PM 2.5
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v6} &#xb5;g/m3</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={7}>
                <StyleTableCell component="th" scope="row">
                  PM 10.0
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v7} &#xb5;g/m3</StyleTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ItemGrid>
      <ItemGrid width="600px" bg="#515070"></ItemGrid>
      <ItemGrid>
        <TestChart
          label="CO2"
          color="rgb(230,230,230)"
          areaColor="rgba(230,230,230,0.2)"
          newData={airData.v0}
        ></TestChart>
      </ItemGrid>
      <ItemGrid>
        <TestChart
          label="Temperature"
          color="rgb(40, 200, 184)"
          areaColor="rgba(40, 200, 184, 0.2)"
          newData={airData.v1}
        ></TestChart>
      </ItemGrid>
      <ItemGrid>
        <TestChart
          label="Humidity"
          color="rgb(40, 200, 93)"
          areaColor="rgba(40, 200, 93, 0.2)"
          newData={airData.v2}
        ></TestChart>
      </ItemGrid>
      <ItemGrid>
        <TestChart
          label="Pressure"
          color="rgb(117, 40, 200)"
          areaColor="rgba(117, 40, 200,  0.2)"
          newData={airData.v3}
        ></TestChart>
      </ItemGrid>
      <ItemGrid>
        <TestChart
          label="Gas"
          color="rgb(200, 40, 53)"
          areaColor="rgba(200, 40, 53, 0.2)"
          newData={airData.v4}
        ></TestChart>
      </ItemGrid>
    </React.Fragment>
  );
};

export default Dashboard;
