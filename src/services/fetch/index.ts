import { toast } from 'react-toastify';

import { BASE_URL } from '@/constants';

type FetchProps = {
  url: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
};

export const FETCH = async ({ url, method }: FetchProps) => {
  try {
    const data = await fetch(`${BASE_URL}${url}`, {
      method,
    });

    const dataJSON = await data.json();

    if (!data.ok) {
      toast.error(dataJSON.error);

      throw new Error('ocorreu um erro');
    }

    return dataJSON;
  } catch (error) {
    console.error(error);
  }
};
