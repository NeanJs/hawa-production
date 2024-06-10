import { CONTENTS } from "@/constants";
import Image from "next/image";
import { CoverLayout } from "./coverlayout";
import { Button } from "@/components/ui/Button";
export default function AboutPage() {
  return (
    <div className="about-page relative grid place-items-center min-h-screen h-full !overflow-visible">
      <CoverLayout className={"!overflow-visible"}>
        <div className="about-container flex-col gap-8 lg:gap-4 lg:flex-row text-white flex items-center justify-between  ">
          <div className="text-content w-full flex gap-4 flex-col justify-between lg:w-3/5">
            <h1 className="about-head text-5xl font-bold">
              {CONTENTS.about.title}
            </h1>
            <p className="w-full lg:w-4/5 text-lg">{CONTENTS.about.body}</p>
            <Button text={"Meet our team"} style={"w-fit"} />
          </div>
          <div className="image-element w-4/5 p-8 flex justify-center items-center relative min-h-fit lg:h-[350px] lg:w-2/5 drop-shadow-xl bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md">
            <Image src={CONTENTS.about.logo} className="scale-75 h-[70%]" />
            <span
              data-aos="fade-right"
              className="absolute text-2xl w-32 -left-10 top-[10%]"
            >
              {CONTENTS.about.extras.eng}
            </span>
            <span
              data-aos="fade-left"
              className="absolute text-2xl w-32 top-[50%] -right-20"
            >
              {CONTENTS.about.extras.np}
            </span>
            <span
              data-aos="fade-up"
              className="absolute text-2xl w-48 -bottom-12 z-10"
            >
              {CONTENTS.about.extras.fr}
            </span>
          </div>
        </div>
      </CoverLayout>
    </div>
  );
}
