import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { SampleJam } from "./components/SampleJam.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <SampleJam />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
