import { FETCH } from '@/services/fetch';

import { useMutation } from '@tanstack/react-query';

type Fipe = {
  codigo: string;
  nome: string;
};

export const useGetAllSequentialDataFipe = () => {
  const brands = useMutation({
    mutationKey: ['brands'],
    mutationFn: () =>
      FETCH({
        url: 'marcas',
        method: 'GET',
      }),
  });

  const models = useMutation({
    mutationKey: ['models'],
    mutationFn: (id: string) =>
      FETCH({
        url: `marcas/${id}/modelos`,
        method: 'GET',
      }),
  });

  const years = useMutation({
    mutationKey: ['years'],
    mutationFn: (id: string) =>
      FETCH({
        url: `marcas/${id}/modelos/${id}/anos`,
        method: 'GET',
      }),
  });

  const makeCall = async (id?: string) => {
    if (!brands.data) return brands.mutate();
    if (!models.data) return models.mutate(id || '');
    if (!years.data) return years.mutate(id || '');
  };

  return {
    brands: brands.data as Fipe[],
    models: models.data as Fipe[],
    years: years.data as Fipe[],
    isPending: brands.isPending || models.isPending || years.isPending,
    makeCall,
  };
};
