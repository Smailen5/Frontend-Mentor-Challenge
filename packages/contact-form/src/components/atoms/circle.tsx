export const Circle: React.FC<{ active?: boolean }> = ({ active }) => {
  return (
    <div
      className={`flex size-5 items-center justify-center rounded-full border border-input ${active && "border-2 border-primary"}`}
    >
      <div className={`size-3 rounded-full ${active && "bg-primary"}`} />
    </div>
  );
};
