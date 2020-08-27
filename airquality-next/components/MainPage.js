import React from "react";
import Drawer from "./Drawer";
import styled from 'styled-components'

const PageRoot = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 0;
    background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(35,35,35,1) 100%);`

function MainPage() {
  const [state, setState] = React.useState(0);
  return (
    <PageRoot>
      <Drawer>
        <h1>Test use next.js</h1>
        <button onClick={() => setState(state + 1)}> Button : {state} </button>
      </Drawer>
    </PageRoot>
  );
}

export default MainPage;
