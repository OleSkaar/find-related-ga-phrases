class WordContainer {
  constructor() {
    this.words = [];
  }

  get numberOfWords() {
    return this.words.length;
  }

  get isEmpty() {
    return this.words.length === 0;
  }

  include(wordString) {
    let wordExists = false;
    for (const word of this.words) {
      if (word.word === wordString) {
        wordExists = true;
        break;
      }
    }
    return wordExists;
  }

  find(wordString) {
    if (this.include(wordString)) {
      for (const word of this.words) {
        if (word.word === wordString) {
          return word;
        }
      }
    } else {
      console.log(`Cannot find ${wordString}`);
    }
  }

  add(wordObject) {
    this.words.push(wordObject);
  }

  sortByCount() {
    this.words.sort(compare);
  }
}

function compare(a, b) {
  const wordACount = a.count;
  const wordBCount = b.count;

  let comparison = 0;

  if (wordACount > wordBCount) {
    comparison = -1;
  } else if (wordACount < wordBCount) {
    comparison = 1;
  }

  return comparison;
}

export default WordContainer;
