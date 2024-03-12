import { Autocomplete as At, TextField } from '@mui/material';

type AtProps<T> = {
  data: T[];
  label: string;
};

export const Autocomplete = <T,>({ data, label }: AtProps<T>) => {
  return (
    <At disablePortal id="combo-box-demo" options={data} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label={label} />} />
  );
};
