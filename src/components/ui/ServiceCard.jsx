import { CONTENTS } from "@/constants";
import Image from "next/image";

export const ServiceCard = ({ icon, title, description, img }) => {
  return (
    <div className="service-card text-dark flex flex-col items-center text-center justify-center bg-white backdrop-blur-lg min-w-fit w-[300px] h-[400px]  gap-8 shadow-lg rounded-lg overflow-hidden">
      <div className="content-top flex-[.4] w-full h-full relative flex items-center justify-center bg-cover bg-dark">
        <Image
          src={img}
          className="absolute object-cover top-0 left-0 w-full h-full  opacity-40"
          alt="service-card"
        />
        <span className="text-4xl bg-dark border-2 border-white text-white p-4 rounded-full absolute -bottom-[20%]">
          {icon}
        </span>
      </div>
      <div className="content-btm p-2 flex-[.6] flex flex-col gap-2">
        <span className="text-xl tracking-[2px] font-medium">{title}</span>
        <p className="text-justify text-lg leading-relaxed ">{description}</p>
      </div>
    </div>
  );
};
