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
    mutationFn: ({ idBrand, idModel }: { idBrand: string; idModel: string }) =>
      FETCH({
        url: `marcas/${idBrand}/modelos/${idModel}/anos`,
        method: 'GET',
      }),
  });

  const getBrands = () => {
    brands.mutate();
  };

  const getMOdels = (idBrand: string) => {
    models.mutate(idBrand);
  };

  const getYears = (idBrand: string, idModel: string) => {
    years.mutate({ idBrand, idModel });
  };

  return {
    brands: brands.data as Fipe[],
    models: models.data as Fipe[],
    years: years.data as Fipe[],
    getBrands,
    getMOdels,
    getYears,
    isPending: brands.isPending || models.isPending || years.isPending,
  };
};
