class Phrase {
  constructor(phraseString, count, id) {
    this.phrase = phraseString;
    this.count = count;
    this.id = id;
    this.relatedWords = [];
  }

  get words() {
    let string = "";
    for (const word of this.relatedWords) {
      string += ` ${word}, `;
    }

    return string;
  }

  addRelatedWord(wordObject) {
    //console.log(`Adding ${wordObject.word}`)
    //if (!this.relatedWords.includes(wordObject)) this.relatedWords.push(wordObject)
    this.relatedWords.push(wordObject);
    //console.log(this)
  }
}

export default Phrase;
