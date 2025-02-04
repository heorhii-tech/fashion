import React from "react";
import {
  SECTION_HEADER_CONFIG,
  BrandsSliderConfig,
  NEW_ARRIVALS_CONFIG,
  PAYDAY_CONFIG,
  YONGS_FAVOURITE_CONFIG,
  DOWNLOAD_APP_CONFIG,
  SUBSCRIPTION_CONFIG,
} from "@/components/common/constants";
import {
  SectionHeader,
  NewArrivals,
  PayDay,
  YoungsFavourite,
  DownloadApp,
  Subscription,
} from "@/components/sections/index";
import { useLayout } from "@/shared/layout/hooks/index";
import { BrandsSlider } from "@/components/sliders/index";

export const HomePage: React.FC = () => {
  const { MEDIA_QUERIES,  } = useLayout();
  return (
    <>
      <div className="container">
        <SectionHeader config={SECTION_HEADER_CONFIG} mediaQueries={MEDIA_QUERIES} />
      </div>

      <BrandsSlider config={BrandsSliderConfig} />
      <div className="container">
        <NewArrivals config={NEW_ARRIVALS_CONFIG} mediaQueries={MEDIA_QUERIES} />
      </div>
      <PayDay config={PAYDAY_CONFIG} mediaQueries={MEDIA_QUERIES} />
      <div className="container">
        <YoungsFavourite config={YONGS_FAVOURITE_CONFIG} mediaQueries={MEDIA_QUERIES} />
      </div>
      <div className="container">
        <DownloadApp config={DOWNLOAD_APP_CONFIG} />
      </div>
      <Subscription config={SUBSCRIPTION_CONFIG} />
    </>
  );
};
