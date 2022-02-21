/**
 * Method takes a sentence and arranges it according to the numbers
 * hidden within each word.
 * @param {string} sentence 
 * @returns 
 */
export const rearrange = (sentence) => {
    let words = sentence.split(" ")
    let sortedWords = []
    words.forEach(word => {
        for (let letter of word) {
            if (!isNaN(letter)) {
                sortedWords[letter] = word.replace(letter, "")
                break
            }
        }
    })
    return sortedWords.join(" ").trim()
}