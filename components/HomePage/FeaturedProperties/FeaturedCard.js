import Image from "next/image";
import Link from "next/link";
import { GhostButton } from "../../Utils/GhostButton";

const FeaturedCard = ({ propertyFields }) => {
  const { id, thumbnail, price, location } = propertyFields;

  const imgSrc = `https:${thumbnail.fields.file.url}`;
  const link = `/properties/${id}`;
  const imgAlt = "";
  return (
    <Link href={link} passHref>
      <article className="cursor-pointer">
        <div className="relative w-full h-[324px]">
          <div className="absolute top-[50%] left-[50%] -z-20">Loading!</div>
          <div className="relative w-full h-full">
            <Image
              src={imgSrc}
              layout="fill"
              className="object-cover rounded-lg"
              alt={imgAlt}
              quality={100}
            />
          </div>

          <div className="rounded-lg bg-gradient-to-t from-black opacity-60 top-0 left-0 absolute w-full min-h-full z-20 transition-all hover:from-black hover:opacity-0"></div>

          <section className="absolute z-20 bottom-3 left-3 text-zinc-300">
            <div>
              <p className="font-bold">${price}</p>
              <h5 className="text-sm">{location}</h5>
            </div>
          </section>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedCard;
