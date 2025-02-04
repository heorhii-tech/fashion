import React from "react";
import { NewArrivalsConfig } from "@/components/common/types";
import { SectionTitle } from "@/components/titels/index";
import { ProductCard } from "@/components/cards/index";

interface NewArrivalsProps {
  config: NewArrivalsConfig;
  mediaQueries:{isMobile:boolean,isTablet:boolean};
}
export const NewArrivals: React.FC<NewArrivalsProps> = ({
  config,
  mediaQueries
}) => {
  const {isMobile,isTablet} = mediaQueries;
  return (
    <section className="section-new-arrivals">
      <SectionTitle
        title={config.title}
        className="new-arrivals-title"
        circleClassName="new-arrivals-circle"
      />
      <div className="new-arrivals-cards">
        {config.cards.map((card) => (
          <ProductCard
            title={card.title}
            description={card.description}
            image={card.image}
            arrowImage={card.arrowImage}
            isTablet={isTablet}
            key={card.title}
          />
        ))}
      </div>
    </section>
  );
};
