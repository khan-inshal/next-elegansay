import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaBehance,
  FaApple,
  FaBlackberry,
} from "react-icons/fa";
const Trusted = () => {
  return (
    <>
      <div className="container container-width pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-24 lg:pb-28">
        <h2 className="mb-4 md:mb-8 lg:mb-12 text-center text-zinc-600 font-bold text-lg lg:text-3xl uppercase tracking-[0.5rem]">
          Trusted by
        </h2>
        <div className=" max-w-8xl text-2xl flex justify-evenly md:text-4xl lg:text-5xl text-zinc-600">
          <FaFacebook />
          <FaGoogle />
          <FaYoutube />
          <FaTwitter />
          <FaBehance />
          <FaApple />
          <FaBlackberry />
        </div>
      </div>
    </>
  );
};

export default Trusted;
