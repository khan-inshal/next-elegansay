import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { BiBath, BiArea } from "react-icons/bi";

const PropertiesCard = ({ propertyFields }) => {
  const { id, title, price, location, area, rooms, floors, thumbnail } =
    propertyFields;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const imgSrc = `https:${thumbnail.fields.file.url}`;
  const link = `/properties/${id}`;
  const imgAlt = "";
  return (
    <Link href={link} passHref>
      <article className="w-full cursor-pointer transition-all hover:-translate-y-1 hover:drop-shadow-lg hover:text-brand-button">
        <div className="relative h-64">
          <Image
            className="rounded-t object-cover"
            src={imgSrc}
            alt={imgAlt}
            layout="fill"
          />
          <section className="absolute z-20 top-1 left-1 bg-white rounded p-2 text-black">
            <div>
              <p className="text-sm flex items-center gap-1">
                <FaMapMarkerAlt className="text-lg" /> {location}
              </p>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-b-lg w-full px-4 py-2">
          <h4 className="mb-1 font-bold text-xl tracking-normal">{title}</h4>
          <p>{formatter.format(price)}</p>
        </section>
      </article>
    </Link>
  );
};

export default PropertiesCard;
