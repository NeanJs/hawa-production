import { Video } from "@/components/ui/VideoPlayer";
import Homepage from "@/layout/homepage";
import dynamic from "next/dynamic";
import AboutPage from "@/layout/aboutus";
import Services from "@/layout/services";

import ContactPage from "@/components/ContactPage";
import Works from "@/layout/works";
import Link from "next/link";
import Testimonials from "@/layout/testimonials";
import Team from "@/layout/team";
import { Footer } from "@/layout/footer";

const Navbar = dynamic(() => import("@/components/ui/Navbar"));
export default function App() {
  return (
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
    </div>
  );
}
