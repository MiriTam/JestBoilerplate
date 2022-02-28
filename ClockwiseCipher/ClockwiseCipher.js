export const clockwiseCipher = (message) => {
    // Create matrix
    let size = Math.ceil((message.length / 4))
    let main = []
    for (let i = 0; i < size; i++) {
        main.push([])
    }

    let letters = message.split("")
    let start = 0
    let end = size -1
    main[0][0] = letters[0]
    main[0][end] = letters[1]
    main[end][end] = letters[2]
    main[end][0] = letters[3]
    // Cipher
    for (let i = 4; i < letters.length; i = i + 4) {
        main[start][end-2] = letters[i]
        main[start+1][end] = letters[i+1]
        main[start+3][end-1] = letters[i+2]
        main[start+2][end-3] = letters[i+3]

        main[start][end-1]
        main[start+2][end]
        main[start+3][end-2]
        main[start+1][end-3]

        main[start+1][end-2]
        main[start+2][end-1]
    }
    console.log(main)

    let cipheredName = ""
    for (let j = 0; j < size; j++) {
        for (let k = 0; k < size; k++) {
            cipheredName += main[j][k]
        }
    }
    return cipheredName
}