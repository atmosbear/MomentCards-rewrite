import React, { useState } from 'react'
import { Card } from '../models'

type CreationPageProps = {
    cards: Card[]
}

export default function CreationPage(props: CreationPageProps) {
    function createCardAndRerenderPage() {
        let f = document.getElementById("card-front-input") as HTMLInputElement
        let fv = f!.value
        let b = document.getElementById("card-back-input") as HTMLInputElement
        let bv = b!.value
        setCards([...cards, new Card(fv, bv, 0)]) // forces a rerender
    }
    let onScreenCards: JSX.Element[] = []
    let [cards, setCards] = useState(props.cards)
    cards.forEach(card => {
        onScreenCards.push(<div key={card.front + card.back}>F: {card.front} / B: {card.back} / D: I am due at an epoch of {card.dueDateEpoch}</div>)
    })
    return (
        <div style={{display: "flex"}}>
        {/* card inputs */}
            <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                <textarea id="card-front-input" placeholder="front"></textarea>
                <textarea id="card-back-input" placeholder="back"></textarea>
                <button onClick={createCardAndRerenderPage}>create</button>
            </div>
        {/* current deck preview */}
            <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                {onScreenCards}
            </div>
        </div>
    )
}