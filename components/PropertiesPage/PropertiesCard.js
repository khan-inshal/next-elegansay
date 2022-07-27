import Image from "next/image";
import Link from "next/link";
import { FaBath, FaBed, FaMapMarkerAlt } from "react-icons/fa";
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
      <article className="shadow-md border border-gray-300 rounded-lg w-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl hover:text-brand-button hover:border-blue-500">
        <div className="relative h-64 m-3">
          <Image
            className="rounded-lg object-cover"
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

        <section className="w-full px-4 py-2">
          <h4 className="font-bold text-xl tracking-normal">{title}</h4>
          <p className="mb-2">{formatter.format(price)}</p>

          <section className="pt-4 pb-2  border-t border-t-gray-300 flex items-center gap-2 text-sm">
            <div className="bg-gray-100 border border-gray-300 rounded-full ml-auto p-2 text-blue-600">
              <FaBath className="ml-auto" />
            </div>
            <p className=" text-gray-500">{floors} bath</p>

            <div className="bg-gray-100 border border-gray-300 rounded-full ml-auto p-2 text-blue-600">
              <FaBath className="ml-auto" />
            </div>
            <p className=" text-gray-500">{rooms} rooms</p>

            <div className="bg-gray-100 border border-gray-300 rounded-full ml-auto p-2 text-blue-600">
              <FaBath className="ml-auto" />
            </div>
            <p className="mr-auto text-gray-500">
              {area} m<sup>2</sup>
            </p>
          </section>
        </section>
      </article>
    </Link>
  );
};

export default PropertiesCard;
