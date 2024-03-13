'use client';

import { useEffect } from 'react';

import { MenuItem, SelectChangeEvent, TextField } from '@mui/material';

import { Autocomplete, ButtonLink, Dropdown, Paragraph, RenderIf } from '@/components';

import { useGetAllSequentialDataFipe } from '@/hook/useGetAllSequentialDataFipe';

import { ACTIONS, useFormFipe } from '@/hook/useFormFipe';

import { Fipe } from '@/types';

export default function HomeForm() {
  const { state, completed, dispatch } = useFormFipe();

  const {
    dataBrands,
    isLoadingBrands,
    dataModels,
    isLoadingModels,
    dataYears,
    isLoadingYears,
    getBrands,
    getModels,
    getYears,
  } = useGetAllSequentialDataFipe();

  const handleSelectBrand = (_: React.SyntheticEvent<Element, Event>, value: Fipe | null) => {
    dispatch({ type: ACTIONS.SET_BRAND, payload: value?.codigo || '' });

    if (state.model || state.year) {
      dispatch({ type: ACTIONS.SET_MODEL, payload: '' });

      dispatch({ type: ACTIONS.SET_YEAR, payload: '' });
    }

    if (value) return getModels(value.codigo);
  };

  const handleSelectModels = (_: React.SyntheticEvent<Element, Event>, value: Fipe | null) => {
    dispatch({ type: ACTIONS.SET_MODEL, payload: value?.codigo || '' });

    if (state.year) {
      dispatch({ type: ACTIONS.SET_YEAR, payload: '' });
    }

    if (value) return getYears(state.brand, value.codigo);
  };

  const handleSelectYears = (value: SelectChangeEvent<unknown>) => {
    dispatch({ type: ACTIONS.SET_YEAR, payload: value.target.value as string });
  };

  const handleNavigationDetails = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!completed) return e.preventDefault();
  };

  useEffect(() => {
    if (!dataBrands) {
      getBrands();
    }
  }, []);

  return (
    <main className="h-full flex items-center justify-center bg-violet-50">
      <section className="flex flex-col gap-4 min-w-[250px] max-w-[500px] w-full">
        <div className="flex flex-col">
          <Paragraph className="text-3xl text-gray-800 text-center mb-2">Tabela Fipe</Paragraph>

          <Paragraph className="text-xl text-gray-800 text-center">
            Consulte o valor de um veículo de forma gratuita
          </Paragraph>
        </div>

        <form className="flex flex-col items-center gap-4 py-8 px-12 bg-white rounded-lg shadow-md">
          <Autocomplete
            options={dataBrands || []}
            getOptionLabel={(item) => item.nome}
            onChange={handleSelectBrand}
            renderInput={(params) => <TextField {...params} label="Marca" />}
            loading={isLoadingBrands}
            disabled={isLoadingBrands}
          />

          <Autocomplete
            options={dataModels || []}
            getOptionLabel={(item) => item.nome}
            onChange={handleSelectModels}
            renderInput={(params) => <TextField {...params} label="Modelo" />}
            loading={isLoadingModels}
            disabled={!state.brand}
          />

          <RenderIf conditional={Boolean(state.brand && state.model)}>
            <Dropdown
              label="Ano"
              data={dataYears || []}
              renderMenuItem={(item) => (
                <MenuItem key={item.codigo} value={item.codigo}>
                  {item.nome}
                </MenuItem>
              )}
              onChange={handleSelectYears}
              disabled={!state.model}
              variant="outlined"
              isLoading={isLoadingYears}
            />
          </RenderIf>

          <ButtonLink
            href={`/detalhes/?brand=${state.brand}&model=${state.model}&year=${state.year}`}
            onClick={handleNavigationDetails}
            disabled={!completed}
          >
            Consultar preço
          </ButtonLink>
        </form>
      </section>
    </main>
  );
}
