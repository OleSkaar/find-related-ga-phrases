class PhraseContainer {
    constructor() {
        this.phrases = []
    }

    add(phraseObject) {
        this.phrases.push(phraseObject)
    }

    get totalCount() {
        let total = 0
        for (const phrase of this.phrases) {
            total += phrase.count
        }

        return total
    }

    get numberOfPhrases() {
        return this.phrases.length
    }

    get isEmpty() {
        return this.phrases.length === 0
    }
}

export default PhraseContainer