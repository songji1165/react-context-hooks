import React from 'react'
import Color from "./Color";
import {useColors} from "../../hooks/color-hooks";

export default function ColorList(){
    const {colors} = useColors();
    console.log("? co", colors);
    if(colors && !colors.length) return <div>No Colors Listed.</div>;
    return (
        <div className="color-list">
            {
                colors && colors.map(color => (
                    <Color
                        key={color.id}
                        {...color}
                    />
                ))
            }
        </div>
    )
}