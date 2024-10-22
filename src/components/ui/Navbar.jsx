import Image from "next/image";
import Logo from "@/images/logo_hawa.png";
import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          document.querySelector(".navlinks").classList.add("enable-bg");
        } else {
          document.querySelector(".navlinks").classList.remove("enable-bg");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="w-full h-fit fixed top-0  bg-black bg-opacity-80 backdrop-blur-sm py-2 lg:p-0 z-20">
      <div
        className="navbar relative w-full lg:w-3/5  text-white flex items-center justify-between mx-auto h-fit "
        data-aos="fade-down"
      >
        <Image
          className="lg:hidden p-2"
          width={100}
          height={100}
          src={Logo}
          alt="logo"
        />
        <span
          className="text-white text-4xl lg:hidden absolute right-0 z-10 p-2"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <MdMenu /> : <MdClose />}
        </span>
        <ul
          className={`navlinks p-4 ease duration-300 flex flex-col absolute top-[100%] right-0 bg-black lg:bg-transparent w-full items-center gap-8 lg:flex-row lg:justify-between ${
            menu ? " translate-x-[150%]" : " translate-x-0"
          }`}
        >
          {/* <ul
          className={`navlinks px-4 bg-black bg-opacity-80 ease-linear duration-300 ${
            
          } flex flex-col top-[100%]  gap-8 items-end text-white w-full justify-between py-4 lg:items-center  lg:flex-row`}
        > */}
          <Link to="about-page">About</Link>
          <Link to="projects" href="#projects">
            Works
          </Link>
          <Link to="homepage" className="hidden lg:block">
            <Image
              className="hidden lg:block"
              width={100}
              height={100}
              src={Logo}
              alt="logo"
            />
          </Link>

          <Link to="services-page" offset={-200}>
            Services
          </Link>
          <Link to="contact-page">Connect</Link>
        </ul>
      </div>
    </div>
  );
}
