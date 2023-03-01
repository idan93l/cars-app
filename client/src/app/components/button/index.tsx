import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme: "filled" | "outlined";
  text: string;
}

const BaseButton = styled.button`
  ${tw`
    
  `}
`

function Button(props: IButtonProps) {
  return <div>Button</div>;
}

export default Button;
