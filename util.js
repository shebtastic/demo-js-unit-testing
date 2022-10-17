function add(a, b) {
    if(a === undefined && b === undefined) {
        throw new Error('beide undefined')
    }

    if(a === undefined) {
        throw new Error('a undefined')
    }

    if(b === undefined) {
        throw new Error('b undefined')
    }

    if(typeof a !== "number") {
        a = 0
    }

    if(typeof b !== "number") {
        b = 0
    }

    return a + b
}

export {
    add
}