/**
 * Method takes an array of numbers and count the number of boomerangs.
 * A boomerang is an array with three numbers where the numbers on 
 * the ends are the same, and the middle number is different.
 * @param {numbers} array 
 * @returns 
 */
export const countBoomerangs = (array) => {
    if (array.length < 3) return 0
    let start = array[0]
    let middle = array[1]
    let boomerangs = 0
    for (let i = 2; i < array.length; i++) {
        if (array[i] == start && array[i] != middle) {
            boomerangs++
        }
        start = middle
        middle = array[i]
    }
    return boomerangs
}