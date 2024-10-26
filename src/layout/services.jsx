import { ServiceCard } from "@/components/ui/ServiceCard";
import { CoverLayout } from "./coverlayout";
import { services } from "@/constants";

export default function Services() {
  return (
    <div className="services-page min-h-fit py-16 w-screen bg-zinc-900">
      <CoverLayout>
        <div className="service-header flex flex-col items-center mx-auto text-center justify-center gap-4">
          <h1 className="head text-5xl font-light tracking-[1.5px] text-white">
            Our Services
          </h1>
          <p className="text-lg text-white">
            Comprehensive production services tailored to your needs
          </p>
        </div>
        <div className="service-cards p-4 my-8 flex flex-wrap gap-4 justify-center lg:justify-between mx-auto w-full">
          {services.map((service, key) => (
            <div
              key={key}
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={key * 100}
            >
              <ServiceCard key={key} {...service} />
            </div>
          ))}
        </div>
      </CoverLayout>
    </div>
  );
}
