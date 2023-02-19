import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "./app/components/Navbar";
import HomePage from "./app/containers/HomePage";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <HomePage />
    </AppContainer>
  );
}

export default App;
