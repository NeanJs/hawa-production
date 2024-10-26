import { CoverLayout } from "@/layout/coverlayout";
import React from "react";
import { Button } from "./ui/Button";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa6";
import { Footer } from "@/layout/footer";

const ContactPage = () => {
  return (
    <div className="contact-page w-screen min-h-screen text-white bg-black flex flex-col justify-center items-center">
      <CoverLayout>
        <div className="flex w-full flex-col gap-4 tracking-[2px]">
          <div className="flex flex-col">
            <span className="text-xl">Get in touch</span>
            <h1 className="text-8xl md:text-xxl">
              Hello <br></br>there.
            </h1>
          </div>
          <div className="flex flex-row w-full gap-8 flex-wrap">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent flex-1 border-b-2 border-gray-600 text-white px-4 py-8 mr-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent flex-1 border-b-2 border-gray-600 text-white px-4 py-8 mr-2 focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Discuss your project"
            className="bg-transparent border-b-2 border-gray-600 text-white px-4 py-2 mt-4 focus:outline-none"
            rows="4"
          ></textarea>
          <Button text={"Send"} />
        </div>
        <div className="text-center w-full my-12 flex flex-col gap-8">
          <span className="  text-[#424b57] text-2xl divider">OR</span>
          <div className="social-handles  w-full flex flex-col items-center justify-center gap-4 ">
            <span className="text-2xl  text-[#424b57]">Ping us at</span>
            <div className="flex logos-social gap-8 items-center text-4xl">
              <a>
                <FaFacebook />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaWhatsapp />
              </a>
              <a>
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </CoverLayout>
    </div>
  );
};

export default ContactPage;
