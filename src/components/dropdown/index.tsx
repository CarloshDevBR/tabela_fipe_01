import { FormControl, InputLabel, Select, SelectProps } from '@mui/material';

import { Paragraph } from '../';

type DropdownProps<T> = SelectProps & {
  data: T[];
  renderMenuItem: (item: T) => React.ReactNode;
  isLoading?: boolean;
};

export const Dropdown = <T,>({ data, renderMenuItem, isLoading, label, ...rest }: DropdownProps<T>) => {
  const content = () => {
    if (isLoading)
      return (
        <div className="py-2 px-4">
          <Paragraph>Carregando dados...</Paragraph>
        </div>
      );

    if (Array.isArray(data) && data.length > 0) return data.map((item) => renderMenuItem(item));

    return <div className="text-gray-700 text-sm py-2 px-4">Nenhuma opção</div>;
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label" className="text-sm">
        {label}
      </InputLabel>

      <Select labelId="demo-simple-select-label" id="demo-simple-select" label={label} {...rest}>
        {content()}
      </Select>
    </FormControl>
  );
};
