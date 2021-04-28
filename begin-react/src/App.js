import React from "react";
import Props from "./Props";
import Wrapper from "./Wrapper";
import ConditionalRednering from "./ConditionalRendering";

function App() {
  return (
    <Wrapper>
      <Props name="React" color="red" />
      <Props color="blue" />
      <ConditionalRednering isSpecial />
    </Wrapper>
  )
}

export default App;