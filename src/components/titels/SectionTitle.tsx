import React from "react";
import circleImg from "../../../assests/icons/circle.svg"
interface SectionTitleProps {
    title: string
    className?: string
    circleClassName?: string
}
export const SectionTitle:React.FC<SectionTitleProps> = ({title,className,circleClassName}) => {
    return (
        
        <div className={className}>
            <h2 className="font-black text-[32px] 2xl:text-[34px]"> <span className="relative">
                {title}
                <img className={circleClassName} src={circleImg} alt="" />
            </span></h2>
        </div>
    )
}   