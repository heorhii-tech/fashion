import React from "react";
import { PrimaryButton } from "@/shared/buttons/common-buttons/index";
import { PayDayConfig } from "@/components/common/types";

interface PayDayProps {
  config: PayDayConfig;
  mediaQueries: { isMobile: boolean; isTablet: boolean };
}

export const PayDay: React.FC<PayDayProps> = ({ config, mediaQueries }) => {
  const { isMobile, isTablet } = mediaQueries;
  return (
    <section className="payday ">
      <div className="absolute md:block w-1/2 inset-y-0 left-0 bg-[#ffec62] -z-10"></div>
      <div className="absolute w-full md:w-1/2 inset-y-0 right-0 bg-gradient-to-b from-[#f9df56] via-[#f5d951] to-[#e7cb44] -z-10"></div>
      <div
        className="payday__wrapper container"
        style={!isMobile ? { backgroundImage: `url(${config.image})` } : {}}
      >
        <div className="payday__content">
          <img src={config.starIcon} className="payday__star payday__star_top-left" />
          <img src={config.starIcon} className="payday__star payday__star_top-center" />
          <img src={config.starIcon} className="payday__star payday__star_bottom-left" />
          <img src={config.starIcon} className="payday__star payday__star_bottom-center" />
          <div className="payday__header">
            <h2 className="payday__title">
              <span className="payday__title-decor">
                <span className="payday__title-text">{config.title}</span>
              </span>
              <span className="payday__subtitle">{config.subtitle}</span>
            </h2>
          </div>
          <p className="payday__description">{config.description}</p>
          <p className="payday__highlight">{config.highlight}</p>
          <p className="payday__postscriptum">{config.postscriptum}</p>
          <PrimaryButton modificator={`payday__button`} title={config.buttonTitle} />
        </div>
      </div>
    </section>
  );
};