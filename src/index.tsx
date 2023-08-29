import React from "react"
import ReactDOM from 'react-dom/client';
import App from "./components/app/App";
import "./fontfaces.scss"
import "./index.scss"
console.log("Dev Server Loaded!")
const div_root = document.getElementById("root")
const root = ReactDOM.createRoot(div_root);
root.render(<App/>)
