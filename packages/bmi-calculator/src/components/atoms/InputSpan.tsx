const InputSpan = ({ unit }: { unit: string }) => {
  return (
    <span className="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">
      {unit}
    </span>
  );
};

export default InputSpan;
