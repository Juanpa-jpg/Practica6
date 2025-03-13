const Carousel = () =>{
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable:true}}
        autoplay={{delay:3000}}></Swiper>
    <SwiperSlide>
        <img src="diapositiva1.jpg" alt="Slide 1" className="slide"/>
    </SwiperSlide>
};
export default Carousel;