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
const data = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1674688194029-17dda3aaf779?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Text 1",
    url: "https://www.youtube.com/watch?v=x1rGPfn8Q4A",
    type: "img",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1715876234545-88509db72eb3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    text: "Text 2",
    type: "img",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1715630914630-145eff95062b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    text: "Text 3",
    type: "video",
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1675537843200-78c1a0ea1736?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    text: "Text 4",
    rowSpan: "col-span-2",
    type: "img",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1715804862288-dc0002314d64?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
    text: "Text 5",
    colSpan: "col-span-2",
    type: "video",
  },
  {
    id: 6,
    src: "https://plus.unsplash.com/premium_photo-1675106697462-9ab93a450112?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    text: "Text 6",
    type: "video",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1715937359846-1c2544ddf655?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    text: "Text 7",
    rowSpan: "row-span-2",
    type: "img",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1699553551923-73755578d942?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    text: "Text 8",
    colSpan: "col-span-2",
    type: "video",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1715837644848-ec3bf4726b73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    text: "Text 9",
    type: "img",
  },
  {
    id: 10,
    src: "https://via.placeholder.com/300x200?text=Image+10",
    text: "Text 10",
    type: "img",
  },
  {
    id: 11,
    src: "https://via.placeholder.com/300x200?text=Image+11",
    text: "Text 11",
    type: "video",
  },
  {
    id: 12,
    src: "https://via.placeholder.com/300x200?text=Image+12",
    text: "Text 12",
    colSpan: "col-span-2",
    type: "video",
  },
];
