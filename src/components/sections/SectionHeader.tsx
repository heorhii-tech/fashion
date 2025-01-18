import React from "react";
import { SectionHeaderConfig } from "@/components/common/types";
import { PrimaryButton } from "@/shared/buttons/common-buttons/index";
interface SectionHeaderProps {
    config:SectionHeaderConfig;
    isMobile?:boolean;
}
export const SectionHeader:React.FC<SectionHeaderProps> = ({config,isMobile}) => {
    return (
        <section className="section-header">
                <div className="section-header__content"  style={!isMobile ? {backgroundImage:`url(${config.img})`} : {}}>
                   
                   <div className="section-header__title">
                     <span className="section-header__title-item block-rotate" style={{backgroundColor:"white"}}>{config.tittle[0]}</span>
                     <span className="section-header__title-item">{config.tittle[1]}</span>
                     <span className="section-header__title-item block-rotate" style={{backgroundColor:"#EBD96B"}}>{config.tittle[2]}</span>
                     <span className="section-header__title-item">{config.tittle[3]}</span>
                    </div>
                    <div className="section-header__subtitle">
                        <p className="section-header__subtitle-text">{config.subtitle}</p>
                    </div>
                   <PrimaryButton modificator="section-header__button" title={config.butttonTitle}/>
                </div>
               
            </section>
    );
};
