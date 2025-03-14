import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Carousel = () =>{
    return(
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable:true}}
        autoplay={{delay:3000}}>
        <SwiperSlide>
            <img src="NBA.png" alt="Slide 1" className="slide"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="NBAball.jpg" alt="Slide 2" className="slide"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="NBAcourt.png" alt="Slide 3" className="slide"/>
        </SwiperSlide>
    </Swiper>
    )
};
export default Carousel;