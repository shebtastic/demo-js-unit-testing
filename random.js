function getRandomIndexFromArray(array) {
    if(!array) {
        return -1
    }

    return Math.floor(Math.random() * array.length)
}

export {
    getRandomIndexFromArray
}