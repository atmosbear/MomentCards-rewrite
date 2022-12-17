import CurrentPage from './CurrentPageHolder'
import React, { useState } from "react";
import { Toolbar } from "./PageChangingToolbar";
import { Deck } from '../models';

type PageHolderProps = {
    deck: Deck
}

export function PageHolder(props: PageHolderProps) {
    let [pageName, setPageName] = useState("create")
    window.addEventListener("ask pageholder to change the page", (e: CustomEventInit) => {
        setPageName(e.detail)
    })
    return <div>
        <Toolbar></Toolbar>
        <CurrentPage pageName={pageName} deck={props.deck}></CurrentPage>
    </div>
}