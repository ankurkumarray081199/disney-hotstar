import React from "react";
import ImgSlider from "./ImgSlider.jsx";
import styled from "styled-components";
import TraySlider from "./TraySlider.jsx";
import { TraysData } from "./TraysData.jsx";
const Home = () => {
  return (
    <Container>
      <ImgSlider />
      {TraysData.map((value) => {
        const { id, title, data } = value;
        return <TraySlider key={id} title={title} data={data} />;
      })}
    </Container>
  );
};

export default Home;
const Container = styled.div`
  position: relative;
  top: 80px;
  min-height: calc(100vh-80px);
  z-index: 1;
  padding: 0 40px;
  overflow: hidden;
`;
