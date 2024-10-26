import ThumbnailBox from "@/components/ui/Workcard";
import { CoverLayout } from "./coverlayout";
import { Filter } from "@/helper/filter";
import { useEffect, useState } from "react";
import { useFirebaseData } from "@/context/FirebaseContext";
import YouTubePlayer from "react-player/youtube";
import { MdClose, MdPlayCircle, MdSmartDisplay } from "react-icons/md";

import { Button } from "@/components/ui/Button";
import { BsPlayBtnFill } from "react-icons/bs";
import { FaCross } from "react-icons/fa6";

export default function Works() {
  const { gallery } = useFirebaseData();
  const [filteredData, setFilteredData] = useState(gallery);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const handleModal = (item) => {
    setModal(!modal);
    setModalData(item);
  };
  useEffect(() => {
    setFilteredData(gallery);
  }, [gallery]);
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

        <Filter
          data={gallery}
          filterdData={filteredData}
          setFilteredData={setFilteredData}
        />

        {Gallery(filteredData, handleModal)}
      </CoverLayout>
      {modal && (
        <div
          data-aos="fade-in"
          className="modal-back fixed grid place-items-center w-screen h-screen bg-black top-0 bg-opacity-50 backdrop-blur-sm z-20"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration={300}
            className="modal w-6/12 h-[600px] bg-white relative "
          >
            <YouTubePlayer
              url={modalData.url}
              width={"100%"}
              height={"70%"}
              controls={true}
            />
            <div className="modal-body flex flex-col gap-1 p-2">
              <h2 className="title text-[#424b57] font-bold text-2xl">
                {modalData.title}
              </h2>
              <p className="body  text-[#424b57]  text-lg">
                {modalData.description}
              </p>
            </div>
            <button
              onClick={() => setModal(false)}
              className="bg-white rounded-full text-2xl p-4 absolute -top-10 -right-10 m-2 z-10"
            >
              <MdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export function Gallery(gallery, handleModal) {
  const [count, setCount] = useState(3);
  const handleShowMore = () => {
    if (count >= gallery?.length) {
      setCount(3);
    } else {
      setCount((prevCount) => prevCount + 2);
    }
  };
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
      <div className="columns-1 md:columns-2 gap-4 relative">
        {gallery?.length > 0 &&
          gallery.slice(0, count).map((item) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={item * 200}
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
                  {item?.type}
                </span>
              </div>
            </div>
          ))}
      </div>
      <Button event={handleShowMore}>
        Show {count >= gallery?.length ? "Less" : "More"}
      </Button>
    </div>
  );
}
