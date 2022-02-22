/**
 * Method takes in a sentence and returns a list of aquaintances and
 * a list of friends. Aquaintances are words that are in the sentence
 * 3 times, friends are in the sentence 5 times. Each word is in the
 * same order in which they become an aquaintence or friend.
 * @param {string} sentence 
 * @returns 
 */
export const noStranger = (sentence) => {
    const words = sentence.toLowerCase().split(" ")
    let strangers = []
    let strangerCounts = []
    let friends = []
    let aquaintences = []
    let aquaintenceCount = []

    for (let i = 0; i < words.length; i++) {

        // Move from stranger to aquantance.
        if (strangers.includes(words[i])) {
            strangerCounts[strangers.indexOf(words[i])] += 1
            if (strangerCounts[strangers.indexOf(words[i])] > 2) {
                aquaintences.push(words[i])
                aquaintenceCount.push(1)
                let splitIndex = strangers.indexOf(words[i])
                if (splitIndex == 0) {
                    strangers.pop()
                    strangerCounts.pop()
                } else {
                    strangers.splice(splitIndex)
                    strangerCounts.slice(splitIndex)
                }
            }

        // Move form aquaintence to friend
        } else if (aquaintences.includes(words[i])) {
            let index = aquaintences.indexOf(words[i])
            aquaintenceCount[index] += 1
            if (aquaintenceCount[index] > 2) {
                friends.push(aquaintences[index])
                if (index == 0) {
                    aquaintences.pop()
                    aquaintenceCount.pop()
                } else {
                    aquaintences.slice(index, 1)
                    aquaintenceCount.splice(index)
                }
            }
        } else {
            strangers.push(words[i])
            strangerCounts.push(1)
        }
    }
    return [aquaintences, friends]
}