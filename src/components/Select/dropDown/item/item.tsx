import { FC, useState } from 'react';
import { ISelectFilters } from '../../../../core/pages/characters/characters';
import { Content } from './item.styled';
import { IItemProps } from './item.type';

export const Item: FC<IItemProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(props.option.checked);
  return (
    <Content
      onClick={(): void => {
        if (checked) {
          props.handler((prev) => {
            switch (props.filterName) {
              case 'Пол': {
                const genderArr = prev.gender.filter((el: string): boolean => el !== props.option.title.toLowerCase());
                prev.gender = [...genderArr];
                break;
              }
              case 'Раса': {
                const raceArr: string[] = prev.race.filter((el: string): boolean => el !== props.option.title.toLowerCase());
                prev.race = [...raceArr];
                break;
              }
              case 'Сторона': {
                const sideArr: string[] = prev.side.filter((el: string): boolean => el !== props.option.title.toLowerCase());
                prev.side = [...sideArr];
                break;
              }
            }
            return prev;
          });
        } else {
          props.handler((prev) => {
            switch (props.filterName) {
              case 'Пол': {
                prev.gender.push(props.option.title.toLowerCase());
                break;
              }
              case 'Раса': {
                prev.race.push(props.option.title.toLowerCase());
                break;
              }
              case 'Сторона': {
                prev.side.push(props.option.title.toLowerCase());
                break;
              }
            }
            console.log(prev);
            return prev;
          });
        }
        setChecked(!checked);
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-for*/}
      <label htmlFor={props.id.toString()} data-checked={checked}>
        <span>{props.option.title}</span>
      </label>
      {/* <input type="checkbox" id={props.id.toString()}></input> */}
    </Content>
  );
};
