import styled from 'styled-components';
import leftArrow from '../../../../assets/paginationbtns/arrow_left_slider.png';
import rightArrow from '../../../../assets/paginationbtns/arrow_right_slider.png';

interface IArrowProps {
  direction: string;
}
export const Arrow = styled.div<IArrowProps>`
  cursor: pointer;
  height: 60px;
  width: 60px;
  background: url('${(props): string => (props.direction === 'forward' ? rightArrow : leftArrow)}');
`;
