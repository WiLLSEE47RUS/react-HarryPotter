import { ISelectDictionaryItem } from '../../../hooks/useDictionariesFetch';

export interface IDropDownProps {
  title: string;
  dictionary: ISelectDictionaryItem[];
  handleSelect: (title: string, id: string) => void;
}
