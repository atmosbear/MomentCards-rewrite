import CurrentPage from './CurrentPageHolder'
import React, { useState } from "react";
import { Toolbar } from "./PageChangingToolbar";
import { Deck } from '../models';

export let deck = new Deck("Default")

function createEvents() {
    window.addEventListener("the due cards changed", () => {
        let studyToolbarButton = document.getElementById("study-button")! as HTMLButtonElement;
        let numDue = deck.updateAndReturnDues().length;
        if (numDue > 0) {
            studyToolbarButton.disabled = false;
            studyToolbarButton.innerText = "Study (" + numDue + ")";
        } else {
            studyToolbarButton.disabled = true;
            studyToolbarButton.innerText = "Study";
        }
    });
}
function checkForChangedDues() {
    let studyToolbarButton = document.getElementById("study-button")! as HTMLButtonElement;
    if (studyToolbarButton) {
        let updatedDues = deck.updateAndReturnDues()
        if (updatedDues.length !== oldNumDues) {
            window.dispatchEvent(new CustomEvent("the due cards changed"))
            oldNumDues = updatedDues.length
            console.log("Updated.")
        } else {
            console.log("sorry, the same.")
        }
    }
    requestAnimationFrame(checkForChangedDues);
}

export function PageHolder() {
    let [pageName, setPageName] = useState("create")
    window.addEventListener("ask pageholder to change the page", (e: CustomEventInit) => {
        setPageName(e.detail)
    })
    return <div>
        <Toolbar></Toolbar>
        <CurrentPage pageName={pageName} deck={deck}></CurrentPage>
    </div>
}

createEvents();
let oldNumDues = -1;
checkForChangedDues();