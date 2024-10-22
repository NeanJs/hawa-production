export const CoverLayout = ({ children, className }) => {
  return (
    <div
      className={`layout overflow-hidden w-full h-full sm:w-5/6 p-2 lg:w-3/5 flex flex-col items-start justify-center mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
