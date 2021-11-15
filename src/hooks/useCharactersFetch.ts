import { useEffect, useState } from 'react';
import API from '../services/characters.service';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setRegistryState } from '../store/characters/charactersSlice';
import { ICharacterFetch } from '../services/charactersFetch.type';

interface IFetchCharacters {
  loading: boolean;
  error: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const useCharactersFetch = (): IFetchCharacters => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const state = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  const fetchCharacters = async (): Promise<void> => {
    try {
      setError(false);
      setLoading(true);

      const characters: ICharacterFetch = await API.getCharactersList(
        state.filtersData.search.split(' '),
        state.filtersData.gender,
        state.filtersData.race,
        state.filtersData.side,
        currentPage
      );
      console.log(characters);
      dispatch(setRegistryState(characters.content));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    void fetchCharacters();
  }, [currentPage, state.filtersData]);
  return { loading, error, currentPage, setCurrentPage };
};
