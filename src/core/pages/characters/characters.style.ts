import styled from 'styled-components';

import background from '../../../assets/bg.png';

export const Wrapper = styled.div`
  height: calc(100vh - 100px);
  background: url(${background}) center/cover no-repeat;
  overflow: hidden;
`;

export const Content = styled.div`
  margin: 53px auto 0;
  width: 1270px;
`;
