import React from "react";
import { YoungsFavouriteConfig } from "@/components/common/types";
import { SectionTitle } from "@/components/titels/index";
import { ProductCard } from "@/components/cards/index";
interface YoungsFavouriteProps {
  config: YoungsFavouriteConfig;
  mediaQueries:{isMobile:boolean,isTablet:boolean};
}
export const YoungsFavourite: React.FC<YoungsFavouriteProps> = ({
  config,
  mediaQueries
}) => {
  const {isMobile,isTablet} = mediaQueries;
  return (
  
    <section className="section-youngs-favourite">
      <div className="container">
      <SectionTitle
        title={config.title}
        className="section-youngs-favourite__title"
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
          />
        ))}
      </div>
      </div>
    </section>
  );
};
