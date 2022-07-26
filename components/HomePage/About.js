import Image from "next/image";
import AboutImg from "../../public/images/about.jpg";

export const About = () => {
  return (
    <section className="container container-width grid text-white lg:grid-cols-2">
      <div className="border-[20px] max-h-[640px] border-white border-b-0 relative mx-auto w-11/12 h-[50vh] row-start-2 lg:w-full lg:row-start-1 xl:h-[75vh]">
        <Image
          className="object-cover"
          src={AboutImg}
          layout="fill"
          alt="a house with flying birds over it"
          placeholder="blur"
          quality={100}
          priority
        />
      </div>
      <section className="pb-12 flex flex-col justify-center lg:px-12 lg:py-0">
        <h2 className="text-4xl font-bold text-center mb:text-5xl lg:text-6xl lg:text-left">
          We lead this industry
        </h2>

        <p className="break-all mt-4 mb-12 mx-4 max-w-2xl text-zinc-400 lg:mx-0 lg:mt-8 lg:mb-16">
          Integer eros lectus, efficitur at rhoncus eu, faucibus vitae velit.
          Integer vehicula volutpat sagittis. Pellentesque tempus diam vitae
          hendrerit vestibulum. Curabitur ac nulla nec lacus laoreet fringilla
          sit amet nec ligula. Suspendisse a metus eleifend, pharetra ipsum id,
          tincidunt tortor. Donec ut consectetur ipsum, ac auctor mi. Donec vel
          finibus odio, vitae porta magna. Cras cursus nisi a odio sodales, id
          aliquam nibh eleifend. Aliquam imperdiet quis diam sed suscipit.
        </p>
        <section className="mx-auto w-10/12 flex justify-between text-center lg:w-full lg:mx-0 lg:gap-16">
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">300</p>
            <p className="text text-zinc-500 leading-snug w-min lg:w-fit">
              Clients
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">240</p>
            <p className="text text-zinc-500 leading-snug w-min lg:w-fit">
              Properties Sold
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">12</p>
            <p className="text text-zinc-500 leading-snug w-min lg:w-fit">
              Years of Experience
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};
