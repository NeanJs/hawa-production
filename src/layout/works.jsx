import ThumbnailBox from "@/components/ui/Workcard";
import { CoverLayout } from "./coverlayout";
import { Filter } from "@/helper/filter";
import { useEffect, useState } from "react";
import { useFirebaseData } from "@/context/FirebaseContext";
import YouTubePlayer from "react-player/youtube";
import { MdPlayCircle, MdSmartDisplay } from "react-icons/md";

import { Button } from "@/components/ui/Button";
import { BsPlayBtnFill } from "react-icons/bs";

export default function Works() {
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

        {Gallery(gallery, handleModal)}
      </CoverLayout>
      {modal && (
        <div
          data-aos="fade-in"
          className="modal-back fixed grid place-items-center w-screen h-screen bg-black border-2 border-red-400 top-0 bg-opacity-50 backdrop-blur-sm"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration={300}
            className="modal h-4/6 w-2/6  bg-black overflow-hidden relative"
          >
            <YouTubePlayer url={modalData.url} width={"100%"} height={"70%"} />
            <Button
              event={() => setModal(false)}
              className="bg-white p-4 absolute top-0 right-0 m-2"
              text={"Close"}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export function Gallery(gallery, handleModal) {
  return (
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
            <div className="absolute  inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <MdPlayCircle className="text-white text-3xl" />
              <span className="text-white text-lg">{item.title}</span>
              <span className="type text-black bg-white size-fit px-2 py-1 rounded-md">
                {item.type}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
