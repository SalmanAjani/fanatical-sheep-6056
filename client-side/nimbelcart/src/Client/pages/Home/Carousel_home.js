import React from "react";
// Import Swiper React components
import {Box, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '../../../Assets/image1.jpeg'
import image2 from '../../../Assets/image2.jpeg'
import image3 from '../../../Assets/image3.jpeg'
import image4 from '../../../Assets/image4.jpeg'
import image5 from '../../../Assets/image5.jpeg'
import image6 from '../../../Assets/image6.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carousel_home({data}) {
  console.log(data)
  return (
    <Box mt="1em">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        effect="fade"
      >
       <SwiperSlide><Image  className="carousel"src={image1} alt="image1"  /></SwiperSlide>
       <SwiperSlide><Image  className="carousel"src={image2} alt="image1"  /></SwiperSlide>
       <SwiperSlide><Image  className="carousel"src={image3} alt="image1"  /></SwiperSlide>
        <SwiperSlide><Image className="carousel" src={image4} alt="image3" /></SwiperSlide>
        <SwiperSlide><Image className="carousel" src={image5} alt="image4" /></SwiperSlide>
        <SwiperSlide><Image className="carousel" src={image6} alt="image4" /></SwiperSlide>
      </Swiper>
    </Box>
  );
}
