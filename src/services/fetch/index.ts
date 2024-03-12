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

    if (!data.ok) {
      throw new Error('ocorreu um erro');
    }

    return data.json();
  } catch (error) {
    console.error(error);
  }
};
