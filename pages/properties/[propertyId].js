import { createClient } from "contentful";
import Head from "next/head";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaBath, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "../../components/Utils/Button";

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
});

export async function getStaticPaths() {
  const propertyRes = await client.getEntries({ content_type: "property" });
  const paths = propertyRes.items.map((item) => {
    return {
      params: { propertyId: item.fields.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const currentProperty = await client.getEntries({
    content_type: "property",
    "fields.id": parseInt(params.propertyId),
  });

  return {
    props: { property: currentProperty.items[0] },
  };
}

const PropertyDetails = ({ property }) => {
  const {
    title,
    description,
    price,
    location,
    area,
    rooms,
    floors,
    thumbnail,
    carouselPics,
  } = property.fields;
  const thumbSrc = `http:${thumbnail.fields.file.url}`;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formattedPrice = formatter.format(price);

  return (
    <>
      <Head>
        <title>Comfystates</title>
      </Head>

      <div className="min-h-screen container pt-20 px-4 grid lg:max-w-[85%] xl:grid-rows-1 xl:grid-cols-2">
        <Swiper
          pagination={{
            type: "bullets",
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-96 w-full md:h-[512px] md:w-[768px] xl:h-[85vh] xl:w-full"
        >
          <SwiperSlide>
            <Image
              className="rounded-2xl object-cover"
              src={thumbSrc}
              alt=""
              layout="fill"
            />
          </SwiperSlide>
          {carouselPics?.map((pic) => {
            return (
              <SwiperSlide key={pic.fields.title}>
                <Image
                  className="rounded-2xl object-cover"
                  src={`http:${pic.fields.file.url}`}
                  alt=""
                  layout="fill"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <section className="p-2 pt-6 xl:px-6 flex flex-col">
          <p className="font-bold text-blue-600 text-lg lg:text-xl">
            {formattedPrice}
          </p>
          <h4 className="my-2 font-bold tracking-normal text-xl lg:text-2xl xl:text-3xl">
            {title}
          </h4>
          <p className="text-lg lg:text-xl flex gap-2 items-center text-blue-600">
            <FaMapMarkerAlt />
            {location}
          </p>

          <section>
            <h5 className="font-bold mt-4 text-xl">Features:</h5>
            <p>
              Area: {area}m<sup>2</sup>
            </p>
            <p>Floors: {floors}</p>
            <p>Bedrooms: {rooms}</p>
            <p>Bathroom(s): {floors}</p>
            <p>Kitchen(s): {floors}</p>
          </section>

          <section className="mb-4">
            <h5 className="font-bold mt-4 text-xl">Description:</h5>
            <p>{description}</p>
          </section>

          <Button href="mailto:khaninshal@hotmail.com">Contact Now</Button>
          {/* <p className="mt-4 text-lg lg:text-xl">{description}</p> */}
        </section>
      </div>
    </>
  );
};

export default PropertyDetails;
