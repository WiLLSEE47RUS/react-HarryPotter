import styled from 'styled-components';
import plus from '../../../../assets/plus.png'
export const AddBtn = styled.button`
  cursor: pointer;
  justify-self: flex-end;
  outline: none;
  border: none;
  margin-left: auto;
  height: 36px;
  width: 137px;
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
    background: url(${plus});
    height: 13px;
    width: 13px;
    top: calc(50% - 6px);
    right: 10px;
  }
`;
