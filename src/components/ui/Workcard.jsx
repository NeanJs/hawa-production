import React, { useState } from "react";

const ThumbnailBox = ({ thumbnail, text, handleModal }) => {
  return (
    <div
      onClick={handleModal}
      className={`relative size-full cursor-pointer overflow-hidden`}
    >
      <img
        src={thumbnail}
        alt="Thumbnail"
        className="mb-4  rounded-lg object-cover"
      />
      <div className="absolute  inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-lg">{text}</span>
      </div>
    </div>
  );
};

export default ThumbnailBox;
