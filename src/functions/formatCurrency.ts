export const formatCurrency = (value: number): string => {
  const formatted: string = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formatted;
};
