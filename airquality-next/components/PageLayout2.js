import React from "react";
import { THEME2 } from "./variable";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${THEME2.white};
`;

const PageLayout2 = () => {
  return (
    <LayoutWrapper>
      <Sidebar></Sidebar>
      <style jsx global>
        {`
          * {
            font-family: ${THEME2.fontFam};
            font-weight: 100;
            letter-spacing: 5px;
          }
        `}
      </style>
    </LayoutWrapper>
  );
};

export default PageLayout2;
