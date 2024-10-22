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
