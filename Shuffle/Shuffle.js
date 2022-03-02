/*
 * In the Faro shuffle you split the deck into two equal halves. 
 * Then, you interleave the two half-decks always starting with 
 * the first element in the original deck.
 */

/**
 * Method takes a number as the length of a deck, then returns the
 * number of times it would be necessary to shuffle the deck using 
 * the Faro shuffle before the deck is identical to what it was.
 * @param {number} num 
 * @returns 
 */
export const shuffleCount = (num) => {
    let origDeck = []
    for (let i = 1; i < num + 2; i++) {
        origDeck.push(i)
    }
    let shuffledDeck = [...origDeck]
    let count = 0
    do {
        count++
        let deck1 = shuffledDeck.slice(0, num/2)
        let deck2 = shuffledDeck.slice(num/2, num)
        shuffledDeck = []
        for (let i = 0; i < deck1.length; i++) {
            shuffledDeck.push(deck1[i])
            shuffledDeck.push(deck2[i])
        } 
    } while (!areEqual(shuffledDeck, origDeck))
    return count
}

/**
 * Method takes in two arrays and returns true if they
 * have the same elements in the same positions, and false 
 * otherwise.
 * @param {array} array1 
 * @param {array} array2 
 * @returns 
 */
const areEqual = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    }
    return true
}