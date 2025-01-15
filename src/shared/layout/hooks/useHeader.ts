import { useState } from "react";
export const useHeader = () => {
    const showBurgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return {isMenuOpen, showBurgerMenu};
};