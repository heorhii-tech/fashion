import React from "react";
import { BrandSliderProps } from "@/components/common/types";

interface BrandsSliderProps {
  config: BrandSliderProps;
}

export const BrandsSlider = ({ config }: BrandsSliderProps) => {
  const { brandImages } = config;

  return (
    // <div className="brands-slider ">
    //   <div className="brands-slider__container">

    //     {[...brandImages, ...brandImages].map((image, index) => (
    //       <img key={index} className="brands-slider__image mix-blend-multiply shrink-0" src={image} alt="" />
    //     ))}
    //   </div>
    // </div>\
    <section className="bg-primary-yellow mt-[40px] mb-[80px]">
      <div className="slider-container">
        <div className="bg-primary-yellow  flex items-center shrink-0 gap-[5px] md:gap-[50px] 2xl:gap-[100px] animate-[slideSmall_15s_linear_infinite] md:animate-[slideMedium_15s_linear_infinite] 2xl:animate-[slideLarge_15s_linear_infinite]">
          <img
            src={brandImages[0]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[60px] md:w-auto lg:w-[100px] xl:w-auto"
          />
          <img
            src={brandImages[1]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[105px] md:w-auto lg:w-[145px] xl:w-auto"
          />
          <img
            src={brandImages[2]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[125px] md:w-auto lg:w-[165px] xl:w-auto"
          />
          <img
            src={brandImages[3]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[180px] md:w-auto lg:w-[220px] xl:w-auto"
          />
          <img
            src={brandImages[4]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[75px] md:w-auto lg:w-[115px] xl:w-auto"
          />
          <img
            src={brandImages[5]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[115px] md:w-auto lg:w-[155px] xl:w-auto"
          />
          <img
            src={brandImages[0]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[60px] md:w-auto lg:w-[100px] xl:w-auto"
          />
          <img
            src={brandImages[1]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[105px] md:w-auto lg:w-[145px] xl:w-auto"
          />
          <img
            src={brandImages[2]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[125px] md:w-auto lg:w-[165px] xl:w-auto"
          />
          <img
            src={brandImages[3]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[180px] md:w-auto lg:w-[220px] xl:w-auto"
          />
          <img
            src={brandImages[4]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[75px] md:w-auto lg:w-[115px] xl:w-auto"
          />
          <img
            src={brandImages[5]}
            alt=""
            className="mix-blend-multiply shrink-0 w-[115px] md:w-auto lg:w-[155px] xl:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
