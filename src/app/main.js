import { Video } from "@/components/ui/VideoPlayer";
import Homepage from "@/layout/homepage";
import dynamic from "next/dynamic";
import AboutPage from "@/layout/aboutus";
import Services from "@/layout/services";
import ContactPage from "@/components/ContactPage";
import Works from "@/layout/works";
import Testimonials from "@/layout/testimonials";
import Team from "@/layout/team";
import { Preloader } from "@/layout/preloader";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const Navbar = dynamic(() => import("@/components/ui/Navbar"));

export default function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5500);
  }, []);
  return (
    <>
      {loader ? (
        <Preloader />
      ) : (
        <div className="w-full mx-auto grid place-items-center relative">
          <Navbar />
          <Video />
          <Homepage />
          <AboutPage />
          <Services />
          <Works />
          <Testimonials />
          <Team />
          <ContactPage />
          <Toaster />
        </div>
      )}
    </>
  );
}
