import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TraySlider = ({ title, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
  };
  return (
    <Tray>
      <h2>{title}</h2>
      <Content {...settings}>
        {data.map((val) => {
          const { id, title, genre, content, imageSrc } = val;
          return (
            <Wrap key={id}>
              <img src={require(`../Tray1Slider/${imageSrc}.webp`)} alt="Im" />
            </Wrap>
          );
        })}
      </Content>
    </Tray>
  );
};

export default TraySlider;

const Tray = styled.div`
  position: relative;
  height: 35vh;
  margin-top: 50px;

  h2 {
    display: inline-block;
    text-align: left;
    color: #fff;
    margin-bottom: 15px;
    letter-spacing: 1px;
    line-height: 1.1;
    text-transform: capatilize;
    font-size: 1.5em;
    font-weight: bold;
    &:hover {
      color: #337ab7;
    }
  }
`;
const Content = styled(Slider)`
  .slick-list {
    overflow: visible;
  }
  .slick-arrow {
    ${"" /* display: none !important; */}
  }
  .slick-next {
    right: -17px;
  }
  .slick-prev {
    left: -42px;
  }
  .slick-prev:before {
    visibility: hidden;
  }
  .slick-next:before {
    font-family: "slick";
    font-size: 45px;
    line-height: 1;
    opacity: 0.7;
    color: #ffffff;
  }
`;
const Wrap = styled.div`
  height: 230px;
  width: 138px;
  padding: 5px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 250ms cubic-bezier(0.33, 0.04, 0.63, 0.93);
    &:hover {
      transform: scale(1.2);
    }
  }
`;
