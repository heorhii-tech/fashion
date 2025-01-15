import React from "react";
interface ButtonProps {
    onClick: () => void;
    open: boolean;
}
import { MenuOutlined,CloseOutlined } from "@ant-design/icons";

const BurgerButton:React.FC<ButtonProps> = ({onClick,open}) => {

  if(!open){
    return (
      <MenuOutlined style={{fontSize:"36px", position:"relative", zIndex:"40"}} onClick={onClick} />
    );
  }
  return (
    <CloseOutlined style={{color:"black",fontSize:"36px"}} onClick={onClick} />
  );
};  

export default BurgerButton;