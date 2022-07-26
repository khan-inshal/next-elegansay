import { createClient } from "contentful";
import Head from "next/head";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  console.log(carouselPics);
  return (
    <>
      <Head>
        <title>Comfystates</title>
      </Head>

      <div className="container pt-20 px-4 grid grid-rows-2 lg:max-w-[85%]">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="min-h-[50vh] w-full lg:min-h-[70vh]"
        >
          <SwiperSlide>
            <Image
              className="object-cover"
              src={thumbSrc}
              alt=""
              layout="fill"
            />
          </SwiperSlide>
          {carouselPics?.map((pic) => {
            return (
              <SwiperSlide key={pic.fields.title}>
                <Image
                  className="object-cover"
                  src={`http:${pic.fields.file.url}`}
                  alt=""
                  layout="fill"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <section className="px-4 py-2 flex flex-col">
          <p className="text-lg md:text-2xl lg:text-3xl">{location}</p>
          <h4 className="font-bold text-lg lg:text-4xl">{title}</h4>
          <p className="mb-4 font-semibold text-2xl text-green-600 lg:text-3xl">
            ${price} USD
          </p>

          <div className="text-lg flex gap-4 lg:text-2xl">
            <p>
              Area: {area} m<sup>2</sup>
            </p>
            <p>Rooms: {rooms}</p>
            <p>Floors: {floors}</p>
          </div>

          <p className="mt-4 text-lg lg:text-xl">{description}</p>
        </section>
      </div>
    </>
  );
};

export default PropertyDetails;
