export const Preloader = () => {
  return (
    <div className="w-screen h-screen grid place-items-center w">
      <svg
        className="overflow-visible"
        width="236"
        id="preloader"
        height="236"
        viewBox="0 0 236 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="preload-circle"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M118 231C180.408 231 231 180.408 231 118C231 55.5918 180.408 5 118 5C55.5918 5 5 55.5918 5 118C5 180.408 55.5918 231 118 231ZM118 236C183.17 236 236 183.17 236 118C236 52.8304 183.17 0 118 0C52.8304 0 0 52.8304 0 118C0 183.17 52.8304 236 118 236Z"
          fill="white"
        />
        <path
          className="preload-logo"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M78 41V194.101L103.907 180.615V150.471H132.863V180.615L157.246 195.687L158.262 41L132.863 56.4688V83.8365H103.907V58.4519L78 41ZM103.907 108.682H132.863V129.577H103.907V108.682Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
