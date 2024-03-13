import { FETCH } from '@/services/fetch';

import { Fipe, Models } from '@/types';

import { useMutation } from '@tanstack/react-query';

export const useGetAllSequentialDataFipe = () => {
  const brands = useMutation({
    mutationKey: ['brands'],
    mutationFn: () =>
      FETCH({
        url: 'marcas',
        method: 'GET',
      }),
  });

  const dataBrands: Fipe[] = brands.data;

  const models = useMutation({
    mutationKey: ['models'],
    mutationFn: (id: string) =>
      FETCH({
        url: `marcas/${id}/modelos`,
        method: 'GET',
      }),
  });

  const dataModels: Models = models.data;

  const years = useMutation({
    mutationKey: ['years'],
    mutationFn: ({ idBrand, idModel }: { idBrand: string; idModel: string }) =>
      FETCH({
        url: `marcas/${idBrand}/modelos/${idModel}/anos`,
        method: 'GET',
      }),
  });

  const dataYears: Fipe[] = years.data;

  const getBrands = () => {
    brands.mutate();
  };

  const getModels = (idBrand: string) => {
    models.mutate(idBrand);
  };

  const getYears = (idBrand: string, idModel: string) => {
    years.mutate({ idBrand, idModel });
  };

  return {
    dataBrands,
    isLoadingBrands: brands.isPending,
    dataModels: dataModels?.modelos,
    isLoadingModels: models.isPending,
    dataYears,
    isLoadingYears: years.isPending,
    getBrands,
    getModels,
    getYears,
    isPending: brands.isPending || models.isPending || years.isPending,
  };
};
