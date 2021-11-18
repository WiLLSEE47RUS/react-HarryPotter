import { useEffect, useState } from 'react';
import { IHeroFilter } from '../core/components/heroModal/heroModal.type';
import API from '../services/characters.service';

export interface IHero {
  id?: string;
  name: string;
  description: string;
  imageURL: string;
  nameColor: string;
  backgroundColor: string;
  parametersColor: string;
  tag1: string;
  tag2: string;
  tag3: string;
  gender: IHeroFilter;
  race: IHeroFilter;
  side: IHeroFilter;
}

interface ICharacterFetch {
  state: IHero;
  loading: boolean;
  error: boolean;
}

const initialState:IHero = {
  id: '',
  name: '',
  description: '',
  imageURL: '',
  nameColor: '',
  backgroundColor: '',
  parametersColor: '',
  tag1: '',
  tag2: '',
  tag3: '',
  gender: { id: '', value: '' },
  race: { id: '', value: '' },
  side: { id: '', value: '' },
};

export const useHeroFetch = (id: string): ICharacterFetch => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [state, setState] = useState(initialState);
  const fetchHero = async (): Promise<void> => {
    try {
      setError(false);
      setLoading(true);

      const character: IHero = await API.getCharacterInfo(id);

      setState(character);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    void fetchHero();
  }, []);
  return { loading, error, state };
};
