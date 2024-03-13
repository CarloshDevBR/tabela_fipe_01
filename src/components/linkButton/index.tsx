import Link, { LinkProps } from 'next/link';

type ButtonLinkProps = LinkProps & {
  children: string;
  disabled?: boolean;
  buttonClass?: string;
};

export const ButtonLink = ({ children, disabled, buttonClass, ...rest }: ButtonLinkProps) => {
  return (
    <Link
      data-disabled={disabled}
      className={`px-9 py-3 mt-4 bg-violet-800 hover:bg-purple-700 active:opacity-70 rounded-md shadow text-white data-[disabled=true]:opacity-25 data-[disabled=true]:bg-gray-500 ${buttonClass}`}
      {...rest}
    >
      {children}
    </Link>
  );
};
