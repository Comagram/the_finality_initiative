import React, { useEffect, useRef, useState } from "react"
import { HeaderProps } from "./Header.types"
import "./Header.scss"
import Button from "../Button/Button"

// header component

const Header = ({text, myClass, click}: HeaderProps) => {

    return (
        
        <div className="header">
            <div className={myClass} onClick={click}>
                <text children={text}/>
            </div>
        </div>

    )
}

export default Header