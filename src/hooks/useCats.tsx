import { useState, useEffect } from 'react';
import { TCat } from '../services/cats/types';
import endpointCats from '../services/axiosConfig';

type TCatState = {
  isLoading: boolean;
  cats: TCat[];
};

const useCats = () => {
  const [state, setState] = useState<TCatState>({
    isLoading: true,
    cats: [],
  });

  const getCats = async () => {
    const response = await endpointCats.get<TCat[]>('/breeds');
    setState({ cats: response.data, isLoading: false });
  };

  useEffect(() => {
    getCats();
  }, []);

  return {
    ...state,
  };
};

export default useCats;
