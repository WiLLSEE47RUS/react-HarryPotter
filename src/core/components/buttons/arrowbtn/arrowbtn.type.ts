import { SetStateAction } from 'react';

export interface IArrowBtnProps {
  direction: string;
  totalPages: number;
  handler: React.Dispatch<SetStateAction<number>>;
  type?:string;
}
