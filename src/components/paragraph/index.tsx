import { HTMLAttributes } from 'react';

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};

export const Paragraph = ({ children, ...rest }: ParagraphProps) => {
  return <p {...rest}>{children}</p>;
};
