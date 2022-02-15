/**
 * Method takes in a string and splits it into an array of 
 * substrings split on double letters.
 * @param {string} word 
 * @returns 
 */
export const splitOnDoubleLetter = (word) => {
    let splitIndex = 0;
    let words = [];
    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] == word[i+1]) {
            words[words.length] = word.substring(splitIndex, i+1);
            splitIndex = i + 1;
        } 
    }
    if (words.length > 0) {
        words[words.length] = word.substring(splitIndex, word.length);
    }
    return words;
}