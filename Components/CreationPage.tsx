import React, { useState } from 'react'
import { deck } from './Screen'
import { Card, ms, nowMS } from '../models'

type CreationPageProps = {
    cards: Card[]
}

export default function CreationPage(props: CreationPageProps) {
    function createCardAndRerenderPage() {
        let f = document.getElementById("card-front-input") as HTMLInputElement
        let fv = f!.value
        let b = document.getElementById("card-back-input") as HTMLInputElement
        let bv = b!.value
        if (fv && bv) {
            let newCard = new Card(fv, bv, ms({seconds: 1}))
            deck.addCard(newCard)
            setCards([...cardz, newCard]) // forces a rerender
        }
    }
    function addCurrentDeckCardsToScreen() {
        console.log(cardz)
        props.cards.forEach(card => {
            onScreenCards.push(<div key={card.front + card.back + card.dueDateMS}>F: {card.front} / B: {card.back} / D: I am due at an epoch of {card.dueDateMS}</div>)
        })
    }
    let onScreenCards: JSX.Element[] = []
    let [cardz, setCards] = useState(props.cards)
    addCurrentDeckCardsToScreen()
    return (
        <div style={{ display: "flex" }}>
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