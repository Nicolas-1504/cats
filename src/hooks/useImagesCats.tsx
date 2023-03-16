import { useState, useEffect } from 'react';
import { TImageCat } from '../services/cats/types';
import endpointCats from '../services/axiosConfig';

type TImageCatState = {
  imagesCats?: TImageCat;
  isLoading: boolean;
};

const useImagesCats = (idImage: string) => {
  const [state, setstate] = useState<TImageCatState>({
    imagesCats: undefined,
    isLoading: true,
  });
  const getImagesCats = async () => {
    const response = await endpointCats.get<TImageCat>(`/images/${idImage}`);
    setstate({ imagesCats: response.data, isLoading: false });
  };

  useEffect(() => {
    if (idImage !== '') {
      getImagesCats();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
  };
};

export default useImagesCats;
