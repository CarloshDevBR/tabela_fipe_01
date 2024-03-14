'use client';

import { useEffect } from 'react';

import { Button } from '@/components';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full bg-violet-50 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6 p-10 bg-white rounded-lg shadow border">
        <h2 className="text-red-500">Ocorreu um erro desconhecido nessa página!</h2>

        <Button className="text-[0.75rem] normal-case" variant="outlined" onClick={() => reset()}>
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}
