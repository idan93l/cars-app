import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  min-height: 30em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-wrap
    min-w-full
    pt-7
    pb-1
  `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    max-w-screen-2xl
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
  `}
`;

function Footer() {
  return (
    <FooterContainer>
      <AboutContainer>
        <Logo color="white" bgColor="dark" />
      </AboutContainer>
    </FooterContainer>
  );
}

export default Footer;
