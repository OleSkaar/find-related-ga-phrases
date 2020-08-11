import React, { Component } from "react";
import Line from "./Line.js";
import Phrase from "./Phrase.js";
import Word from "./Word.js";
import { removeInvalidLines } from "./removeInvalidLines.js";
import PhraseContainer from "./PhraseContainer.js";
import WordContainer from "./WordContainer.js";

import { CSVReader } from "react-papaparse";

const firstColumn = "Search Term";
const space = " ";

export class Parser extends Component {
  handleOnDrop = (data) => {
    const words = new WordContainer();
    const phrases = new PhraseContainer();
    const newData = removeInvalidLines(data, firstColumn);

    for (const line of newData) {
      const lineObject = new Line(line.data[0], line.data[1]);
      const phrase = lineObject.phrase;
      const count = lineObject.count;

      const phraseObject = new Phrase(
        phrase,
        count,
        phrases.numberOfPhrases + 1
      );

      if (phrase.includes(space)) {
        const wordsInPhrase = phrase.split(space);

        for (const wordString of wordsInPhrase) {
          let wordObject = undefined;

          if (words.include(wordString)) {
            wordObject = words.find(wordString);
            wordObject.addCount(count);
          } else {
            wordObject = new Word(wordString, count, words.numberOfWords + 1);
            words.add(wordObject);
          }

          phraseObject.addRelatedWord(wordObject);
          wordObject.addRelatedPhrase(phraseObject);
        }
      } else {
        let wordObject = undefined;

        if (words.include(phrase)) {
          wordObject = words.find(phrase);
          wordObject.addCount(count);
          wordObject.addRelatedPhrase(phraseObject);
        } else {
          wordObject = new Word(phrase, count, words.numberOfWords + 1);
          wordObject.addRelatedPhrase(phraseObject);
          words.add(wordObject);
        }
      }
      phrases.add(phraseObject);
    }
    words.sortByCount();
    this.props.updateState(words, phrases);
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  render() {
    return (
      <CSVReader
        onDrop={this.handleOnDrop}
        onError={this.handleOnError}
        addRemoveButton
        onRemoveFile={this.handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    );
  }
}
