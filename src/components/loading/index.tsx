import { CircularProgress, CircularProgressProps } from '@mui/material';

type LoadingProps = CircularProgressProps;

export const Loading = ({ ...rest }: LoadingProps) => {
  return <CircularProgress {...rest} />;
};
