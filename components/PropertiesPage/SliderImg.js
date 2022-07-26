import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderImg = ({ imgSrc, imgAlt }) => {
  return (
    <SwiperSlide>
      <Image className="object-cover" src={imgSrc} alt={imgAlt} layout="fill" />
    </SwiperSlide>
  );
};

export default SliderImg;
