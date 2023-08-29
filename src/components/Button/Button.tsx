import React, { useEffect, useRef, useState } from "react"
import { ButtonProps } from "./Button.types"
import "./Button.scss"

const Button = ({children, onClick}: ButtonProps) => {

    return (
        //type is an input specific property
        //value is the word the button displays, it is in this component mapped to 'children' for component reasons
        //onClick is mapped to 'onClick' for component reasons, in properties it is set to any so that it can properly accept code.
            <input type="button" value={children} className="button" onClick={onClick}/>
    )
}

export default Button