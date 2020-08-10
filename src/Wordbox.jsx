import React from 'react'
import WordData from './WordData.jsx'

function Wordbox(props) {
  const tableStyle = {
    width: '100%',
    margin: 'auto',
    borderCollapse: 'collapse',
    textAlign: 'left',
    display: props.isEmpty ? 'none' : 'table'
  }

  const tableRows = [];
  let rowIndex = 0;
  for (const word of props.words) {
    tableRows.push(
      <WordData
        wordId={word.id}
        key={rowIndex}
        wordString={word.word}
        count={word.count}
        relatedPhrases={word.relatedPhrases}
        clickedPhraseId={props.clickedPhraseId}
        updateRelatedPhrases={props.updateRelatedPhrases}
      />
    )
    rowIndex++
  }
  
  return (  
      <table style={tableStyle}>
        <thead>
          <tr>
            <th><h2>Search phrase</h2></th>
            <th><h2>Unique searches</h2></th>
            <th><h2>Related Phrases</h2></th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
  );
}

export default Wordbox;