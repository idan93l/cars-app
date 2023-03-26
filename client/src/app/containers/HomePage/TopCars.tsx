import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import Car from "../../components/car";
import { SCREENS } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import carsService from "../../services/carsService";
import { Dispatch } from "@reduxjs/toolkit";
import { setTopCars } from "./slice";
import { GetCars_cars } from "../../services/carsService/__generated__/GetCars";
import { useDispatch } from "react-redux";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `}
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

function TopCars() {
  // const [current, setCurrent] = useState();

  // const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    const cars = await carsService.getCars().catch((err) => {
      console.log("Error: ", err);
    });
    console.log("Cars: ", cars);
    if (cars) setTopCars(cars);
  };

  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  useEffect(() => {
    fetchTopCars();
  }, []);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Swiper
          // style={{width: "89%", display: "flex", justifyContent: "center", alignItems: "center"}}
          style={{ width: "89%" }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          scrollbar={{ draggable: false }}
          autoplay
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            900: {
              width: 900,
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Car {...testCar} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar2} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar2} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar} />
          </SwiperSlide>
          <SwiperSlide>
            <Car {...testCar2} />
          </SwiperSlide>
        </Swiper>
      </CarsContainer>
    </TopCarsContainer>
  );
}

export default TopCars;
