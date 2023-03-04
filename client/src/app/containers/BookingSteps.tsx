import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
  `}
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-4xl
    text-black
    font-extrabold
  `}
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `}
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-16
    md:w-96
    items-center
    transition-colors
    hover:text-red-500
  `}
`

function BookingSteps() {
  return <div>BookingSteps</div>;
}

export default BookingSteps;
