import React from "react";
import styled from "styled-components";

const Disney = () => {
  return (
    <Container>
      <h1>this is Disney section</h1>
    </Container>
  );
};

export default Disney;

const Container = styled.div`
  position: absolute;
  top: 80px;
  height: calc(100vh-80px);
  h1 {
    color: #fff;
  }
`;
