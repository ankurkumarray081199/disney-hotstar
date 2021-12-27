import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h1>this is Movies section</h1>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  position: absolute;
  top: 80px;
  height: calc(100vh-80px);
  h1 {
    color: #fff;
  }
`;
