import { Button } from "@/components/ui/Button";
import "../app/globals.css";
import { CoverLayout } from "./coverlayout";
import { Link } from "react-scroll";
import { useFirebaseData } from "@/context/FirebaseContext";

export default function Homepage() {
  const { about } = useFirebaseData();
  const data = about && { ...about[0] };
  return (
    <div className="homepage flex items-start overflow-hidden flex-col w-full gap-8 text-white h-screen justify-center">
      <CoverLayout>
        <div className="flex items-start flex-col w-full gap-4 lg:gap-8 min-h-fit">
          <p
            data-aos="fade-up"
            className="font-thin text-2xl tracking-[4px]"
            data-aos-delay={300}
          >
            {data?.tagline}
          </p>

          <h1
            data-aos="fade-right"
            className="text-white text-4xl lg:text-xxl uppercase z-10 font-bold tracking-[8px] leading-normal"
          >
            Hawa <br />
            Production.
          </h1>
          {/* <span className="text-white font-cursive text-xl italic">Bring your thoughts in reel life</span> */}
          <div
            className="flex flex-wrap gap-2 w-full "
            data-aos="fade-down"
            data-aos-delay={300}
          >
            <Link to="projects-page" offset={-150}>
              <Button text={"Our Recent Works"} />
            </Link>
            <Link to="contact-page" offset={-150}>
              <Button text={"Discuss a project"} />
            </Link>
          </div>
        </div>
      </CoverLayout>
    </div>
  );
}
