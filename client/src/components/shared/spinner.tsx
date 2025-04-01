export const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className={`
        inline-block h-16 w-16 animate-spin rounded-full border-2 border-solid border-current border-r-transparent 
        align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]
        ${className}
      `}
        role="status"
      ></div>
    </div>
  );
};
