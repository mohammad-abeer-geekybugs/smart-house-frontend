import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export const SliderCarousal = ({ DATA }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: false,
    speed: 3500,
    autoplaySpeed: 500,
    arrow: false,
    cssEase: "linear",
  };
  return (
    <>
      {/* Wide Screen view */}
      <Slider {...settings}>
        {!!DATA &&
          DATA.map((item, keys) => {
            return (
              <div key={keys}>
                <Image
                  src={item.image}
                  width={keys === 4 ? "140px" : "183px"}
                  height={keys === 4 ? "40px" : "90px"}
                  alt={keys}
                  style={
                    keys === 4
                      ? {
                          margin: "auto",
                          alignItems: "center",
                          paddingTop: "20px",
                        }
                      : { margin: "auto", alignItems: "center" }
                  }
                />
              </div>
            );
          })}
      </Slider>
    </>
  );
};
