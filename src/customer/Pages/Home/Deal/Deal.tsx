import DealCard from "./DealCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { Deal as DealInterface, Home as HomeInterface } from "../../../../Api/models";

interface DealSliderProps {
  homePage: HomeInterface;
}
const DealSlider: React.FC<DealSliderProps> = ({ homePage }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Large screen
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" py-5 lg:px-20">
      <div className="slide-container  ">
        <Slider {...settings}>
          {homePage.deals?.map((item: DealInterface) => (
            <div className="border flex flex-col items-center justify-center">
              <DealCard deal={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DealSlider;
