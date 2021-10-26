import styled from 'styled-components';
export interface ITitleContainerProps {
  img: string;
}
interface ITitleProps {
  color?: string;
}
interface IDescProps {
  background?: string;
}
interface IParamProps {
  color?: string;
}
export const Wrapper = styled.div`
  width: 410px;
  height: 552px;
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
  color: ${(props): string => props.color || '#0ff'}};
  letter-spacing: 0.03em;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  line-height: 50px;
`;

export const Description = styled.div<IDescProps>`
  padding: 17px 15px 18px 13px;
  background: ${(props): string => props.background || '#191919'};
`;
export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ParamItem = styled.div<IParamProps>`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  :nth-child(2) {
    border-top: 1px solid ${(props): string => props.color || '#fff'};
    border-bottom: 1px solid ${(props): string => props.color || '#fff'};
  }
  p {
    font-size: 18px;
    font-weight: 400;
    color: ${(props): string => props.color || '#fff'};
  }
`;
