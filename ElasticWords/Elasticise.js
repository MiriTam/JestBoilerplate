/**
 * Method takes a word and elastizes it. This means that the 
 * letters in the middle of the word is/are multiplied by half
 * the length of the word, while the letters on either side of the 
 * middle are multiplied with an index that decreases as you move 
 * away form the centre.
 * @param {string} word 
 * @returns 
 */
export const elasticize = (word) => {
    if (word.length < 3) return word;
    let elasticWord = "";
    let centre = 0;
    let startOfWord = "";
    let endOfWord = "";
    let middleOfWord = "";

    // Divide word into start, middle, and end.
    if (word % 2 != 0) {
        centre = Math.ceil(word.length / 2);
        startOfWord = word.substring(0, centre - 1);
        endOfWord = word.substring(centre, word.length);
        middleOfWord = word[centre-1];
    } else {
        centre = (word.length / 2) - 1;
        startOfWord = word.substring(0, centre - 1);
        endOfWord = word.substring(centre + 1, word.length);
        middleOfWord = word.substring(centre, centre +1);
    }

    // Multiply letters and add to the elastized word.
    for (let i = 0; i < startOfWord.length; i++) {
        elasticWord += startOfWord[i].repeat(i+1);
    }
    elasticWord += middleOfWord.repeat(centre);
    for (let i = 0; i < endOfWord.length; i++) {
        elasticWord += endOfWord[i].repeat(endOfWord.length - i);
    }
    return elasticWord;
}