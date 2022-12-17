import React from "react"
import { createRoot } from "react-dom/client"
import { PageHolder } from "./Components/Screen"
import { Card, Deck, nowMS } from "./models"

function createEvents() {
    window.addEventListener("the due cards changed", () => {
        let studyToolbarButton = document.getElementById("study-button")! as HTMLButtonElement
        let numDue = deck.updateAndReturnDues().length
        if (numDue > 0) {
            studyToolbarButton.disabled = false
            studyToolbarButton.innerText = "Study (" + numDue + ")"
        } else {
            studyToolbarButton.disabled = true
            studyToolbarButton.innerText = "Study"
        }
    })
}

let deck = new Deck("Default")
// deck.createCard(new Card("I am the front of the card", "I am the back of the card", nowMS()))
let r = createRoot(document.getElementById("root")!)
r.render(<PageHolder deck={deck}></PageHolder>)
createEvents()
let oldNumDues = 0
function checkForChangedDues() {
    let updatedDues = deck.updateAndReturnDues()
    let studyToolbarButton = document.getElementById("study-button")! as HTMLButtonElement
    if (studyToolbarButton) {
        if (oldNumDues === 0) {
            window.dispatchEvent(new CustomEvent("the due cards changed"))
        }
        if (updatedDues.length !== oldNumDues) {
            oldNumDues = updatedDues.length
            window.dispatchEvent(new CustomEvent("the due cards changed"))
        }
    }
    requestAnimationFrame(checkForChangedDues)
}
requestAnimationFrame(checkForChangedDues)

