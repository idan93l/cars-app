import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  min-height: 30em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;



const HeaderTitle = styled.h3`
  ${tw`
    text-base
    font-bold
    text-white
    mb-3
  `}
`;

function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            CaRent is a car renting and selling company located in many
            countries across the globe. We have high quality cars and and top
            rated service.
          </AboutText>
        </AboutContainer>
      </InnerContainer>
    </FooterContainer>
  );
}

export default Footer;
