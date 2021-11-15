import styled from 'styled-components';
import background from '../../../assets/bg_1.png';

export const Wrapper = styled.main`
  background: url(${background}) center/cover no-repeat;
  min-height: calc(100vh - 100px);
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  top: calc(227 / 980 * 100%);
  left: calc(221 / 1920 * 100%);
  width: 711px;
  h1 {
    font-weight: 700;
    font-size: 72px;
    color: #fff;
    line-height: 80px;
  }
  p {
    margin-top: 65px;
    font-size: 24px;
    color: #fff;
    line-height: 31px;
  }
  button {
    margin-top: 86px;
  }
  animation: home 0.5s ease-in;
  @keyframes home {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
