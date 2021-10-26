import styled from 'styled-components';

import icon from '../../../assets/searchicon.png';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  &:before {
    content: '';
    background: url(${icon}) no-repeat;
    background-size: cover;
    position: absolute;
    right: 16px;
    top: 14px;
    width: 23.28px;
    height: 22px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  column-gap: 15px;
`;
