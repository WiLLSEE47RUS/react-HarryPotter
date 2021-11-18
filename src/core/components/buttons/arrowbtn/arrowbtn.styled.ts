import styled from 'styled-components';
import leftArrow from '../../../../assets/paginationbtns/arrow_left_slider.png';
import rightArrow from '../../../../assets/paginationbtns/arrow_right_slider.png';
import smallLeftArrow from '../../../../assets/paginationbtns/arrow_left_slider_small.png';
import smallRightArrow from '../../../../assets/paginationbtns/arrow_right_slider_small.png';
interface IArrowProps {
  direction: string;
  type?: string;
}

export const Arrow = styled.div<IArrowProps>`
  cursor: pointer;
  height: ${(props): string => (props.type === 'small' ? '20px' : '60px')};
  width: ${(props): string => (props.type === 'small' ? '20px' : '60px')};
  background: url('${(props): string => (props.direction === 'forward' ? (props.type === 'small'? smallRightArrow: rightArrow ): (props.type === 'small'? smallLeftArrow: leftArrow))}');
`;
