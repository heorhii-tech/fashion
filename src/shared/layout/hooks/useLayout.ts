import { useMediaQuery } from "@uidotdev/usehooks";
export const useLayout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
    return {isMobile};
};

