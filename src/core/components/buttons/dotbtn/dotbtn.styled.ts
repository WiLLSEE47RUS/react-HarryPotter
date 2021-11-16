import styled from 'styled-components';

interface IDotProps {
  active: boolean;
  type?: string;
}

export const Dot = styled.div<IDotProps>`
  cursor: pointer;
  height: ${(props):string => props.type === 'small'? '6px': '10px'};
  width: ${(props):string => props.type === 'small'? '6px': '10px'};
  border-radius: 50%;
  margin:${(props):string => props.type === 'small'? '0 12px': '0 42px'};
  background: ${(props): string => (props.active ? '#B09A81' : '#fff')};
`;
