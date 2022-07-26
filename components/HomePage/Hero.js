import Image from "next/image";
import { Button } from "../Utils/Button";
import { GhostButton } from "../Utils/GhostButton";
import HeroImg from "../../public/images/hero.jpg";
import { BsArrowRight } from "react-icons/bs";

export const Hero = () => {
  return (
    <>
      <section className="container container-width pt-24 min-h-screen flex flex-col justify-start items-center text-white">
        <h2 className="mb-2 uppercase font-bold tracking-widest text-zinc-400 mb:text-lg lg:text-2xl">
          Discover. Live. Relish.
        </h2>
        <h1 className="uppercase font-bold text-center text-4xl mb:text-5xl lg:text-left lg:text-7xl">
          Elegance is the <span className="text-brand-accent">new modern.</span>{" "}
        </h1>

        <p className="mt-4 mb-2 mx-2 text-zinc-500 lg:mx-0 lg:text-lg lg:my-4">
          Together we can craft and build things that last because{" "}
          <span className="text-zinc-400">
            we believe in great architecture.
          </span>
        </p>

        <Button href="/properties">
          View properties <BsArrowRight className="text-2xl" />
        </Button>
        <div className="mt-10 relative w-full h-[50vh] lg:h-[75vh] lg:mt-12 ">
          <Image
            src={HeroImg}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            quality={100}
            alt="hero image of a whitehouse"
            priority
          />
        </div>
      </section>
    </>
  );
};
