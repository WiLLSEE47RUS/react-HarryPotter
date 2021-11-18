import { useEffect, useState } from 'react';
import API from '../services/characters.service';
import { ISelectDictionaryItem, setGenderDictionary, setRaceDictionary, setSideDictionary } from '../store/characters/charactersSlice';
import { useAppDispatch } from '../store/store';

export interface IDictionaries {
  loading: boolean;
  error: boolean;
}

export const useDictionariesFetch = (): IDictionaries => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();
  const fetchDictionaries = async (): Promise<void> => {
    try {
      setError(false);
      setLoading(true);

      const genders: ISelectDictionaryItem[] = await API.getGenderDictionary();
      const race: ISelectDictionaryItem[] = await API.getRaceDictionary();
      const side: ISelectDictionaryItem[] = await API.getSideDictionary();

      dispatch(setGenderDictionary(genders));
      dispatch(setRaceDictionary(race));
      dispatch(setSideDictionary(side));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    void fetchDictionaries();
  }, []);
  return { loading, error };
};
