import { now } from "svelte/internal"

export class Card {
    constructor(
        public front: string,
        public back: string,
        public dueDateMS: number,
    ) {}
}

function ms(time?: {days?: number, hours?: number, minutes?: number, seconds?: number}, fromWhenMS = Date.now()) {
    time = time ?? {}
    let d = time.days ?? 0
    let h = time.hours ?? 0
    let m = time.minutes ?? 0
    let s = time.seconds ?? 0
    let ms = time.seconds ?? 0
    let s2ms = s * 1000
    let m2ms = m * 60 * 1000
    let h2ms = h * 60 * 60 * 1000
    let d2ms = d * 24 * 60 * 60 * 1000
    return s2ms + m2ms + h2ms + d2ms + ms + fromWhenMS
}

function nowMS() {
    return ms()
}

export class Deck {
    constructor(
        public name: string,
        public cards: Card[] = [],
    ) {}
    createCard(card: Card) {
        this.cards.push(card)
    }
    getDues(): number {
        let dues = 0
        this.cards.forEach(card => {
            if (card.dueDateMS < nowMS()) {
                dues++
            }
        }) 
        return dues
    }
}