import { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
export const useLayout = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        // Скролл вниз — убираем тень
        setHasShadow(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > 0) {
        // Скролл вверх и не в самом верху — добавляем тень
        setHasShadow(true);
      } else if (currentScrollY === 0) {
        // В самом верху — убираем тень
        setHasShadow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const MEDIA_QUERIES = {
    isMobile,
    isTablet,
  };
  return { MEDIA_QUERIES,hasShadow };
};
