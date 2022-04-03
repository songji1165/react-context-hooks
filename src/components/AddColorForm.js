import React, {useState} from 'react';
import {useInput} from "../hooks/input-hooks";
import {useColors} from "../hooks/color-hooks";

export default function AddColorForm({onNewColor = f=>f}){
    const {addColor} = useColors();
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000");
    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value,colorProps.value);
        resetColor();
        resetTitle();
    }

    return(
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                required
            />
            <input
                {...colorProps}
                type="text"
                required
            />
            <button>ADD</button>
        </form>
    )
}