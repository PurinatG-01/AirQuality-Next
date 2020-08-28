import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import TestChart from "./ChartJS";



const ItemGrid = styled(Grid)`
  && {
    margin: 10px;
  }
  // height: 500px;
  min-width: 400px;
  background: #fefefe;
  color: #232323;
  border: 1px solid #232323;
  border-radius: 10px;
`;

const Dashboard = () => {
  return (
    <React.Fragment>
      <ItemGrid item xs>
        <TestChart></TestChart>
      </ItemGrid>
      <ItemGrid item xs>
        <TestChart></TestChart>
      </ItemGrid>
      <ItemGrid item xs>
        <TestChart></TestChart>
      </ItemGrid>
      <ItemGrid item xs>
        <TestChart></TestChart>
      </ItemGrid>
    </React.Fragment>
  );
};

export default Dashboard;
