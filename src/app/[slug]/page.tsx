'use client';

import { Loading, Paragraph } from '@/components';

import { useGetParams } from '@/hook/useGetParams';

import { FETCH } from '@/services/fetch';

import { DetailsFipe } from '@/types';

import { useQuery } from '@tanstack/react-query';

export default function Details() {
  const { brand, model, year } = useGetParams();

  const { data, isPending } = useQuery<DetailsFipe>({
    queryKey: [brand, model, year],
    queryFn: () =>
      FETCH({
        url: `marcas/${brand}/modelos/${model}/anos/${year}`,
        method: 'GET',
      }),
  });

  if (isPending)
    return (
      <div className="h-full flex items-center justify-center bg-teal-100">
        <Loading color="success" size={50} />
      </div>
    );

  return (
    <div className="h-full flex items-center justify-center bg-teal-100">
      <section className="max-w-[600px] flex flex-col items-center gap-4">
        <Paragraph className="text-xl text-center text-gray-700">
          Tabela Fipe: Preço {data?.Marca} {data?.Modelo} {data?.AnoModelo}
        </Paragraph>

        <div className="px-3 py-[6px] bg-emerald-600 rounded-3xl">
          <Paragraph className="text-white">{data?.Valor}</Paragraph>
        </div>

        <Paragraph className="text-xs text-gray-500">Este é o preço de compra do veículo</Paragraph>
      </section>
    </div>
  );
}
