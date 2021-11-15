import { useEffect, useState } from 'react';
import API from '../services/characters.service';

export interface ISelectDictionaryItem{
    id: string;
    value: string;
}

export interface IDictionaries {
    loading: boolean;
    error: boolean;
    genderDictionary: ISelectDictionaryItem[];
    sideDictionary: ISelectDictionaryItem[];
    raceDictionary: ISelectDictionaryItem[];
}

export const useDictionariesFetch = (): IDictionaries => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [genderDictionary, setGenderDictionary] = useState<ISelectDictionaryItem[]>([])
  const [raceDictionary, setRaceDictionary] = useState<ISelectDictionaryItem[]>([])
  const [sideDictionary, setSideDictionary] = useState<ISelectDictionaryItem[]>([])
  const fetchDictionaries = async (): Promise<void> => {
    try {
      setError(false);
      setLoading(true);

      const genders: ISelectDictionaryItem[] = await API.getGenderDictionary();
      const race: ISelectDictionaryItem[] = await API.getRaceDictionary();
      const side: ISelectDictionaryItem[] = await API.getSideDictionary();
      
      setGenderDictionary(genders);
      setRaceDictionary(race);
      setSideDictionary(side);

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    void fetchDictionaries();
  }, []);
  return { loading, error, genderDictionary, raceDictionary, sideDictionary };
};
