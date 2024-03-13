import iconSprite from '@assets/images/svg-sprite/svg-sprite.svg'
import React from "react";

export const Icon: React.FC<IconPropsType> = ({IconTitle, width, height, viewBox}) => {
    return (
        <svg width={width || "24"} height={height || "24"} viewBox={viewBox || "0 0 24 24"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${IconTitle}`}/>
        </svg>
    )
}

type IconPropsType = {
    iconId?: number
    IconTitle: string
    width?: string
    height?: string
    viewBox?: string
}