import React, { useEffect, useRef, useState } from "react"
import { HeadingProps } from "./Heading.types"
import "./Heading.scss"
import Button from "../Button/Button"
import { useMediaQuery } from "usehooks-ts";

// Site header, shows up on all pages



const Heading = () => {

    const [theme, setTheme] = useState("simple-dark")

function changeTheme () {
 
    (theme == "simple-dark") ? setTheme("simple-light"): setTheme("simple-dark")
    console.log(theme)

}

const isMobile = useMediaQuery("()")

//On onClick, it should route to the apropriet page.
//buttons scss should be yk.. done xD
    return (
        <div className="heading">
            <Button children={"MENU"} onClick={console.log("fix")}/>
            <Button children={"HOME"} onClick={console.log("fix")}/>
            <Button children={"The Finality Initiative"} onClick={console.log("fix")}/>
            {/*to pass a function with variables in a button module you do like this xD*/}
            <Button children={"Theme"} onClick={() => changeTheme()}/>
        </div>
    )
}

export default Heading