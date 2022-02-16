/**
 * Method takes a string and reorganizes the order such that all
 * capital letters are at the start of the word and all numbers at the end. 
 * @param {string} word 
 * @returns 
 */
export const reorder = (word) => {
    let numbers = [];
    let capitalLetters = [];
    let smallLetters = [];
    for (let i = 0; i < word.length; i++) {
        if (isNaN(word[i])) {
            if (word[i] == word[i].toUpperCase()) {
                capitalLetters[capitalLetters.length] = word[i];
            } else {
                smallLetters[smallLetters.length] = word[i];
            }
        } else {
            numbers[numbers.length] = word[i];
        }
    }
    return capitalLetters.join("") + smallLetters.join("") + numbers.join("");
}