import React from "react";
import { CoverLayout } from "./coverlayout";
import Marquee from "react-fast-marquee";
import { useFirebaseData } from "@/context/FirebaseContext";

const Testimonials = () => {
  const { testimonials, about } = useFirebaseData();

  return (
    <section className="size-full h-[500px] py-12 text-center bg-[#1e1e1e] testimonial overflow-hidden relative ">
      <img
        src={about[0]?.backgroundImg}
        alt=""
        className="absolute object-cover  w-full h-full
         opacity-10  inset-0"
      />
      <CoverLayout>
        <section className="flex flex-col items-start justify-start size-full z-10">
          <div className="headline text-center w-full flex flex-col gap-4">
            <span className="header flex flex-col w-fit mx-auto">
              Testimonials
            </span>

            <h2 className="text-3xl font-bold mb-10 text-white">
              What People are Saying
            </h2>
          </div>
          <Marquee pauseOnHover speed={100}>
            <div className="flex flex-row justify-center w-full">
              {testimonials?.length > 0 &&
                testimonials?.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg p-2 rounded-lg max-w-md text-left mx-8"
                  >
                    {/* <div className="mb">
                      {renderStars(testimonial.rating)}
                    </div> */}
                    <h3 className="text-lg font-semibold mb-2">
                      "{testimonial.title}"
                    </h3>
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                    <p className="text-gray-500 italic">
                      - {testimonial.author}, {testimonial.location}
                    </p>
                  </div>
                ))}
            </div>
          </Marquee>
        </section>
      </CoverLayout>
    </section>
  );
};

export default Testimonials;
