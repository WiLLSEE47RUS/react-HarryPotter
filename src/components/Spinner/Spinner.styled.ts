import styled from 'styled-components';

export const Spinner = styled.div`
  border: 15px solid #eee;
  border-top: 15px solid #353535;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto; 
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
