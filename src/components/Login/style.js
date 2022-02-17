import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);

  &:before {
    background-position: top;
    background-size: cover;
    background-image: url("/images/login-background.jpg");
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    content: " ";
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export { Container };
