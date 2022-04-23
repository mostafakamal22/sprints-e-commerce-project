import React, { useContext, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import StoreContext from "../../../context/store/StoreContext";
import Spinner from "../../shared/Spinner";

const Carousel = () => {

  const { setAppData, store } = useContext(StoreContext)

  const [carouselData, setCarouselData] = useState([])
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)
    setAppData('carousels').then(() => {
      let data = []
      store.appData.carousels.map(item => {
        if (item.havelink === 1) {
          data.push(item.link)
        }
        return data
      })
      setCarouselData(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <Swiper
        className="mySwiper 2xl:max-w-[1300px] w-full h-[350px] lg:h-[450px] overflow-hidden"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-full object-cover object-center"
              src={item}
              alt="carousel element"
            ></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel
