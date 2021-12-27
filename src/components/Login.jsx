import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <h1>this is login page</h1>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: absolute;
  top: 80px;
  height: calc(100vh-80px);
  h1 {
    color: #fff;
  }
`;
