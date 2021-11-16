
import { IHero } from '../hooks/useHeroFetch';
import { ISelectDictionaryItem } from '../store/characters/charactersSlice';
import { ICharacterFetch } from './charactersFetch.type';

class API {
  location: string = 'http://localhost:5000/api/HARRY_POTTER/';

  //GET /list
  async getCharactersList(
    values: string[],
    gender: string[],
    race: string[],
    side: string[],
    page: number = 0,
    size: number = 3
  ): Promise<ICharacterFetch> {
    const valuesTerm: string = values.length ? values.map((el) => `values=${el}&`).join('') : '';
    const genderTerm: string = gender.length ? gender.map((el) => `gender=${el}&`).join('') : '';
    const raceTerm: string = race.length ? race.map((el) => `race=${el}&`).join('') : '';
    const sideTerm: string = side.length ? side.map((el) => `side=${el}&`).join('') : '';
    const endpoint =
      this.location +
      `character?${valuesTerm}${genderTerm}${raceTerm}${sideTerm}sort=createdDate,ASC&page=${page}&size=${size}`;
    return (await (await fetch(endpoint)).json()) as ICharacterFetch;
  }
  async getGenderDictionary(): Promise<ISelectDictionaryItem[]> {
    const endpoint = this.location + 'gender';
    return (await (await fetch(endpoint)).json()) as ISelectDictionaryItem[];
  }
  async getRaceDictionary(): Promise<ISelectDictionaryItem[]> {
    const endpoint = this.location + 'race';
    return (await (await fetch(endpoint)).json()) as ISelectDictionaryItem[];
  }
  async getSideDictionary(): Promise<ISelectDictionaryItem[]> {
    const endpoint = this.location + 'side';
    return (await (await fetch(endpoint)).json()) as ISelectDictionaryItem[];
  }

  async getCharacterInfo(id: string): Promise<IHero> {
    const endpoint = this.location + 'character/' + id;
    return (await (await fetch(endpoint)).json()) as IHero;
  }
  async postCharacter(data: Omit<IHero, 'id'>): Promise<string> {
    const endpoint = this.location + 'character';
    const response = await fetch(endpoint, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return (await response.json()) as string; // parses JSON response into native JavaScript objects
  }
}
export default new API();
