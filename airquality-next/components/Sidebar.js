import React from "react";
import styled from "styled-components";
import { THEME2 } from "./variable";

const SidebarWrapper = styled.div`
  height: 100vh;
  width: 57px;
  position: fixed;
    background-color: ${THEME2.white};
  ${THEME2.boxShadow}
`;

export default function Sidebar() {
  return <SidebarWrapper>
    
  </SidebarWrapper>;
}
