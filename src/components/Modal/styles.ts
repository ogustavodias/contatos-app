import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: initial;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  padding: 20px;
  z-index: 1;
  animation: ${show} 0.3s linear forwards alternate;
`;
