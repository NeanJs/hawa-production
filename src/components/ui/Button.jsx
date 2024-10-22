export const Button = ({ text, style, isPrimary, event, children }) => {
  return (
    <button
      onClick={event}
      className={`h-fit p-4 border-2 capitalize border-white bg-white text-black hover:bg-transparent cursor-pointer hover:text-white text-xl tracking-[2px] ease-linear duration-300 hover:drop-shadow-2xl  ${style} ${
        isPrimary && "hover:bg-white hover:text-black"
      }`}
    >
      {text || children}
    </button>
  );
};
