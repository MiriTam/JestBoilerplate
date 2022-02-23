/**
 * Method takes in a word and returns a verison of that word where
 * every vowel has been replaced with a number.
 * @param {string} word 
 * @returns 
 */
export const replaceVowel = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const vowelNumbers = [1, 2, 3, 4, 5]
    let betterWord = ""
    word.toLowerCase().split("").forEach(letter => {
        if (vowels.includes(letter)) {
            console.log(vowelNumbers[vowels.indexOf(letter)])
            betterWord += vowelNumbers[vowels.indexOf(letter)]
        } else {
            betterWord += letter
        }
    })
    return betterWord
}