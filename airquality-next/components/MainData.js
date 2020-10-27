import React from "react";
import { ItemGrid } from "./prev_component/Dashboard";
import { Container, Typography, Divider, Grid } from "@material-ui/core";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import DnsIcon from "@material-ui/icons/Dns";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Score from "./Score";
import { THEME } from "./variable";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const StyleTableCell = styled(TableCell)`
  && {
    color: ${THEME.secondary};
    border: none;
  }
`;

const FlexBreak = styled.div`
  flex-basis: 100%;
  width: 100%;
  height: 0;
`;

const MainData = (props) => {
  const { airData } = props;
  const collapse = useMediaQuery("(min-width:552px)");
  return (
    <Container maxWidth="lg" style={{ display: `flex` }}>
      <Grid
        item
        container
        justify="center"
        style={{ width: "100%", flexGrow: 1 }}
      >
        <ItemGrid
          width={collapse ? "50px" : "100%"}
          height={collapse ? "auto" : "50px"}
          borderradius="40px"
          flexdirection={collapse ? "column" : "row"}
        >
          <Typography>
            <NetworkCellIcon
              style={{
                border: "1px solid ",
                borderRadius: "50%",
                borderColor: airData.resCheck ? THEME.green : THEME.red,
                padding: 8,
                fill: airData.resCheck ? THEME.green : THEME.red,
                marginRight: collapse ? 0:8 
              }}
            />
          </Typography>
          <Typography>
            <DnsIcon
              style={{
                border: "1px solid ",
                borderRadius: "50%",
                borderColor: airData.resApp ? THEME.green : THEME.red,
                padding: 8,
                fill: airData.resApp ? THEME.green : THEME.red,
                marginRight: collapse ? 0:8 
              }}
            />
          </Typography>
          <Divider
            orientation={collapse ? "horizontal" : "collapse"}
            style={{
              width: collapse ? "100%" : "1px",
              height: collapse ? "1px" : "100%",
              marginRight: collapse ? 0:8 
            }}
          />
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
                  <StyleTableCell style={{ fontSize: 24 }}>
                    Raw Data
                  </StyleTableCell>
                  <StyleTableCell style={{ fontSize: 24 }} align="right">
                    Value
                  </StyleTableCell>
                </TableRow>
              </TableHead>
              <TableBody
                style={{ borderBottom: `1px solid ${THEME.dividerColor}` }}
              >
                <TableRow key={0}>
                  <StyleTableCell component="th" scope="row">
                    CO2
                  </StyleTableCell>
                  <StyleTableCell align="right">
                    {airData.v0} ppm
                  </StyleTableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow key={1}>
                  <StyleTableCell component="th" scope="row">
                    Temperature
                  </StyleTableCell>
                  <StyleTableCell align="right">
                    {airData.v1} &#xb0;C
                  </StyleTableCell>
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
                  <StyleTableCell align="right">
                    {airData.v3} &#xb5;A
                  </StyleTableCell>
                </TableRow>
              </TableBody>
              <TableBody
                style={{ borderBottom: `1px solid ${THEME.dividerColor}` }}
              >
                <TableRow key={4}>
                  <StyleTableCell component="th" scope="row">
                    Gas
                  </StyleTableCell>
                  <StyleTableCell align="right">{airData.v4} mA</StyleTableCell>
                </TableRow>
              </TableBody>
              <FlexBreak />
              <TableBody>
                <TableRow key={5}>
                  <StyleTableCell component="th" scope="row">
                    PM 1.0
                  </StyleTableCell>
                  <StyleTableCell align="right">
                    {airData.v5} &#xb5;g/m3
                  </StyleTableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow key={6}>
                  <StyleTableCell component="th" scope="row">
                    PM 2.5
                  </StyleTableCell>
                  <StyleTableCell align="right">
                    {airData.v6} &#xb5;g/m3
                  </StyleTableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow key={7}>
                  <StyleTableCell component="th" scope="row">
                    PM 10.0
                  </StyleTableCell>
                  <StyleTableCell align="right">
                    {airData.v7} &#xb5;g/m3
                  </StyleTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </ItemGrid>

        {
          //  ---------- Score ----------
        }
        <ItemGrid width="600px">
          <Score overallScore={74} />
        </ItemGrid>
      </Grid>
    </Container>
  );
};

export default MainData;
