class Line {
    constructor(phrase, count) {
        this.phrase = phrase
        this.count = parseInt(this.removeComma(count))
    }

    removeComma(countString) {
        return countString.replace(',', '')
    }
}

export default Line