import styled from 'styled-components';

export const Content = styled.div<{ type?: string }>`
  cursor: default;
  height: ${(props): string => (props.type === 'smallmodal' ? '300px' : '600px')};
  width: ${(props): string => (props.type === 'smallmodal' ? '450px' : '930px')};
  display: flex;
  background-color: #b09a81; ;
`;
export const TextContent = styled.div<{ color: string; pcolor: string; type?: string }>`
  width: 44%;
  overflow: hidden;
  padding: ${(props): string => (props.type === 'smallmodal' ? '17px 18px 9px' : '56px 27px 44px 33px')};
  background: linear-gradient(180deg, #24201f 38.54%, #000000 100%);
  h1 {
    color: ${(props): string => props.color};
    font-weight: 500;
    font-size: ${(props): string => (props.type === 'smallmodal' ? '25px' : '50px')};
    line-height: ${(props): string => (props.type === 'smallmodal' ? '25px' : '50px')};
    letter-spacing: 0.03em;
    margin-bottom: ${(props): string => (props.type === 'smallmodal' ? '11px' : '48px')};
  }
  article {
    display: block;
    margin-top: ${(props): string => (props.type === 'smallmodal' ? '14px' : '23px')};
    color: ${(props): string => props.pcolor};
    word-wrap: break-word;
    font-weight: normal;
    font-size: ${(props): string => (props.type === 'smallmodal' ? '8px' : '15px')};
    line-height: ${(props): string => (props.type === 'smallmodal' ? '12px' : '25px')};
  }
`;
export const ImageContent = styled.div<{ background: string; type?: string }>`
  position: relative;
  background: url(${(props): string => props.background}) center/cover no-repeat;
  width: 57%;
  button {
    border: none;
    position: absolute;
    top: 31px;
    right: 26px;
    background: none;
    outline: none;
    cursor: pointer;
  }
`;
export const TagsContainer = styled.div<{ type?: string }>`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  position: absolute;
  bottom: ${(props): string => (props.type === 'smallmodal' ? '11px' : '44px')};
  right: ${(props): string => (props.type === 'smallmodal' ? '20px' : '68px')};
`;
export const Tag = styled.span<{ type?: string }>`
  height: ${(props): string => (props.type === 'smallmodal' ? '14px' : '25px')};
  display: inline-block;
  width: fit-content;
  text-align: center;
  line-height: ${(props): string => (props.type === 'smallmodal' ? '14px' : '25px')};
  border-radius: 8px;
  padding: ${(props): string => (props.type === 'smallmodal' ? '0 10px' : '0 22px')};
  font-size:${(props): string => (props.type === 'smallmodal' ? '8px' : '14px')};
  color: #ffffff;

  :nth-child(1) {
    background: #26514e;
  }
  :nth-child(2) {
    background: #123856;
  }
  :nth-child(3) {
    background: #512c38;
  }
`;
