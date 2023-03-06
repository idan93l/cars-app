import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  min-height: 30em;
  background-color: rgb(31 42 76);
  ${tw`
    flex
    flex-wrap
    min-w-full
    pt-7
    pb-1
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    
  `}
`

function Footer() {
  return <FooterContainer>Container</FooterContainer>;
}

export default Footer;
