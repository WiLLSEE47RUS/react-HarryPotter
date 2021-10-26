import styled, { keyframes } from 'styled-components';

const dropdown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  padding: 20px 18px 0 14px;
  position: absolute;
  z-index: 2;
  /* input color */
  margin-top: 15px;
  background: #b09a81;
  /* Drop Shadow */

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  transition: all 0.5s;
  animation: ${dropdown} 0.5s ease-out;

  input {
    position: absolute;
    width: 0;
    height: 0;
    appearance: none;
    z-index: -1;
    opacity: 0;
  }
`;
