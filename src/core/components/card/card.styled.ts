import styled, { keyframes } from 'styled-components';
export interface ITitleContainerProps {
  img: string;
}
interface ITitleProps {
  color?: string;
}

const appear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 410px;
  height: 552px;
  animation: ${appear} 0.3s ease-in;
`;
export const TitleContainer = styled.div<ITitleContainerProps>`
  height: 395px;
  display: flex;
  align-items: flex-end;
  word-wrap: break-word;
  padding: 0 0 21px 13px;
  background: url('${(props): string => props.img}');
`;
export const Title = styled.h1<ITitleProps>`
  word-wrap: normal;
  width: 50%;
  font-size: 36px;
  font-weight: 500;
  color: ${(props): string => props.color || '#0ff'};
  letter-spacing: 0.03em;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  line-height: 50px;
`;
