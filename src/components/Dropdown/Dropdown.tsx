import React, { useEffect, useRef, useState } from "react"
import { DropdownProps } from "./Dropdown.types"
import ArrowIcon from "../../../public/Icons/arrow.svg"
import "./Dropdown.scss"

// ========== WORK IN PROGRESS ==========

const Dropdown = () => {

    const [dropdownState, setDropdownState] = useState(false)

    return (
        <div>
            <div className="header">
                <h2>deez</h2>
                <ArrowIcon className="arrow"/>            
            </div>

            <div className="options">
                <h2>deez an option</h2>
                <h2>aswell as deez</h2>
            </div>

        </div>
    )
}

export default Dropdown