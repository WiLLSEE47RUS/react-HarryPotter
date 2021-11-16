import styled, { keyframes } from 'styled-components';
export interface ITitleContainerProps {
  img: string;
}
interface ITitleProps {
  color?: string;
  type?: string;
}

const appear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const Wrapper = styled.div<{ type?: string }>`
  width: ${(props): string => (props.type === 'small' ? '225px' : '410px')};
  height: ${(props): string => (props.type === 'small' ? '302px' : '552px')};
  animation: ${appear} 0.3s ease-in;
  cursor: pointer;
`;
export const TitleContainer = styled.div<ITitleContainerProps>`
  height: 72%;
  display: flex;
  align-items: flex-end;
  word-wrap: break-word;
  padding: 0 0 4% 13px;

  background: url('${(props): string => props.img}') center/cover no-repeat;
  background-color: #b09a81;
  border-radius: 4px 4px 0px 0px;
`;
export const Title = styled.h1<ITitleProps>`
  word-wrap: normal;
  width: 50%;
  font-size: ${(props): string => (props.type === 'small' ? '28px' : '36px')};
  font-weight: 500;
  color: ${(props): string => props.color || '#0ff'};
  letter-spacing: 0.03em;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  line-height: ${(props): string => (props.type === 'small' ? '30px' : '50px')};
`;
