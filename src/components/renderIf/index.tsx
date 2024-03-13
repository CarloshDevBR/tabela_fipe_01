type RenderIfProps = {
  conditional: boolean;
  children: React.ReactNode;
};

export const RenderIf = ({ conditional, children }: RenderIfProps) => {
  return <>{conditional && children}</>;
};
