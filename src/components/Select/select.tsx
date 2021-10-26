import { FC, useState } from 'react';
import { DropDown } from './dropDown/dropDown';
import { Wrapper, Content } from './select.styled';
import { ISelectProps } from './select.type';

export const Select: FC<ISelectProps> = (props) => {
  const [isDropped, setIsDropped] = useState(false);
  const [checkedCount, setCheckedCount] = useState(props.options.filter((el) => el.checked === true).length);

  return (
    <Wrapper>
      <Content onClick={(): void => setIsDropped(!isDropped)}>
        {props.title + (checkedCount ? `: ${checkedCount}` : '')}
      </Content>
      {isDropped && <DropDown options={props.options} filterName={props.title} handler={props.setSelectFilters} />}
    </Wrapper>
  );
};
