import React from "react";
interface PrimaryButtonProps {
  modificator?: string;
  title: string;
}
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  modificator,
  title,
}) => {
  console.log(modificator)
  return <button className={`primary-button ${modificator}`}>{title}</button>;
};
