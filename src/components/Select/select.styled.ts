import styled from 'styled-components';
import arrow from '../../assets/select_arrow.png';

export const Wrapper = styled.div`
  width: 137px;
  height: 36px;
`;

export const Content = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
  font-weight: bold;
  background-color: #b09a81;
  padding: 12px;
  box-shadow: 0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: #462929;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    background-image: url(${arrow});
    height: 11px;
    width: 11px;
    top: 13px;
    right: 10px;
  }
`;
