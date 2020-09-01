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

const ItemGrid = styled(Grid)`
  && {
    margin: 10px;
    ${(props) => props.width && `width : ${props.width};`}
  }
  // height: 500px;
  min-width: 300px;
  background: transparent;
  color: #232323;
  border: 1px solid #232323;
  border-radius: 10px;
`;

const RawDataWrapper = styled(Grid)`
  && {
    margin: 10px;
  }
  display: flex;
  flex-direction: column;
  // height: 500px;
  min-width: 400px;
  background: #232323;
  color: #232323;
  border: 1px solid #232323;
  border-radius: 10px;
`;

const StyleTableCell = styled(TableCell)`
  && {
    color: #fefefe;
    border: none;
  }
`;

const Dashboard = () => {
  const airData = useAirData();

  return (
    <React.Fragment>
      <Chip
        variant="outlined"
        size="medium"
        color={airData.resCheck ? "primary" : "secondary"}
        label="Online"
      />

      <ItemGrid width="100%" item>
        <TableContainer
          component={Paper}
          style={{ backgroundColor: "#232323" }}
        >
          <Table size="small" aria-label="Raw data table">
            <TableHead>
              <TableRow>
                <StyleTableCell>Raw Data</StyleTableCell>
                <StyleTableCell align="right">Value</StyleTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={0}>
                <StyleTableCell component="th" scope="row">
                  CO2
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v0}</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={1}>
                <StyleTableCell component="th" scope="row">
                  Temperature
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v1}</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={2}>
                <StyleTableCell component="th" scope="row">
                  Humidity
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v2}</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={3}>
                <StyleTableCell component="th" scope="row">
                  Pressure
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v3}</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={4}>
                <StyleTableCell component="th" scope="row">
                  Gas
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v4}</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={5}>
                <StyleTableCell component="th" scope="row">
                  PM 1.0
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v5}</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={6}>
                <StyleTableCell component="th" scope="row">
                  PM 2.5
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v6}</StyleTableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow key={7}>
                <StyleTableCell component="th" scope="row">
                  PM 10.0
                </StyleTableCell>
                <StyleTableCell align="right">{airData.v7}</StyleTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ItemGrid>
      <ItemGrid>
        <TestChart
          label="CO2"
          color="rgb(254,254,254)"
          areaColor="rgba(254,254,254,0.2)"
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
