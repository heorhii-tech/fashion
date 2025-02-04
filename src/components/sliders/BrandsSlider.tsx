import React from "react";
import { BrandSliderProps } from "@/components/common/types";

interface BrandsSliderProps {
  config: BrandSliderProps;
}

export const BrandsSlider = ({ config }: BrandsSliderProps) => {
  const { brandImages } = config;

  return (
    <div className="brands-slider ">
      <div className="brands-slider__container">
        
        {[...brandImages, ...brandImages].map((image, index) => (
          <img key={index} className="brands-slider__image" src={image} alt="" />
        ))}
      </div>
    </div>
  );
};
