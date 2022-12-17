import CreationPage from './CreationPage'
import React from 'react'

type CurrentPageProps = {
    pageName: string
}

export default function CurrentPage(props: CurrentPageProps) {
    if (props.pageName === "create") {
        return <CreationPage></CreationPage>
    } else if (props.pageName === "study") {
        return <div>Sorry, the study page is not ready yet.</div>
    } else {
        return <div>Sorry, the options page is not ready yet.</div>
    }
}