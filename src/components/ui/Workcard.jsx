import React from "react";

const ThumbnailBox = ({ src, text, colSpan, rowSpan }) => {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden ${colSpan} ${rowSpan}`}
    >
      <img src={src} alt="Thumbnail" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-lg">{text}</span>
      </div>
    </div>
  );
};

export default ThumbnailBox;
