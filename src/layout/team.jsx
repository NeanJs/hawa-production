import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { CoverLayout } from "./coverlayout";
import { useFirebaseData } from "@/context/FirebaseContext";

// Sample data for team members

// Social media icons (replace with actual icon components or paths)
const SocialMediaIcons = () => (
  <div className="flex justify-center space-x-4 mt-2">
    <a href="#" className="text-gray-600 hover:text-gray-800">
      <FaFacebook />
    </a>
    <a href="#" className="text-gray-600 hover:text-gray-800">
      <FaTwitter />
    </a>
    <a href="#" className="text-gray-600 hover:text-gray-800">
      <FaInstagram />
    </a>
  </div>
);

const TeamMember = ({ member, delay }) => (
  <div
    className="text-center max-w-xs mx-auto"
    data-aos={"fade-up"}
    data-aos-delay={delay}
  >
    <img
      src={member.img}
      alt={member.name}
      className="w-64 h-64 mx-auto rounded-lg object-cover"
    />
    <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
    <p className="text-sm text-gray-500">{member.role}</p>
    <SocialMediaIcons />
  </div>
);
function Team() {
  const { team } = useFirebaseData();

  return (
    <section className="py-12 bg-[#1A1A19] text-center  w-screen min-h-[400px] flex flex-col gap-8 text-white team items-center justify-center">
      <div className="header flex flex-col gap-4">
        <h2 className="text-2xl font-semibold ">Meet Our Team</h2>
        <span>A collective of talented individuals united by creativity</span>
      </div>
      <CoverLayout className={"w-full h-full"}>
        <div className="flex flex-wrap justify-between items-center gap-8 w-full my-8">
          {team &&
            team[0]?.members?.map((member, index) => (
              <TeamMember key={index} member={member} delay={index * 200} />
            ))}
        </div>
      </CoverLayout>
    </section>
  );
}

export default Team;
