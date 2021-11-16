import { ISelectDictionaryItem } from '../../../store/characters/charactersSlice';

export interface IDropDownProps {
  title: string;
  dictionary: ISelectDictionaryItem[];
  handleSelect: (title: string, id: string) => void;
}
