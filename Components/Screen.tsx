import CurrentPage from './CurrentPage'
import React, { useState } from "react";
import { Toolbar } from "./PageChangingToolbar";

export function PageHolder() {
    let [pageName, setPageName] = useState("create")
    window.addEventListener("ask pageholder to change the page", (e: CustomEventInit) => {
        setPageName(e.detail)
    })
    return <div>
        <Toolbar></Toolbar>
        <CurrentPage pageName={pageName}></CurrentPage>
    </div>
}