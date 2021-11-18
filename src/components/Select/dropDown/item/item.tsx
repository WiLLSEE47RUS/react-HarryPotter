import { FC } from 'react';
import { DictionaryTitles } from '../../../../core/forms/charatersFilterForm/charactersFilterForm.type';
import { useAppSelector } from '../../../../store/store';
import { Content } from './item.styled';
import { IItemProps } from './item.type';

export const Item: FC<IItemProps> = (props) => {
  const filters = useAppSelector((state) => state.characters.filtersData);

  const checkSelected = (title: string, id: string): boolean => {
    switch (title) {
      case DictionaryTitles.GENDER: {
        return filters.gender.includes(id);
      }
      case DictionaryTitles.RACE: {
        return filters.race.includes(id);
      }
      case DictionaryTitles.SIDE: {
        return filters.side.includes(id);
      }
      default: {
        return false;
      }
    }
  };

  return (
    <Content
      onClick={(): void => {
        props.handleSelect(props.title, props.id);
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-for*/}
      <label htmlFor={props.id} data-checked={checkSelected(props.title, props.id)}>
        <span>{props.option}</span>
      </label>
    </Content>
  );
};
