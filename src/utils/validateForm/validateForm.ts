import { IAddNewCharacterForm } from '../../core/forms/addNewCharacterForm/addNewCharacterForm.type';

export interface IFormErrors {
  name: string;
  gender: string;
  race: string;
  side: string;
  description: string;
  tags: string;
  imageURL: string;
  colorName: string;
  backgroundColor: string;
  parametersColor: string;
}

export function validate(values: IAddNewCharacterForm): Partial<IFormErrors> {
  const errors: Partial<IFormErrors> = {};
  if (!values.name) {
    errors.name = 'Введите имя';
  }

  if (!values.gender) {
    errors.gender = 'Введите пол';
  }

  if (!values.race) {
    errors.race = 'Введите расу';
  }

  if (!values.side) {
    errors.side = 'Введите сторону';
  }

  if (!values.description) {
    errors.description = 'Введите описание';
  } else if (values.description.length > 100) {
    errors.description = 'Максимальная длина - 100 символов';
  }
  const maxTagsCount = 3;
  if (!values.tags) {
    errors.tags = 'Введите теги';
  } else if (values.tags.split(', ').length > maxTagsCount) {
    errors.tags = 'Максимум 3 тега';
  }

  if (!values.imageURL) {
    errors.imageURL = 'Загрузите аватар';
  }

  return errors;
}
