import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  min-height: 20em;
  ${tw`
    flex
    flex-wrap
    min-w-full
    bg-blue-900
    pt-7
    pb-1
  `}
`

function index() {
  return <div>index</div>;
}

export default index;
