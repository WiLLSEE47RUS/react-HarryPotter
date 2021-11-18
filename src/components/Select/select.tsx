import { FC, useState } from 'react';
import { DropDown } from './dropDown/dropDown';
import { Wrapper, Content } from './select.styled';
import { ISelectProps } from './select.type';

export const Select: FC<ISelectProps> = (props) => {
  const [isDropped, setIsDropped] = useState(false);
  const count: string = props.countChecked ? `: ${props.countChecked}` : '';
  
  return (
    <Wrapper>
      <Content onClick={(): void => setIsDropped(!isDropped)}>{props.title + count}</Content>
      {isDropped && <DropDown dictionary={props.dictionary} handleSelect = {props.handleSelect} title = {props.title} />}
    </Wrapper>
  );
};
