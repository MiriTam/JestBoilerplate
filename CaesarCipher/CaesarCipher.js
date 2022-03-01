const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

/**
 * Method takes a string and a rotation number. The string is ciphered by replacing each letter by 
 * rotating the alphabet based on the given rotation. If the rotation reaches the end, the rotation
 * start at the beginning.
 * @param {string} text 
 * @param {number} rotation 
 * @returns 
 */
export const caesarCipher = (text, rotation) => {
    let cipheredText = ""
    for (let letter in text) {
        let index = alphabet.findIndex(elem => elem === text[letter] || elem === text[letter].toLowerCase())
        if (index === -1) {
            cipheredText += text[letter]
        } else {
            index += rotation
            if (index > 25) {
                index -= 26 
            }
            if (text[letter] === text[letter].toUpperCase()) {
                cipheredText += alphabet[index].toUpperCase()
            } else {
                cipheredText += alphabet[index]
            }
        }
    }
    return cipheredText
}