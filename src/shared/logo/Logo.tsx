import React from "react";
import logo from "../../../assests/icons/logo.svg";
import logoWhite from "../../../assests/icons/logo-white.svg";
interface LogoProps {
  typeWhite: boolean;
}
const Logo = ({ typeWhite }: LogoProps) => {
  return (
    <div className="logo-container">
      <img src={typeWhite === true ? logoWhite : logo} alt="" />{" "}
      <h2 style={{ color: typeWhite === true ? "white" : "black" }}>
        FASHION
      </h2>
    </div>
  );
};

export default Logo;
