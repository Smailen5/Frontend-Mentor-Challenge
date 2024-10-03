type ContainerInputProps = {
  children: React.ReactNode;
};

export const ContainerInput: React.FC<ContainerInputProps> = ({ children }) => {
  return <div className="flex rounded-sm border-2 p-2">{children}</div>;
};
