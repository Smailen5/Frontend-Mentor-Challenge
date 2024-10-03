type ContainerInputProps = {
  children: React.ReactNode;
  type?: string;
};

export const ContainerInput: React.FC<ContainerInputProps> = ({
  children,
  type,
}) => {
  if (type === "radio") {
    return <div className="flex rounded-sm border-2 p-2">{children}</div>;
  }
  return <div className="pb-4">{children}</div>;
};
