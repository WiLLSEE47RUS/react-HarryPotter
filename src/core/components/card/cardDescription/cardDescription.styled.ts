import styled from 'styled-components';

interface IDescProps {
  background?: string;
}
interface IParamProps {
  color?: string;
}

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
