import React from "react";
interface CardProps {
  title: string;
  description: string;
  image: string;
  arrowImage: string;
  isTablet?: boolean;
}
export const ProductCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  arrowImage,
  isTablet,
}) => {
  return (
    <div className="product-card">
    <div className="product-card__image">
      <img src={image} alt="" />
    </div>
    <div className="product-card__footer">
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__description">{description}</p>
      </div>
     {!isTablet &&  <div className="product-card__arrow">
        <img src={arrowImage} alt="" />
      </div>}
    </div>
  </div>
  );
};
