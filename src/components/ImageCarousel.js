import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageCarousel() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <StyledSlider {...carouselSettings}>
      <Slide>
        <img src="/images/slider-badging.jpg" alt="slider-badging" />
      </Slide>
      <Slide>
        <img src="/images/slider-badag.jpg" alt="slider-badag" />
      </Slide>
    </StyledSlider>
  );
}

export default ImageCarousel;

const StyledSlider = styled(Slider)`
  margin-top: 20px;

  .slick-slide img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.69),
      0px 16px 10px -10px rgba(0, 0, 0, 0.73);
    transition: border 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }

  .slick-active button::before {
    color: white;
  }
`;

const Slide = styled.div`
  cursor: pointer;

  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.69),
      0px 16px 10px -10px rgba(0, 0, 0, 0.73);
    transition: border 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
