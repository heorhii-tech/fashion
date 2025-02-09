import React from "react";
interface ButtonProps {
  onClick: () => void;
  open: boolean;
}
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const BurgerButton: React.FC<ButtonProps> = ({ onClick, open }) => {

    return (
      /*  <MenuOutlined
        style={{
          fontSize: "36px",
          position: "relative",
          zIndex: "40",
          borderRadius: "10%",
          backgroundColor: "#e6c744",
          padding: "5px",
        }}
        onClick={onClick}
      /> */
      <svg
        className={` bars ${open ? "active" : ""}`}
        viewBox="0 0 100 100"
        fill="none"
        id="navButton"
        onClick={onClick}
      >
        <path
          className="line top pointer-events-none"
          stroke="currentcolor"
          d="m 29,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
        ></path>
        <path
          className="line middle pointer-events-none"
          stroke="currentcolor"
          d="m 69,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
        ></path>
        <path
          className="line bottom pointer-events-none"
          stroke="currentcolor"
          d="m 68.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
        ></path>
      </svg>
    );
  

};

export default BurgerButton;
