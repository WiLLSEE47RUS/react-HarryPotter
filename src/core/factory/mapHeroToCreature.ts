import { IHero } from '../../hooks/useHeroFetch';
import { ISelectDictionaryItem } from '../../store/characters/charactersSlice';
import { IHeroModalContent } from '../components/heroModal/heroModalContent/heroModalContent.type';
import { ICreature } from '../domain/creatures/creatures.type';
import { IAddNewCharacterForm } from '../forms/addNewCharacterForm/addNewCharacterForm.type';

export const mapHeroToCreature = (hero: IAddNewCharacterForm): ICreature => ({
  id: '',
  name: hero.name,
  imageURL: hero.imageURL,
  gender: hero.gender,
  race: hero.race,
  side: hero.side,
  nameColor: hero.nameColor,
  backgroundColor: hero.backgroundColor,
  parametersColor: hero.parametersColor,
});

export const mapHeroToIHeroModal = (hero: IAddNewCharacterForm): IHeroModalContent => ({
  state: {
    name: hero.name,
    description: hero.description,
    imageURL: hero.imageURL,
    nameColor: hero.nameColor,
    backgroundColor: hero.backgroundColor,
    parametersColor: hero.parametersColor,
    tag1: hero.tags.split(',')[0],
    tag2: hero.tags.split(',')[1],
    tag3: hero.tags.split(',')[2],
    gender: {
      id: '',
      value: hero.gender,
    },
    race: {
      id: '',
      value: hero.race,
    },
    side: {
      id: '',
      value: hero.side,
    },
  },
});

export const mapHeroToIHeroType = (
  hero: IAddNewCharacterForm,
  genderDictionary: ISelectDictionaryItem[],
  raceDictionary: ISelectDictionaryItem[],
  sideDictionary: ISelectDictionaryItem[]
): IHero => {
  const getValueId = (dict:ISelectDictionaryItem[]): string =>{
    const id = dict.filter(el=> el.value === hero.gender || el.value === hero.race || el.value === hero.side)[0].id 
    return id? id: ''
  } 

  return {
    name: hero.name,
    description: hero.description,
    imageURL: hero.imageURL,
    nameColor: hero.nameColor,
    backgroundColor: hero.backgroundColor,
    parametersColor: hero.parametersColor,
    tag1: hero.tags.split(',')[0],
    tag2: hero.tags.split(',')[1],
    tag3: hero.tags.split(',')[2],
    gender: {
      id: getValueId(genderDictionary),
      value: hero.gender,
    },
    race: {
      id: getValueId(raceDictionary),
      value: hero.race,
    },
    side: {
      id: getValueId(sideDictionary),
      value: hero.side,
    },
  };
};
