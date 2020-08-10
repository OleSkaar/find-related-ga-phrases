import React from 'react'

function RelatedPhraseData(props) {
    
    return (
        <tr className='tableRow'>
            <td>{props.phrase}</td>
            <td>{props.count}</td>
            <td>{props.percentage}</td>
        </tr>
    )
}

export default RelatedPhraseData;