import ThumbnailBox from "@/components/ui/Workcard";
import { CoverLayout } from "./coverlayout";

export const Works = () => {
  const images = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1674688194029-17dda3aaf779?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Text 1",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1715876234545-88509db72eb3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      text: "Text 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1715630914630-145eff95062b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      text: "Text 3",
    },
    {
      id: 4,
      src: "https://plus.unsplash.com/premium_photo-1675537843200-78c1a0ea1736?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
      text: "Text 4",
      rowSpan:"col-span-2"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1715804862288-dc0002314d64?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
      text: "Text 5",
      colSpan: "col-span-2",
    },
    {
      id: 6,
      src: "https://plus.unsplash.com/premium_photo-1675106697462-9ab93a450112?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
      text: "Text 6",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1715937359846-1c2544ddf655?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
      text: "Text 7",
      rowSpan: "row-span-2",
    },
    {
      id: 8,
      src: "https://plus.unsplash.com/premium_photo-1699553551923-73755578d942?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
      text: "Text 8",
      colSpan: "col-span-2",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1715837644848-ec3bf4726b73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
      text: "Text 9",
    },
    {
      id: 10,
      src: "https://via.placeholder.com/300x200?text=Image+10",
      text: "Text 10",
    },
    {
      id: 11,
      src: "https://via.placeholder.com/300x200?text=Image+11",
      text: "Text 11",
    },
    {
      id: 12,
      src: "https://via.placeholder.com/300x200?text=Image+12",
      text: "Text 12",
      colSpan: "col-span-2",
    },
  ];

  return (
    <div className="projects-page min-h-screen p-4" id="projects">
      <CoverLayout>
        <div className="text-center py-8 bg-white w-full my-2">
          <h1 className="text-3xl font-bold">Our Featured Projects</h1>
          <p className="mt-2 text-gray-600">
            Here are some of our featured projects we want to share
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <ThumbnailBox
              key={image.id}
              src={image.src}
              text={image.text}
              colSpan={image.colSpan || ""}
              rowSpan={image.rowSpan || ""}
            />
          ))}
        </div>
      </CoverLayout>
    </div>
  );
};
