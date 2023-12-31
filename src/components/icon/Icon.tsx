import React from 'react';
import iconSprite from '@assets/images/svg/svg-sprite.svg'

type IconPropsType = {
    iconId?: number
    IconTitle: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "24"} height={props.height || "24"} viewBox={props.viewBox || "0 0 24 24"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.IconTitle}`}/>
        </svg>
    );
};