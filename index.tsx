import React from "react"
import {createRoot} from "react-dom/client"
import {PageHolder} from "./Components/Screen"
import { Card, Deck } from "./models"

let deck = new Deck("Default")
deck.createCard(new Card("I am the front of the card", "I am the back of the card", 0))
let r = createRoot(document.getElementById("root")!)
r.render(<PageHolder deck={deck}></PageHolder>)