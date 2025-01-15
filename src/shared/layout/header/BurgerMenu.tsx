import React from "react";
import { BurgerMenuProps } from "./types";
import { Link } from "react-router-dom";

const BurgerMenu: React.FC<BurgerMenuProps> = ({ menuItems, onClose, isOpen }) => {
  return (
    <div className={`burger-menu ${isOpen ? "show" : ""}`}>
      <div className="burger-menu__content">
        <ul className="burger-menu__list">
          {menuItems.map((item) => (
            <li key={item.id} className="burger-menu__item">
              <Link onClick={onClose} to={item.path} className="burger-menu__link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
