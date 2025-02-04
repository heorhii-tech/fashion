import React from "react";
import { SectionHeaderConfig } from "@/components/common/types";
import { PrimaryButton } from "@/shared/buttons/common-buttons/index";
interface SectionHeaderProps {
  config: SectionHeaderConfig;
  mediaQueries: { isMobile: boolean; isTablet: boolean };
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  config,
  mediaQueries,
}) => {
  const { isMobile, isTablet } = mediaQueries;
  return (
    <section className="section-header">
      <div
        className="section-header__wrapper"
        style={!isMobile ? { backgroundImage: `url(${config.img})` } : {}}
      >
        <img
          src={config.starIcon}
          className="section-header__star section-header__star_top-left"
        />
        <img
          src={config.starIcon}
          className="section-header__star section-header__star_top-center"
        />
        <img
          src={config.starIcon}
          className="section-header__star section-header__star_top-right"
        />
      
        <div className="section-header__content">
          <div className="section-header__title">
            <span
              className="section-header__title-item block-rotate"
              style={{ backgroundColor: "white" }}
            >
              {config.tittle[0]}
            </span>
            <span className="section-header__title-item">
              {config.tittle[1]}
            </span>
            <span
              className="section-header__title-item block-rotate"
              style={{ backgroundColor: "#e6c744" }}
            >
              {config.tittle[2]}
            </span>
            <span className="section-header__title-item">
              {config.tittle[3]}
            </span>
          </div>
          <div className="section-header__subtitle">
            <p className="section-header__subtitle-text">{config.subtitle}</p>
          </div>
          <PrimaryButton
            modificator="section-header__button"
            title={config.butttonTitle}
          />
        </div>
      </div>
    </section>
  );
};
