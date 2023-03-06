import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark",
  bgColor?: "white" | "dark"
}

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
  `};
  ${({ color }: any) => color === "white" ? tw`text-white` : tw`text-black`}
` as any;

const Image = styled.div`
  width: auto;
  ${tw`flex flex-row h-6 md:h-9`}
  img {
    width: auto;
    height: 100%;
  }
`;

function Logo(props: ILogoProps) {
  const { color } = props;

  return (
    <LogoContainer>
      <Image>
        <img src={color === "white" ? CarLogoImg : CarLogoDarkImg} alt="Car" />
        <LogoText color={color || "dark"}>CarRent</LogoText>
      </Image>
    </LogoContainer>
  );
}

export default Logo;
