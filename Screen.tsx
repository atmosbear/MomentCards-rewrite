import CurrentPage from './CurrentPage'
import React from "react";
import { Toolbar } from "./Toolbar";

export function PageHolder() {
    return <div>
        <Toolbar></Toolbar>
        <CurrentPage></CurrentPage>
    </div>
}