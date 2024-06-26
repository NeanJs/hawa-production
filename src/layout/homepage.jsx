import { Button } from "@/components/ui/Button";
import "../app/globals.css";
import { CoverLayout } from "./coverlayout";
import { Link } from "react-scroll";

export default function Homepage() {
  return (
    <div className="homepage flex items-start overflow-hidden flex-col w-full gap-8 text-white h-screen justify-center">
      <CoverLayout>
        <div className="flex items-start flex-col w-full gap-4 lg:gap-8 min-h-fit">
          <p className="font-thin text-2xl tracking-[4px]">
            Think. Caputre. Present.
          </p>
          <h1
            data-aos=""
            className="text-white text-4xl lg:text-xxl uppercase z-10 font-bold tracking-[8px] leading-normal"
          >
            Hawa <br />
            Production.
          </h1>
          {/* <span className="text-white font-cursive text-xl italic">Bring your thoughts in reel life</span> */}
          <div className="flex flex-wrap gap-2 w-full " data-aos="fade-up">
            <Link to="projects-page">
              <Button text={"Our Recent Works"} />
            </Link>
            <Link to="contact-page">
              <Button text={"Discuss a project"} />
            </Link>
          </div>
        </div>
      </CoverLayout>
    </div>
  );
}
