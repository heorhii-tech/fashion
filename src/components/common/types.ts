export interface SectionHeaderConfig {
  img: string;
  tittle: string[];
  subtitle: string;
  butttonTitle: string;
  starIcon:string
}

export interface BrandSliderProps {
  brandImages: string[];
}
export interface NewArrivalCardsInfo {
  title: string;
  description: string;
  image: string;
  arrowImage: string;
}

export interface NewArrivalsConfig {
  title: string;
  cards: NewArrivalCardsInfo[];
}
export interface PayDayConfig {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  postscriptum: string;
  starIcon: string;
  buttonTitle: string;
}
export interface YoungsFavouriteCardsInfo {
  title: string;
  description: string;
  image: string;
  arrowImage: string;
}
export interface YoungsFavouriteConfig {
  title: string;
  cards: YoungsFavouriteCardsInfo[];
}
export interface DownloadAppConfig {
  title: string;
  description: string;
  appStoreImage: string;
  playStoreImage: string;
  mobileAppImage: string;
}
export interface SubscriptionConfig {
  title: string;
  description: string;
  placeholder: string;
  buttonTitle: string;
}
