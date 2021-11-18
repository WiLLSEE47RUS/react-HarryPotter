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
  position: relative;
  cursor: default;
  min-height: 720px;
  width: 1030px;
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  grid-column-gap: 30px;
  background: linear-gradient(180deg, #2a2c35 52.6%, #000000 100%);
  mix-blend-mode: normal;
  border-radius: 6px;
  padding: 38px 32px;
  .closebtn {
    border: none;
    position: absolute;
    top: 24px;
    right: 33px;
    background: none;
    outline: none;
    cursor: pointer;
  }
`;
export const Separator = styled.div`
  background: #494949;
`;
export const Form = styled.form`
  label {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    color: #b09a81;
  }
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #494949;
  }
  input {
    width: 100%;
    background: #b09a81;
    padding: 0 7px;
    box-shadow: 0px 1px 2px rgba(50, 50, 71, 0.08);
    border-radius: 4px;
    outline: none;
    border: none;
    height: 30px;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #462929;
  }
  .error{
    color: lightcoral;
    font-size: 12px;
    font-weight: 500;

  }
`;
export const PreviewContainer = styled.div`
  h4 {
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    color: #b09a81;
  }
`;
export const SaveButton = styled.button`
  position: absolute;
  cursor: pointer;
  right: 33px;
  bottom: 38px;
  width: 140px;
  height: 55px;
  color: #b09a81;
  padding: 16px 23px;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #1f4f3b;
  transition: all 0.5s ease;
  :hover {
    background: #2d653a;
  }
  :active {
    background: #296036;
  }
`;

export const AddName = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  width: 100%;
`;

export const AddParameters = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const AddGender = styled.div`
  width: 150px;
  
`;
export const AddRace = styled.div`
  width: 120px;
`;
export const AddSide = styled.div`
  width: 120px;
`;
export const AddDescription = styled.div`
  margin-top: 15px;
  label {
    display: flex;
    justify-content: space-between;
  }

  textarea {
    padding: 7px;
    width: 100%;
    height: 145px;
    background: #b09a81;
    box-shadow: 0px 1px 2px rgba(50, 50, 71, 0.08);
    border-radius: 4px;
    outline: none;
    border: none;
    font-size: 14px;
    line-height: 18px;
    color: #462929;
    resize: none;
  }
`;

export const AddTags = styled.div`
  margin-top: 17px;
  width: 100%;
  label {
    display: flex;
    justify-content: space-between;
  }
`;

export const AddRestParams = styled.div`
  height: 270px;
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const AddImage = styled.div`
  height: 100%;
  width: 190px;
`;
export const AddImageByUrl = styled.div<{ imageUrl?: string }>`
  margin-top: 3px;
  height: 210px;
  position: relative;
  padding: 8px 10px;
  background: url(${(props): string | undefined => props.imageUrl}) center/cover no-repeat;
  background-color: #b09a81;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  input {
    width: 169px;
    position: absolute;
    bottom: 9px;
    left: 10px;
    background-color: #b09a81;
    border: 1px solid #462929;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    text-align: center;
    padding: 8px;
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 10px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

export const SaveUrlButton = styled(SaveButton)`
  position: static;
  padding: 6px;
  width: 86px;
  height: 30px;
  font-size: 14px;
  line-height: 18px;
`;

export const ChangeUrlButton = styled(SaveUrlButton)`
  padding: 6px 9px;
  color: #462929;
  background: #b09a81;
  :hover {
    background: #daaf7c;
  }
  :active {
    background: #b08f67;
  }
`;
export const ColorPalette = styled.div`
  width: 225px;
  span {
    font-size: 14px;
    line-height: 15px;
    color: #b09a81;
  }
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

export const ColorPicker = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    padding: 0;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
  }
  input[type='color']::-webkit-color-swatch {
    border: none;
    border-radius: 6px;

  }
`;
