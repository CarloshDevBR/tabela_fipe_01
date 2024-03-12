import { HTMLAttributes } from 'react';

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children: string;
};

export const Paragraph = ({ children, ...rest }: ParagraphProps) => {
  return <p {...rest}>{children}</p>;
};
