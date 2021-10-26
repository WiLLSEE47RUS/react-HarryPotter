import { SetStateAction } from 'react';

export interface IDotBtnProps {
  index: number;
  active: boolean;
  handler: React.Dispatch<SetStateAction<number>>;
}
