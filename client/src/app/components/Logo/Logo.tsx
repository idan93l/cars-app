import React from "react";
import styled from "styled-components";
import CarLogoImg from "../../../assets/images/car-logo.png";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
`;

const Image = styled.div`
  width: auto;
  ${tw`flex flex-row h-6 md:h-9`}
  img {
    width: auto;
    height: 100%;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="Car" />
        <LogoText>CarRent</LogoText>
      </Image>
    </LogoContainer>
  );
}

export default Logo;
