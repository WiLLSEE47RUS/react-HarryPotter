import { FC } from 'react';
import { Wrapper } from './dropDown.styled';
import { IDropDownProps } from './dropDown.type';
import { Item } from './item/item';

export const DropDown: FC<IDropDownProps> = (props) => {
  const items = props.options.map((item, index) => {
    return <Item filterName={props.filterName} key={index} option={item} id={index} handler={props.handler} />;
  });
  return <Wrapper>{...items}</Wrapper>;
};
