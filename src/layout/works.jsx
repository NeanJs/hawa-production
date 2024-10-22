import ThumbnailBox from "@/components/ui/Workcard";
import { CoverLayout } from "./coverlayout";
import { Filter } from "@/helper/filter";
import { useEffect, useState } from "react";
import { useFirebaseData } from "@/context/FirebaseContext";
import YouTubePlayer from "react-player/youtube";

import { Button } from "@/components/ui/Button";

export default function Works() {
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
  // const [filteredData, setFilteredData] = useState(data);
  const { gallery } = useFirebaseData();
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const handleModal = (item) => {
    setModal(!modal);
    setModalData(item);
    console.log(modal);
  };

  return (
    <div
      className="projects-page w-screen min-h-screen p-4 grid place-items-center "
      id="projects"
    >
      <CoverLayout className={"h-full justify-start"}>
        <div className="text-center py-8 text-white w-full my-2">
          <h1 className="text-3xl font-bold">Our Featured Projects</h1>
          <p className="mt-2 text-gray-600">
            Here are some of our featured projects we want to share
          </p>
        </div>

        {/* <Filter
          data={data}
          filterdData={filteredData}
          setFilteredData={setFilteredData}
        /> */}

        {/* <div className="border-2 border-red-500 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 h-full"> */}
        <div className="columns-2 gap-4 relative">
          {gallery?.length > 0 &&
            gallery.map((item) => (
              <div
                key={item?.id}
                className="mb-8 group relative"
                onClick={() => handleModal(item)}
              >
                <img
                  src={item?.thumbnail}
                  className="rounded-lg"
                  alt={item?.title}
                />
                <div className="absolute  inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg">{item.text}</span>
                </div>
              </div>
            ))}
          {/* {gallery?.map((item) => (
            <ThumbnailBox
              key={item.id}
              src={item.url}
              text={item.title}
              // colSpan={image?.colSpan || ""}
              // rowSpan={image?.rowSpan || ""}
            />
          ))} */}
        </div>
      </CoverLayout>
      {modal && (
        <div
          data-aos="fade-in"
          className="modal-back fixed grid place-items-center w-screen h-screen bg-black border-2 border-red-400 top-0 bg-opacity-50 backdrop-blur-sm"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration={300}
            className="modal h-4/6 w-2/6  bg-black overflow-hidden"
          >
            <YouTubePlayer url={modalData.url} width={"100%"} height={"70%"} />
            <Button
              event={() => setModal(false)}
              className="bg-white p-4"
              text={"Close"}
            />
          </div>
        </div>
      )}
    </div>
  );
}
