import { ChangeEventHandler } from 'react';

export interface IInput {
  placeholder: string;
  value: string;
  handler: ChangeEventHandler;
}
