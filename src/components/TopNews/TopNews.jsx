import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TopNews.scss";
import { useLocalization } from "../../hooks/useLocalization";
import { Link } from "react-router-dom";

const TopNews = ({ news }) => {
  const [lang] = useLocalization();
  return (
    <div className="topNews">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {news &&
          news.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link to={'/details/'  + lang + '/' + item.id}>
                <div
                  style={{ backgroundImage: `url(${item.image_url})` }}
                  className="topNews__slideImg"
                >
                  <div className="topNews__textContent">
                    <p>{item.title}</p>
                  </div>
                </div>
              </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default TopNews;
