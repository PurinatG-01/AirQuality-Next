import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { Grid, Chip, Divider } from "@material-ui/core";
import LineChart from "../ChartJS";
import {useAirData2} from "../hooks/useAirData";
import { THEME } from "../variable";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MainData from "../MainData";

export const ItemGrid = styled(Grid)`
  && {
    margin: 10px;
    ${(props) => props.width && `width : ${props.width} !important;`}
    ${(props) =>
      props.borderradius && `border-radius: ${props.borderradius};`}
    ${(
      props
    ) =>
      props.flexdirection && `flex-direction: ${props.flexdirection};`}
      ${(
      props
    ) => props.height && `height: ${props.height} !important;
    min-height: ${props.height} !important`}
  }
  padding: 10px;
  background: ${(props) => (props.bg ? props.bg : THEME.primary)};
  color: ${THEME.secondary};
  border-radius: 10px;
  ${THEME.boxShadow}
  display: flex;
  align-items: center;
  min-height: 200px;
  overflow-x: scroll;
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

const Dashboard = () => {
  const [counter, setCounter] = useState("");
  const airData = useAirData2("XYS9rw2wCXCqBN8yq9TnJw_4zy0p5A5j")

  return (
    <React.Fragment>
      <ItemGrid borderradius="30px" width="80vw !important">
        <MainData airData={airData} />
      </ItemGrid>

      {
        // ---------- Graph ----------
      }
      <ItemGrid>
        <LineChart
          label="CO2"
          color="rgb(230,230,230)"
          areaColor="rgba(230,230,230,0.2)"
          newData={{ value: airData.v0, label: counter }}
        ></LineChart>
      </ItemGrid>
      <ItemGrid>
        <LineChart
          label="Gas"
          color="rgb(200, 40, 53)"
          areaColor="rgba(200, 40, 53, 0.2)"
          newData={{ value: airData.v4, label: counter }}
        ></LineChart>
      </ItemGrid>

      <ItemGrid>
        <LineChart
          label="Temperature"
          color="rgb(40, 200, 184)"
          areaColor="rgba(40, 200, 184, 0.2)"
          newData={{ value: airData.v1, label: counter }}
        ></LineChart>
      </ItemGrid>
      <ItemGrid>
        <LineChart
          label="Humidity"
          color="rgb(40, 200, 93)"
          areaColor="rgba(40, 200, 93, 0.2)"
          newData={{ value: airData.v2, label: counter }}
        ></LineChart>
      </ItemGrid>
      <ItemGrid>
        <LineChart
          label="Pressure"
          color="rgb(117, 40, 200)"
          areaColor="rgba(117, 40, 200,  0.2)"
          newData={{ value: airData.v3, label: counter }}
        ></LineChart>
      </ItemGrid>
      <ItemGrid>
        <LineChart
          label="PM 1.0"
          color="rgb(0, 20, 10)"
          areaColor="rgba(0, 20, 10, 0.2)"
          newData={{ value: airData.v5, label: counter }}
        ></LineChart>
      </ItemGrid>
      <ItemGrid>
        <LineChart
          label="PM 2.5"
          color="rgb(0, 20, 10)"
          areaColor="rgba(0, 20, 10, 0.2)"
          newData={{ value: airData.v6, label: counter }}
        ></LineChart>
      </ItemGrid>
      <ItemGrid>
        <LineChart
          label="PM 10.0"
          color="rgb(0, 20, 10)"
          areaColor="rgba(0, 20, 10, 0.2)"
          newData={{ value: airData.v7, label: counter }}
        ></LineChart>
      </ItemGrid>
    </React.Fragment>
  );
};

export default Dashboard;
