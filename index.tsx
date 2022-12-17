import React from "react"
import {createRoot} from "react-dom/client"
import {PageHolder} from "./Components/Screen"
import { Card, Deck } from "./models"

let deck = new Deck("Default")
deck.createCard(new Card("I am the front of the card", "I am the back of the card", 0))
let r = createRoot(document.getElementById("root")!)
r.render(<PageHolder deck={deck}></PageHolder>)

function createEvents() {
    let studyToolbarButton = document.getElementById("study-button")!
    studyToolbarButton.addEventListener("a new card is due", () => {
        let numDue = deck.getDues()
        studyToolbarButton.innerText = numDue > 0 ? "Study (" + numDue + ")" : "Study"
    })
}
