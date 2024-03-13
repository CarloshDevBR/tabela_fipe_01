'use client';

import { useGetParams } from '@/hook/useGetParams';

import { FETCH } from '@/services/fetch';

import { DetailsFipe } from '@/types';

import { useMutation } from '@tanstack/react-query';

export default function Details() {
  const { brand, model, year } = useGetParams();

  const { data } = useMutation<DetailsFipe>({
    mutationKey: [brand, model, year],
    mutationFn: () =>
      FETCH({
        url: `/marcas/${brand}/modelos/${model}/anos/${year}`,
        method: 'GET',
      }),
  });

  return <div>dasd</div>;
}
