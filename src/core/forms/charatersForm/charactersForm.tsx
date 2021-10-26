import { FC } from 'react';
import { InputComponent } from '../../../components/input/input.styled';
import { Select } from '../../../components/Select/select';
import { ISelect } from '../../../components/Select/select.type';
import { Form, SelectContainer } from './charactersForm.styled';
import { ICharactersFormProps } from './charactersForm.type';

const sexSelectorProps: ISelect = {
  title: 'Пол',
  options: [
    { title: 'Мужчина', checked: false },
    { title: 'Женщина', checked: false },
    { title: 'Неопределен', checked: false },
  ],
};
const raceSelectorProps: ISelect = {
  title: 'Раса',
  options: [
    { title: 'Человек', checked: false },
    { title: 'Получеловек', checked: false },
  ],
};
const sideSelectorProps: ISelect = {
  title: 'Сторона',
  options: [
    { title: 'Добро', checked: false },
    { title: 'Зло', checked: false },
    { title: 'Хаос', checked: false },
    { title: 'Порядок', checked: false },
  ],
};
const data: ISelect[] = [sexSelectorProps, raceSelectorProps, sideSelectorProps];

export const CharactersForm: FC<ICharactersFormProps> = (props) => {
  const selects = data.map((el, index) => (
    <Select title={el.title} options={el.options} key={index} setSelectFilters={props.setSelectFilters} />
  ));
  return (
    <Form>
      <InputComponent
        placeholder="Поиск"
        value={props.searchTerm}
        onChange={(e): void => {
          props.setSearchTerm(e.target.value);
        }}
      />
      <SelectContainer>{...selects}</SelectContainer>
    </Form>
  );
};
