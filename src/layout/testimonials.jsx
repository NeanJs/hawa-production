import React from "react";
import { CoverLayout } from "./coverlayout";
import Marquee from "react-fast-marquee";
import { useFirebaseData } from "@/context/FirebaseContext";

const Testimonials = () => {
  const testimonialss = [
    {
      rating: 5,
      title: "Outstanding floral designs",
      text: "The shop's commitment to customer satisfaction shines through in every bouquet. I highly recommend them for top-notch service and beauty.",
      author: "Diya",
    },
    {
      rating: 4,
      title: "What a find!",
      text: "This flower shop combines creativity with quality. The bouquets are not only visually stunning but also long-lasting. A reliable choice for adding elegance to any event.",
      author: "Pranav",
    },
    {
      rating: 5,
      title: "A hidden treasure",
      text: "The shop's diverse range of flowers and artistic arrangements reflect true passion. The staff’s friendliness and professionalism make every visit delightful.",
      author: "Pranav",
    },
    {
      rating: 5,
      title: "A hidden treasure",
      text: "The shop's diverse range of flowers and artistic arrangements reflect true passion. The staff’s friendliness and professionalism make every visit delightful.",
      author: "Pranav",
    },
    {
      rating: 5,
      title: "A hidden treasure",
      text: "The shop's diverse range of flowers and artistic arrangements reflect true passion. The staff’s friendliness and professionalism make every visit delightful.",
      author: "Pranav",
    },
  ];
  const { testimonials } = useFirebaseData();

  const renderStars = (count) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < count ? "text-yellow-500" : "text-gray-300"}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="size-full h-[500px] py-12 text-center bg-[#1e1e1e] testimonial overflow-hidden relative ">
      <img
        src="https://images.unsplash.com/photo-1654723011688-81cfe9039446?q=80&w=3434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="absolute object-cover object-center opacity-10  inset-0"
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
                    className="bg-white shadow-lg p-6 rounded-lg max-w-xs text-left mx-8"
                  >
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      "{testimonial.title}"
                    </h3>
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                    <p className="text-gray-500 italic">
                      - {testimonial.author}
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
