import Image from "next/image";
import Link from "next/link";
import { GhostButton } from "../../Utils/GhostButton";

const FeaturedCard = ({ propertyFields }) => {
  const { id, thumbnail, price, location } = propertyFields;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const imgSrc = `https:${thumbnail.fields.file.url}`;
  const link = `/properties/${id}`;
  const imgAlt = "";
  return (
    <Link href={link} passHref>
      <article className="cursor-pointer">
        <div className="relative w-full h-[324px]">
          <div className="absolute w-full h-full flex justify-center items-center -z-20">
            Loading!
          </div>
          <div className="relative w-full h-full">
            <Image
              src={imgSrc}
              layout="fill"
              className="object-cover rounded"
              alt={imgAlt}
              quality={100}
            />
          </div>

          <div className="rounded bg-gradient-to-t from-black opacity-60 top-0 left-0 absolute w-full min-h-full z-20 transition-all hover:from-black hover:opacity-0"></div>

          <section className="absolute z-20 bottom-3 left-3 text-zinc-300">
            <div>
              <p className="font-bold">{formatter.format(price)}</p>
              <p className="text-sm">{location}</p>
            </div>
          </section>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedCard;
