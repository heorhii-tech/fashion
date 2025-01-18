import React from "react";
import { SECTION_HEADER_CONFIG, BrandsSliderConfig } from "@/components/common/constants";
import { SectionHeader } from "@/components/sections/index";
import { useLayout } from "@/shared/layout/hooks/index";
import { BrandsSlider } from "@/components/sliders/index";

export const HomePage: React.FC = () => {
  const { isMobile } = useLayout();
  return (
    <>
      <div className="container">
        <SectionHeader config={SECTION_HEADER_CONFIG} isMobile={isMobile} />
      </div>

      <BrandsSlider config={BrandsSliderConfig} />
    </>
  );
};
