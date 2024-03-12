'use client';

import { StyledEngineProvider } from '@mui/material';

import { QueryClientProvider } from '@tanstack/react-query';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { queryClient } from '@/services/queryClient';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />

        {children}
      </QueryClientProvider>
    </StyledEngineProvider>
  );
};
