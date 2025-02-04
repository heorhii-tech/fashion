import React from "react";
import { DownloadAppConfig } from "@/components/common/types";
interface DownloadAppProps {
  config: DownloadAppConfig;
}
export const DownloadApp: React.FC<DownloadAppProps> = ({ config }) => {
  return (
    <section className="section-download-app">
      <div className="section-download-app__wrapper">
        <div className="section-download-app__content">
          <div className="section-download-app__header">
            <h2 className="section-download-app__header-title">
              {config.title}
            </h2>
            <p className="section-download-app__header-description">
              {config.description}
            </p>
          </div>
          <div className="section-download-app__links">
            <img
              src={config.appStoreImage}
              alt="Download on the App Store"
              className="section-download-app__link-image"
            />
            <img
              src={config.playStoreImage}
              alt="GET IT ON Google Play"
              className="section-download-app__link-image"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center relative mt-[60px] md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="48 48 504 504"
            className="w-[50vw] md:w-[200px] lg:w-[240px] xl:w-[230px] 2xl:w-[310px] aspect-square absolute text-[#dbdbdb] animate-[wave-xxsmall_6s_linear_infinite_4s] md:animate-[wave-xsmall_6s_linear_infinite_4s] lg:animate-[wave-small_6s_linear_infinite_4s] xl:animate-[wave-medium_6s_linear_infinite_4s] 2xl:animate-[wave-large_6s_linear_infinite_4s]"
          >
            <path
              id="ellipsePath4"
              d="M 300,50 A 250,250 0 1,0 300,550 A 250,250 0 1,0 300,50"
              fill="none"
              stroke="currentcolor"
              stroke-width="2.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="48 48 504 504"
            className="w-[50vw] md:w-[200px] lg:w-[240px] xl:w-[230px] 2xl:w-[310px] aspect-square absolute text-[#dbdbdb] animate-[wave-xxsmall_6s_linear_infinite_2s] md:animate-[wave-xsmall_6s_linear_infinite_2s] lg:animate-[wave-small_6s_linear_infinite_2s] xl:animate-[wave-medium_6s_linear_infinite_2s] 2xl:animate-[wave-large_6s_linear_infinite_2s]"
          >
            <path
              id="ellipsePath4"
              d="M 300,50 A 250,250 0 1,0 300,550 A 250,250 0 1,0 300,50"
              fill="none"
              stroke="currentcolor"
              stroke-width="2.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="48 48 504 504"
            className="w-[50vw] md:w-[200px] lg:w-[240px] xl:w-[230px] 2xl:w-[310px] aspect-square absolute text-[#dbdbdb] animate-[wave-xxsmall_6s_linear_infinite] md:animate-[wave-xsmall_6s_linear_infinite] lg:animate-[wave-small_6s_linear_infinite] xl:animate-[wave-medium_6s_linear_infinite] 2xl:animate-[wave-large_6s_linear_infinite]"
          >
            <path
              id="ellipsePath4"
              d="M 300,50 A 250,250 0 1,0 300,550 A 250,250 0 1,0 300,50"
              fill="none"
              stroke="currentcolor"
              stroke-width="2.5"
            />
          </svg>

          <img
            src={config.mobileAppImage}
            alt=""
            className="z-10 rounded-[34px] h-auto w-[50vw] md:w-[180px] lg:w-[200px] xl:w-[240px] 2xl:w-[320px] outline outline-[#C2C8DA] outline-[10px] md:outline-[15px] lg:outline-[18px] 2xl:outline-[22px] drop-shadow-app hover:outline-[#e3d7a7] transition-all"
          />
        </div>
      </div>
    </section>
  );
};
