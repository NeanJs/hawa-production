import ReactPlayer from "react-player/lazy";

export function Video() {
  const style = {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-5",
  };
  return (
    // <ReactPlayer
    //   url={"https://youtu.be/V9G6YQDrXEk"}
    //   style={{ style }}
    //   loop
    //   muted
    //   playing
    // />
    // <video
    //   tabindex="-1"
    //   className="w-screen video-stream html5-main-video h-screen object-cover absolute -z-[5] opacity-40 left-0 top-0 grayscale-0 blur-sm"
    //   //   className="video-stream html5-main-video"
    //   webkit-playsinline=""
    //   playsinline=""
    //   controlslist="nodownload"
    //   src="blob:https://www.youtube.com/5258c31d-c06b-4a49-bc83-0f30288420b4"
    // ></video>
    // <video
    //   className="w-screen h-screen object-cover absolute -z-[5] opacity-40 left-0 top-0 grayscale-0 blur-sm"
    //   controls
    //   autoPlay
    //   muted
    //   loop
    //   //   src="blob:https://www.youtube.com/5258c31d-c06b-4a49-bc83-0f30288420b4"
    // >
    //   <source src={"final.MOV"} className="w-full h-full" type="video/mp4" />
    // </video>
    <ReactPlayer
      wrapper={({ children }) => (
        <div
          className="w-screen h-screen object-cover absolute -z-[5] opacity-40 left-0 top-0 grayscale-0 blur-sm"
          style={{
            height: "100vh",
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            zIndex: -1,
          }}
        >
          {children}
        </div>
      )}
      url={"https://youtu.be/yjNVU94MiM4"}
      loop
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: " translate(-50%, -50%)",
      }}
      controls={false}
      muted
      playing
    />
  );
}
