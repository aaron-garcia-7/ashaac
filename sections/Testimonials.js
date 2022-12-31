import React, { useState, useEffect } from "react";
import Dots from "../components/imgComponents/Dots";
import Star from "../components/imgComponents/Star";
import styles from "../styles/Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import testimonials from "../data/testimonials";

const Testimonials = () => {
  SwiperCore.use([Pagination]);

  let [tabletSize, setTabletSize] = useState(false);

  useEffect(() => {
    let screenCheck = () =>
      window.innerWidth <= 768 ? setTabletSize(true) : setTabletSize(false);

    window.addEventListener("resize", screenCheck);

    return () => window.removeEventListener("resize", screenCheck);
  }, []);

  return (
    <section className={styles.testimonials}>
      <Swiper
        className={styles.swiperTool}
        modules={[A11y, Autoplay]}
        // autoplay={true}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        slidesPerView={tabletSize ? 1 : 3}
        initialSlide={1}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        speed={800}
      >
        {testimonials.map((obj) => (
          <SwiperSlide key={obj.id} className={styles.review}>
            {/* <blockquote>“{obj.review}”</blockquote> */}
            <blockquote>
              {obj.review}
              <span className={styles.quoteMark}>”</span>
            </blockquote>
            <div className={styles.bottom}>
              <h4>- {obj.name}</h4>
              {obj.stars === 5 && (
                <div className={styles.stars}>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              )}
              {obj.stars === 4 && (
                <div className={styles.stars}>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Dots half={true} color={"cool"} />
      <Dots half={true} color={"warm"} />
    </section>
  );
};

export default Testimonials;
