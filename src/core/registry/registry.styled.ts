import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 52px;
`;


const appear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  flex-wrap: wrap;
  animation: ${appear} 0.3s ease-in;
`;
export const ButtonContainer = styled.div`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 33px 0 45px;
`;
