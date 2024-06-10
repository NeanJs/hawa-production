"use client";
import { Navbar } from "@/components/ui/Navbar";
import { Video } from "@/components/ui/VideoPlayer";
import Homepage from "@/layout/homepage";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./globals.css";
import AboutPage from "@/layout/aboutus";
import Services from "@/layout/services";
import { Works } from "@/layout/works";
import ContactPage from "@/components/ContactPage";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in", once: true });
  });
  return (
    <div className="w-full mx-auto grid place-items-center">
      {/* <div className="layout w-5/6 p-2 lg:w-3/5 flex flex-col items-center justify-center mx-auto"> */}
      <Navbar />
      <Video />
      <Homepage />
      <AboutPage />
      <Services />
      <Works />
      <ContactPage />
      {/* </div> */}
    </div>
  );
}
