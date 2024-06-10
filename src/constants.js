import {
  BsCameraFill as Camera,
  BsCameraReelsFill as Video,
  BsCodeSlash as Code,
} from "react-icons/bs";
import event from "@/images/event.avif";
import software from "@/images/code.avif";
import product from "@/images/product.avif";
import Hawa from "@/images/HawaLogo.png";
export const CONTENTS = {
  home: {
    title: "Hawa Production",
    tagline: "Think. Create. Present.",
  },
  about: {
    title: "Who are we?",
    body: "Hawa Production is where stories come alive. We blend creativity with expertise to craft compelling narratives that captivate audiences. From concept to creation, we're dedicated to delivering exceptional results that resonate. Experience the art of storytelling with Hawa Production.",
    logo: Hawa,
    extras: {
      eng: `We are 
            Hawa Productions`,
      fr: `Nous sommes Hawa Productions`,
      np: `हामी हावा प्रोडक्सन हौं`,
    },
  },
};
export const services = [
  {
    title: "Event Photoshoot & Videography",
    icon: <Camera />,
    description: `Capture your special moments with our professional event photoshoot and videography services. From weddings to corporate events, we deliver high-quality photos and videos that you'll cherish forever.
    `,
    img: event,
  },
  {
    title: "Product Photoshoot & Videography",
    icon: <Video />,
    description: `Showcase your products with stunning visuals. Our expert team creates high-resolution images and videos that highlight your product's unique features, perfect for e-commerce and advertising.
    `,
    img: product,
  },
  {
    title: "Software & Web Development",
    icon: <Code />,
    description: `Enhance your digital presence with our software and web development services. We create custom software, mobile apps, and responsive websites that are functional, user-friendly, and visually appealing.
    `,
    img: software,
  },
];

export const Projects = [
  {
    name: "Project One",
    src: "V9G6YQDrXEk",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorum? Magni amet ipsum esse tempora, obcaecati accusamus iure deserunt. Quos!",
  },
  // {
  //   name: "Sabin Rai",
  //   src: "uyal04q0Uug",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorum? Magni amet ipsum esse tempora, obcaecati accusamus iure deserunt. Quos!",
  // },
  // {
  //   name: "Sabin Rai",
  //   src: "uyal04q0Uug",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorum? Magni amet ipsum esse tempora, obcaecati accusamus iure deserunt. Quos!",
  // },
];
