import { useState, useEffect } from "react";
export const useHeader = () => {
    const showBurgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
    
        
        return () => {
          document.body.classList.remove("no-scroll");
        };
      }, [isMenuOpen]); 
      

    return {isMenuOpen, showBurgerMenu};
};