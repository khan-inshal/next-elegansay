import Image from "next/image";
import AboutImg from "../../public/images/about.jpg";

export const About = () => {
  return (
    <section className="container container-width grid min-h-[75vh] text-white lg:mt-16 lg:grid-cols-2">
      <div className="relative w-full h-[50vh] row-start-2 lg:row-start-1">
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
      <section className="pt-2 pb-12 flex flex-col justify-center lg:px-12 lg:py-0">
        <h2 className="text-4xl font-bold text-center mb:text-5xl lg:text-left">
          We lead this industry
        </h2>

        <p className="break-all mt-4 mb-12 mx-4 max-w-2xl text-zinc-400 lg:mx-0 lg:mb-16">
          Integer eros lectus, efficitur at rhoncus eu, faucibus vitae velit.
          Integer vehicula volutpat sagittis. Pellentesque tempus diam vitae
          hendrerit vestibulum. Curabitur ac nulla nec lacus laoreet fringilla
          sit amet nec ligula. Suspendisse a metus eleifend, pharetra ipsum id,
          tincidunt tortor. Donec ut consectetur ipsum, ac auctor mi. Donec vel
          finibus odio, vitae porta magna. Cras cursus nisi a odio sodales, id
          aliquam nibh eleifend. Aliquam imperdiet quis diam sed suscipit.
        </p>
        <section className="mx-3 flex justify-between text-center lg:mx-0 lg:text-left lg:gap-16">
          <div>
            <p className="text-4xl font-bold">300</p>
            <p className="text text-zinc-500 leading-snug w-min lg:w-fit">
              Clients
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold">240</p>
            <p className="text text-zinc-500 leading-snug w-min lg:w-fit">
              Properties Sold
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold">12</p>
            <p className="text text-zinc-500 leading-snug w-min lg:w-fit">
              Years of Experience
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};
