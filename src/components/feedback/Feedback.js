import React from "react";
import "./feedback.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Feedback = () => {
  return (
    <Swiper
      className="feedback"
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      autoplay={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
    >
      <SwiperSlide className="feedback-main">
        <div className="feedback-text">
          <h3>FEEDBACK</h3>
          <h1>
            Exclusive restaurant in <span>Bangladesh</span> , the ultimate way
            to get amazing food from the best chefs in the city. Great
            atmosphere included.
          </h1>
        </div>
      </SwiperSlide>

      <SwiperSlide className="feedback-main">
        <div className="feedback-text">
          <h3>FEEDBACK</h3>
          <h1>
            Exclusive restaurant in <span>Bangladesh</span> , the ultimate way
            to get amazing food from the best chefs in the city. Great
            atmosphere included.
          </h1>
        </div>
      </SwiperSlide>

      <SwiperSlide className="feedback-main">
        <div className="feedback-text">
          <h3>FEEDBACK</h3>
          <h1>
            Exclusive restaurant in <span>Bangladesh</span> , the ultimate way
            to get amazing food from the best chefs in the city. Great
            atmosphere included.
          </h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Feedback;
