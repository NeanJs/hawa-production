import { CONTENTS } from "@/constants";
import Image from "next/image";
import { CoverLayout } from "./coverlayout";
import { Button } from "@/components/ui/Button";
import { useFirebaseData } from "@/context/FirebaseContext";
import { Link } from "react-scroll";
export default function AboutPage() {
  const { about } = useFirebaseData();
  const data = about && { ...about[0] };
  return (
    <div className="about-page relative flex flex-col items-center justify-center min-h-screen h-full !overflow-visible">
      <div className="text-center py-8 text-white w-full my-2">
        <h1 className="text-3xl font-bold">Who are we?</h1>
        <p className="mt-2 text-white">
          Passionate storytellers dedicated to bringing your vision to life
        </p>
      </div>
      <CoverLayout className={"overflow-visible h-full"}>
        <div className="about-container flex-col gap-8 lg:gap-4 lg:flex-row text-white flex items-center justify-between  ">
          <div className="text-content  leading-8 w-full flex gap-4 flex-col justify-between lg:w-3/6 p-4 text-justify">
            <h1 className="about-head text-5xl font-bold">{data?.title}</h1>
            <div className="w-full text-lg flex gap-4 flex-col">
              <p>{data?.description?.first}</p>
              <p>{data?.description?.second}</p>
            </div>
            <Link to="team" offset={-200}>
              <Button text={"Meet our team"} style={"w-fit"} />
            </Link>
          </div>
          <div className="image-element w-4/5 p-8 flex justify-center items-center relative min-h-fit lg:h-[350px] lg:w-2/5 drop-shadow-xl bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md">
            <Image
              src={CONTENTS.about.logo}
              className="scale-75 h-[70%]"
              alt="content-logo"
            />
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
