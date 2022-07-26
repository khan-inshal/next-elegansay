import Image from "next/image";
import Link from "next/link";

const PropertiesCard = ({ propertyFields }) => {
  const { id, title, price, location, area, rooms, floors, thumbnail } =
    propertyFields;

  const imgSrc = `https:${thumbnail.fields.file.url}`;
  const link = `/properties/${id}`;
  const imgAlt = "";
  return (
    <Link href={link} passHref>
      <article className="bg-gray-100 rounded-r-lg drop-shadow-md min-h-[144px] grid grid-cols-6 transition-all cursor-pointer md:grid-cols-1 md:grid-rows-3 md:rounded-lg md:my-0 md:hover:-translate-x-1 md:hover:-translate-y-1">
        <div className="relative col-span-2 md:row-span-2">
          <Image
            className="rounded-l-lg object-cover md:rounded-bl-none md:rounded-t-lg"
            src={imgSrc}
            alt={imgAlt}
            layout="fill"
          />
        </div>

        <section className="col-span-4 px-4 py-2 flex flex-col">
          <p className="text-sm md:text-base">{location}</p>
          <h4 className="font-bold md:text-lg">{title}</h4>
          <p className="mb-4 font-semibold text-green-600">${price} USD</p>

          <div className="mt-auto flex gap-4">
            <p>
              Area: {area} m<sup>2</sup>
            </p>
            <p>Rooms: {rooms}</p>
            <p>Floors: {floors}</p>
          </div>
        </section>
      </article>
    </Link>
  );
};

export default PropertiesCard;
