import { Autocomplete as At, AutocompleteProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AtProps = AutocompleteProps<any, boolean, boolean, boolean> & {
  autocompleteClass?: string;
};

export const Autocomplete = ({ autocompleteClass, ...rest }: AtProps) => {
  return <At {...rest} className={`w-full ${autocompleteClass}`} id="combo-box-demo" noOptionsText="Nenhuma opção" />;
};
