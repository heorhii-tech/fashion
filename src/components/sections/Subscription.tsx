import React from "react";
import { SubscriptionConfig } from "@/components/common/types";
import { PrimaryButton } from "@/shared/buttons/common-buttons/index";
export const Subscription: React.FC<{ config: SubscriptionConfig }> = ({
  config,
}) => {
  return (
    <section className="section-subscription">
      <div className="container">
        <div className="section-subscription__wrapper">
          <h2 className="section-subscription__header-title">{config.title}</h2>
          <p className="section-subscription__header-description">
            {config.description}
          </p>
          <form className="section-subscription__form">
            <input
              className="section-subscription__form-input"
              type="email"
              placeholder={config.placeholder}
            />
            <PrimaryButton title={config.buttonTitle} modificator="section-subscription__footer-button" />
          </form>
        </div>
      </div>
    </section>
  );
};
