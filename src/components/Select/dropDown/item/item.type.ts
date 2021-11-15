export interface IItemProps {
  option: string;
  id: string;
  title: string;
  handleSelect: (title: string, id: string) => void;
}
