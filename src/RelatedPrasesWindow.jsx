import React from 'react'
import RelatedPhraseData from './RelatedPhraseData.jsx'

function RelatedPhrasesWindow(props) {
    let totalCount = 0;
    for (const phrase of props.relatedPhrases) {
        totalCount += phrase.count
    }

    const relatedPhrases = []
    let phraseIndex = 0;
    for (const phrase of props.relatedPhrases) {
        const percentage = ((phrase.count / totalCount) * 100).toFixed(1)
        relatedPhrases.push(
            <RelatedPhraseData
                key={phraseIndex}
                phrase={phrase.phrase}
                count={phrase.count}
                percentage={`${percentage} %`}
            />
        )
        phraseIndex++
    }

    return (
        <div>
            <table className='relatedPhraseWindow'>
                <tbody>
                    <tr>
                        <th><h3>Related phrases</h3></th>
                        <th><h3>Unique searches</h3></th>
                        <th><h3>% of total</h3></th>
                    </tr>
                    {relatedPhrases}
                    <tr>
                        <td><strong>Total:</strong></td>
                        <td><strong>{totalCount}</strong></td>
                        <td><strong>100%</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RelatedPhrasesWindow;