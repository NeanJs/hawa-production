export const Footer = () => {
  return (
    <footer className="text-[#424b57] text-center w-full flex flex-col mb-10 gap-4 ">
      <span>Copyright@{new Date().getFullYear()}. All Rights Reserved</span>

      <span className="cursor-pointer">
        Crafted by{" "}
        <a
          href="https://www.nijanadhikari.com.np"
          target="_blank"
          className="text-[#4166EF] "
        >
          Nijan Adhikari
        </a>
      </span>
    </footer>
  );
};
