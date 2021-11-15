import { FC } from 'react';
import { Wrapper } from './dropDown.styled';
import { IDropDownProps } from './dropDown.type';
import { Item } from './item/item';

export const DropDown: FC<IDropDownProps> = (props) => {
  const items = props.dictionary.map((item, index) => {
    return <Item title = {props.title} key={index} option={item.value} id={item.id} handleSelect = {props.handleSelect}/>;
  });
  return <Wrapper>{...items}</Wrapper>;
};
