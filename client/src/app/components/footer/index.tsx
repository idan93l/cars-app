import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo/Logo";

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
`;

function Footer() {
  return <FooterContainer>
    <AboutContainer>
      <Logo color="white"/>
    </AboutContainer>
  </FooterContainer>;
}

export default Footer;
