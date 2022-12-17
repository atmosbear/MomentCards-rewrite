import React from "react"

export function Toolbar() {
    function changeToPage(pageName: string) {
        window.dispatchEvent(new CustomEvent("ask pageholder to change the page", {detail: pageName}))
    }

    return(<div>
        <button onClick={() => changeToPage("create")}>Create</button>
        <button onClick={() => changeToPage("study")}>Study</button>
        <button onClick={() => changeToPage("options")}>Options</button>
    </div>)
}