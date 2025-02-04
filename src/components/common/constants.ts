import {
  SectionHeaderConfig,
  NewArrivalsConfig,
  NewArrivalCardsInfo,
  PayDayConfig,
  YoungsFavouriteConfig,
  YoungsFavouriteCardsInfo,
  DownloadAppConfig,
  SubscriptionConfig,
} from "./types";
import SectionHeaderImage from "../../../assests/images/section-header-image.webp";
import starHeader from "../../../assests/icons/header-section-star.svg"
import brandImage1 from "../../../assests/images/Rectangle 36.png";
import newArrivalImage1 from "../../../assests/images/new-arrivals-img-1.png";
import newArrivalImage2 from "../../../assests/images/new-arrivals-img-2.png";
import newArrivalImage3 from "../../../assests/images/new-arrivals-img-3.png";
import newArrivalsArrovImage from "../../../assests/icons/new-arrivals-arrow.svg";
import PayDayImg from "../../../assests/images/pay-day-image.webp";
import starPayDayIcon from "../../../assests/icons/star-payday-icon.svg";
import youngsFavouriteImage1 from "../../../assests/images/youngs-favourite-image-1.png";
import youngsFavouriteImage2 from "../../../assests/images/youngs-favourite-image-2.png";
import appStoreImage from "../../../assests/images/appStoreImage.png";
import playStoreImage from "../../../assests/images/playStoreImage.png";
import mobileAppImage from "../../../assests/images/mobile-app-image.jpg";

export const SECTION_HEADER_CONFIG: SectionHeaderConfig = {
  img: SectionHeaderImage,
  tittle: ["LET'S", "EXPLORE", "UNIQUE", "CLOTHES"],
  subtitle: "Live for Influential and Innovative fashion!",
  butttonTitle: "Shop Now",
  starIcon: starHeader
};

export const BrandsSliderConfig = {
  brandImages: [
    brandImage1,
    brandImage1,
    brandImage1,
    brandImage1,
    brandImage1,
  ],
};
export const NEW_ARRIVALS_CARDS_INFO: NewArrivalCardsInfo[] = [
  {
    title: "Hoodies & Sweetshirts",
    description: "Explore Now!",
    image: newArrivalImage1,
    arrowImage: newArrivalsArrovImage,
  },
  {
    title: "Coats & Parkas",
    description: "Explore Now!",
    image: newArrivalImage2,
    arrowImage: newArrivalsArrovImage,
  },
  {
    title: "Tees & T-Shirt",
    description: "Explore Now!",
    image: newArrivalImage3,
    arrowImage: newArrivalsArrovImage,
  },
];
export const NEW_ARRIVALS_CONFIG: NewArrivalsConfig = {
  title: "New Arrivals",
  cards: NEW_ARRIVALS_CARDS_INFO,
};

export const PAYDAY_CONFIG: PayDayConfig = {
  image: PayDayImg,
  title: "PAYDAY",
  subtitle: "SALE NOW",
  description:
    "Spend minimal $100 get 30% off voucher code for your next purchase",
  highlight: "1 June - 10 June 2025",
  postscriptum: "*Terms and conditions apply",
  starIcon: starPayDayIcon,
  buttonTitle: "SHOP NOW",
};
export const YONGS_FAVOURITE_CARDS_INFO: YoungsFavouriteCardsInfo[] = [
  {
    image: youngsFavouriteImage1,
    title: "Trending on instagram",
    description: "Explore Now!",
    arrowImage: newArrivalsArrovImage,
  },
  {
    image: youngsFavouriteImage2,
    title: "All Under $40",
    description: "Explore Now!",
    arrowImage: newArrivalsArrovImage,
  },
];
export const YONGS_FAVOURITE_CONFIG: YoungsFavouriteConfig = {
  title: "Young’s Favourite",
  cards: YONGS_FAVOURITE_CARDS_INFO,
};
export const DOWNLOAD_APP_CONFIG: DownloadAppConfig = {
  title: "DOWNLOAD APP & GET THE VOUCHER!",  
  description: "Get 30% off for first transaction using Rendovision mobile app for now.",
  appStoreImage: appStoreImage,
  playStoreImage: playStoreImage,
  mobileAppImage: mobileAppImage
};

export const SUBSCRIPTION_CONFIG: SubscriptionConfig = {
  title: "JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO",
  description: "Type your email down below and be young wild generation",
  placeholder: "Email address",
  buttonTitle: "SEND",
}