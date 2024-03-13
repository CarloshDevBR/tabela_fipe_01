import { useSearchParams } from 'next/navigation';

export const useGetParams = () => {
  const params = useSearchParams();

  const brand = params.get('brand') ?? '';
  const model = params.get('model') ?? '';
  const year = params.get('year') ?? '';

  return {
    brand,
    model,
    year,
  };
};
