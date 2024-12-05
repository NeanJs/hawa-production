import { CoverLayout } from "@/layout/coverlayout";
import React from "react";
import { Button } from "./ui/Button";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaDiscord,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { Footer } from "@/layout/footer";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import { useFirebaseData } from "@/context/FirebaseContext";
const ContactPage = () => {
  const form = useRef();
  const [details, setDetails] = useState({
    name: "",
    message: "",
    email: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("hawa-production", "template_2ftr0js", form.current, {
        publicKey: "O21ymB7mXXtpjtepo",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Email not sent. Please try again later!");
        }
      );
  };
  const { about } = useFirebaseData();
  const data = about[0]?.socials[0];
  console.log(about);
  return (
    <div className="contact-page w-screen min-h-screen text-white bg-black flex flex-col justify-center items-center">
      <CoverLayout>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex w-full flex-col gap-4 tracking-[2px]"
        >
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
              name="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              className="bg-transparent flex-1 border-b-2 border-gray-600 text-white px-4 py-8 mr-2 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              className="bg-transparent flex-1 border-b-2 border-gray-600 text-white px-4 py-8 mr-2 focus:outline-none"
            />
          </div>
          <textarea
            onChange={(e) =>
              setDetails({ ...details, message: e.target.value })
            }
            name="message"
            placeholder="Discuss your project"
            className="bg-transparent border-b-2 border-gray-600 text-white px-4 py-2 mt-4 focus:outline-none"
            rows="4"
          ></textarea>
          <Button type text={"Send"} />
        </form>
        <div className="text-center w-full my-12 flex flex-col gap-8">
          <span className="  text-[#424b57] text-2xl divider">OR</span>
          <div className="social-handles  w-full flex flex-col items-center justify-center gap-4 ">
            <span className="text-2xl  text-[#424b57] font-light tracking-widest mb-4">
              Connect with us
            </span>
            <div className="flex logos-social gap-8 items-center text-4xl">
              <a href={data["facebook"]} target="_blank">
                <FaFacebook />
              </a>
              <a href={data["instagram"]} target="_blank">
                <FaInstagram />
              </a>
              <a href={data["tiktok"]} target="_blank">
                <FaTiktok />
              </a>
              <a href={data["youtube"]} target="_blank">
                <FaYoutube />
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
