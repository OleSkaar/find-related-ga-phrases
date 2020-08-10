class Word {
    constructor(word, count, id) {
        this.word = word
        this.count = count
        this.id = id
        this.relatedPhrases = []
    }

    addCount(count) {
        this.count += count
    }

    addRelatedPhrase(phraseObject) {
        this.relatedPhrases.push(phraseObject)
    }
}

export default Word