export class Card {
    constructor(
        public front: string,
        public back: string,
        public dueDateEpoch: number,
    ) {}
}

export class Deck {
    constructor(
        public name: string,
        public cards: Card[] = [],
    ) {}
    createCard(card: Card) {
        this.cards.push(card)
    }
}