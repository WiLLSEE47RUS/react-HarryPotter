import styled from 'styled-components';
import checked from '../../../../assets/checked.png';
import def from '../../../../assets/default.png';
import hover from '../../../../assets/hover.png';

export const Content = styled.div`
  &:nth-child(1) {
    margin-top: 0;
  }
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15px;
  margin: 19px 0;
  label {
    span {
      margin-left: 12px;
      color: #462929;
      font-size: 14px;
      font-weight: 400;
    }
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    user-select: none;
    height: 15px;
    &:before {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      flex-shrink: 0;
      flex-grow: 0;
      background-image: url(${def});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;
    }
    &[data-checked='true']::before {
      content: '';
      background-image: url(${checked});
    }
    &:not([data-checked='true']):hover::before{
        background-image: url(${hover});
    }
  }
`;