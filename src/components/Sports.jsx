import React from "react";
import styled from "styled-components";

const Sports = () => {
  return (
    <Container>
      <h1>this is Sports section</h1>
    </Container>
  );
};

export default Sports;

const Container = styled.div`
  position: absolute;
  top: 80px;
  height: calc(100vh-80px);
  h1 {
    color: #fff;
  }
`;
