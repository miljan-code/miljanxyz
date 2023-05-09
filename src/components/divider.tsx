interface DividerProps {}

export const Divider: React.FC<DividerProps> = () => {
  return (
    <div className="relative mx-auto w-20 py-6">
      <div className="h-0.5 w-full bg-primary/50" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">
        ★
      </span>
    </div>
  );
};
