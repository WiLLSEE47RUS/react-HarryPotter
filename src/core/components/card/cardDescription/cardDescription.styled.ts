import styled from 'styled-components';

interface IDescProps {
  background?: string;
  type?: string;
}
interface IParamProps {
  color?: string;
  type?: string;
}

export const Description = styled.div<IDescProps>`
  padding: ${(props): string => (props.type === 'smallmodal' ? '3px 5px' : '3% 4%')};
  background: ${(props): string => props.background || '#191919'};
  border-radius: 0px 0px 6px 6px;
`;
export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ParamItem = styled.div<IParamProps>`
  display: flex;
  justify-content: space-between;
  height: ${(props): string => (props.type === 'smallmodal' || props.type === 'small' ? '19px' : '40px')};
  align-items: center;
  :nth-child(2) {
    border-top: 1px solid ${(props): string => props.color || '#fff'};
    border-bottom: 1px solid ${(props): string => props.color || '#fff'};
  }
  p {
    font-size: ${(props): string => (props.type === 'small' ? '10px' : props.type === 'smallmodal' ?'8px':'18px')};
    font-weight: 400;
    color: ${(props): string => props.color || '#fff'};
  }
`;
