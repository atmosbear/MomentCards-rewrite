import React from "react"
import {createRoot} from "react-dom/client"
import {PageHolder} from "./Components/Screen"

let r = createRoot(document.getElementById("root")!)
r.render(<PageHolder></PageHolder>)