import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 100px;
  left: 0;
  height: calc(100vh - 100px);
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Content = styled.div`
  cursor: default;
  height: 600px;
  width: 930px;
  display: flex;
`;
export const TextContent = styled.div<{ color: string; pcolor: string }>`
  width: 414px;
  overflow: hidden;
  padding: 56px 27px 44px 33px;
  background: linear-gradient(180deg, #24201f 38.54%, #000000 100%);
  border-radius: 8px;
  h1 {
    color: ${(props): string => props.color};
    font-weight: 500;
    font-size: 50px;
    line-height: 50px;
    letter-spacing: 0.03em;
    margin-bottom: 48px;
  }
  article {
    margin-top: 23px;
    color: ${(props): string => props.pcolor};
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
  }
`;
export const ImageContent = styled.div<{ background: string }>`
  position: relative;
  background: url(${(props): string => props.background}) center/cover no-repeat;
  width: 516px;
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
export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  position: absolute;
  bottom: 44px;
  right: 26px;
`;
export const Tag = styled.span`
  height: 25px;
  display: inline-block;
  width: fit-content;
  text-align: center;
  line-height: 25px;
  border-radius: 8px;
  padding: 0 22px;
  font-size: 14px;
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
