export interface IAddNewCharacterForm {
  name: string;
  description: string;
  imageURL: string;
  nameColor: string;
  backgroundColor: string;
  parametersColor: string;
  tags: string;
  gender: string;
  race: string;
  side: string;
}

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
