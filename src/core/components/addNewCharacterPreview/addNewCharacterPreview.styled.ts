import styled from 'styled-components';

export const Heading = styled.div`
  margin-top: 96px;
  display: flex;
  column-gap: 9px;
`;
export const Span = styled.span<{ active: boolean }>`
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  color: ${(props): string => (props.active ? '#B09A81' : '#474748')};
`;
export const PreviewWrapper = styled.div`
  height: 322px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonContainer = styled.div`
  margin-top: 10px;
  width: 100px;
  align-items: center;
  height: 20px;
  display: flex;

`;
