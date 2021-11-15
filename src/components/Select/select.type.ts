import { ISelectDictionaryItem } from '../../hooks/useDictionariesFetch';

export interface ISelectProps{
  dictionary: ISelectDictionaryItem[];
  title: string;
  countChecked: number;
  handleSelect: (title: string, id: string) => void;
}
