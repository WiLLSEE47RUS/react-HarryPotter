import { ISelectDictionaryItem } from '../../store/characters/charactersSlice';

export interface ISelectProps {
  dictionary: ISelectDictionaryItem[];
  title: string;
  countChecked: number;
  handleSelect: (title: string, id: string) => void;
}
