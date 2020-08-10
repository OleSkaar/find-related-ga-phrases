import React from 'react';
import './App.css';
import { Parser } from './utils/parser.jsx'
import PhraseContainer from './utils/PhraseContainer.js'
import WordContainer from './utils/WordContainer.js'
import Wordbox from './Wordbox.jsx'
import RelatedPhrasesWindow from './RelatedPrasesWindow.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wordContainer: new WordContainer(),
      phraseContainer: new PhraseContainer(),
      isEmpty: true,
      relatedPhrases: [],
      clickedPhraseId: undefined
    }
  }

  updateWordAndPhrases(words, phrases) {
    this.setState({
      wordContainer: words,
      phraseContainer: phrases,
      isEmpty: words.isEmpty && phrases.isEmpty
    })
  }

  updateRelatedPhrases(relatedPhrases, phraseId) {
    this.setState({
      relatedPhrases: relatedPhrases, 
      clickedPhraseId: phraseId})
  }

  render() {

    const mainContentStyle = {
      flexGrow: 2
    }

    const leftSidebarStyle = {
      minWidth: '25%'
    }

    const rightSidebarStyle = {
      minWidth: '25%',
      visibility: this.state.relatedPhrases.length > 0 ? 'visible' : 'hidden',
      flexGrow: 1
    }

    const flexboxContainer = {
      maxWidth: '100vw',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'

    }

    const textBoxStyle = {
      maxWidth: '40%',
      margin: 'auto'
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>🔍 Find related phrases</h1>
        </header>
        <div style={textBoxStyle}>
        <p>This is a tool to help analyze and organize site search data from Google Analytics.</p>
          <p>To use it, navigate to Behavior {'>'} Site Search {'>'} Search Terms, choose the time span you want data for, and choose Export {'>'} CSV.</p>
          <p>Then, upload the CSV with drag and drop or browse, and it will connect all phrases that contain the same word.</p>
          <p>For instance, if 10 users have searched for 'sleeping bag', and 5 users have searched for 'red sleeping bag', the phraseContainer
            'sleeping bag' will now have 15 unique searches, and 'red sleeping bag' will be marked as a related phrase to 'sleeping bag'.
          </p>
        </div>
        <div style={flexboxContainer}>
          <div style={leftSidebarStyle}></div>
          <div style={mainContentStyle}>
          
            <Wordbox
              isEmpty={this.state.isEmpty}
              words={this.state.wordContainer.words}
              phrases={this.state.phraseContainer.phrases}
              clickedPhraseId={this.state.clickedPhraseId}
              updateRelatedPhrases={(relatedPhrases, phraseId) => this.updateRelatedPhrases(relatedPhrases, phraseId)}
            />
            <Parser
              onDrop={this.handleOnDrop}
              onError={this.handleOnError}
              addRemoveButton
              onRemoveFile={this.handleOnRemoveFile}
              updateState={(words, phrases) => this.updateWordAndPhrases(words, phrases)}
            >
              <span>Click to upload.</span>
            </Parser>
          </div>
          <div style={rightSidebarStyle}>
            <RelatedPhrasesWindow
              relatedPhrases={this.state.relatedPhrases}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;