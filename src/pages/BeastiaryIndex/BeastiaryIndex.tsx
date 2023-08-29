import React, { useEffect, useRef, useState } from "react"
import { BeastiaryIndexProps } from "./BeastiaryIndex.types"
import "./BeastiaryIndex.scss"
import Header from "../../components/Header/Header"
import picture from "../../../public/page_icon.png"

const weasel = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27HZwyODSEmYRXJ6xPZr9p16zuE9thuwOVQ&usqp=CAU"

const BeastiaryIndex = () => {

    function myFunction () {
        console.log("deez")
    }

    function drag (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    function allowDrop (ev) {
        ev.preventDefault();
    }

    return (
        <div className="beastiaryIndex">
            <div className="beastiaryCard">
            <Header text="oneFish" myClass="beastiaryCardHeader" click={myFunction} />
            <img className="image" src={picture}/>
            </div>
            <div className="beastiaryCard">
            <Header text="twoFish" myClass="beastiaryCardHeader" click={myFunction} />
            <img className="image" src={picture}/>
            </div>
            <div id="deez" className="beastiaryCard" onDragStart={drag} draggable>
            <Header text="deadFish" myClass="beastiaryCardHeader" click={myFunction} />
            <img className="image" src={weasel}/>
            </div>
            <div id="nuts" className="beastiaryCard"  onDragOver={allowDrop} onDrop={drop}>

            </div>
        </div>
    )
}

export default BeastiaryIndex