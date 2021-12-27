import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "./sliderData";

const ImgSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      {sliderData.map((val) => {
        const { id, title, genre, content, imageSrc } = val;
        return (
          <Wrap key={id}>
            <img src={require(`../Slider/${imageSrc}.webp`)} alt="Im" />
          </Wrap>
        );
      })}
    </Carousel>
  );
};

export default ImgSlider;
const Carousel = styled(Slider)`
  margin-top: 5px;

  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  button {
    z-index: 1;
  }

  .slick-next {
    right: -17px;
  }
  .slick-prev {
    left: -42px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 45px;
    line-height: 1;
    opacity: 0.4;
    color: #ffffffcc;
  }
`;
const Wrap = styled.div`
  padding: 10px;
  cursor: pointer;
  height: 500px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.33, 0.04, 0.63, 0.93);
    &:hover {
      border: 2px solid #fff;
    }
  }
`;
