'use client';

import { useEffect } from 'react';

import { MenuItem } from '@mui/material';

import { Button, Dropdown, Paragraph } from '@/components';

import { useGetAllSequentialDataFipe } from '@/hook/useGetAllSequentialDataFipe';

export default function HomeForm() {
  const { brands, models, years, makeCall } = useGetAllSequentialDataFipe();

  useEffect(() => {
    if (!brands) {
      makeCall();
    }
  }, []);

  return (
    <main className="h-screen flex items-center justify-center bg-violet-50">
      <section className="flex flex-col gap-4 min-w-[250px] max-w-[500px] w-full">
        <div className="flex flex-col">
          <Paragraph className="text-3xl text-gray-800 text-center mb-2">Tabela Fipe</Paragraph>

          <Paragraph className="text-xl text-gray-800 text-center">Consulte o valor de um veículo de forma gratuita</Paragraph>
        </div>

        <form className="flex flex-col items-center gap-4 py-8 px-12 bg-white rounded-lg shadow-md">
          <Dropdown
            label="Marca"
            data={brands}
            renderMenuItem={(item) => (
              <MenuItem key={item.codigo} value={item.codigo}>
                {item.nome}
              </MenuItem>
            )}
            onChange={(e) => console.log(e)}
          />

          <Dropdown
            label="Modelo"
            data={models}
            renderMenuItem={(item) => (
              <MenuItem key={item.codigo} value={item.codigo}>
                {item.nome}
              </MenuItem>
            )}
            disabled
          />

          <Dropdown
            label="Ano"
            data={years}
            renderMenuItem={(item) => (
              <MenuItem key={item.codigo} value={item.codigo}>
                {item.nome}
              </MenuItem>
            )}
          />

          <Button className="w-44 h-10 mt-4 bg-violet-800 normal-case hover:bg-purple-700" variant="contained" disabled={true}>
            Consultar preço
          </Button>
        </form>
      </section>
    </main>
  );
}
