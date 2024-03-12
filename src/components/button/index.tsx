import { Button as Btn, ButtonProps } from '@mui/material';

type BtnProps = ButtonProps & {
  children: string;
};

export const Button = ({ children, ...rest }: BtnProps) => {
  return <Btn {...rest}>{children}</Btn>;
};
