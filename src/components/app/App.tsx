import "./App.scss"
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Heading from "../Heading/Heading";
import GenBase from "../../pages/Generator Base/GenBase";
import BeastiaryIndex from "../../pages/BeastiaryIndex/BeastiaryIndex";

const App = () => {
// HashRouter is used in development until I can get a live server setup and figured out to test with
// Routes holds all of the seperate routes, self explanitory really
// In route, path is the peice after the /#/
// path /* is a 404 page
// path / is the default/home page
// you put the page component into the element={}
    return (
        <div className="app">
           
            {/*this is how comments in returns of shit*/}

            <HashRouter>

                <Routes>
                    <Route path="/" element={<h1>home</h1>} />
                    <Route path="/beast" element={<BeastiaryIndex />} />
                    <Route path="/gen" element={<GenBase />} />
                    <Route path="/*" element={<h1>404</h1>} />
                </Routes>

                <Heading/>

            </HashRouter>

        </div>
    )

}
export default App

// TODO

//Make screen size scss
//Make theme scss
//Make all components work with theme
//Make all pages work with screen scss