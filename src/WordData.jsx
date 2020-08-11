import React from "react";

function WordData(props) {
  const isClicked = props.wordId === props.clickedPhraseId;

  const rowStyle = {
    borderBottom: "1px solid gainsboro",
    backgroundColor: isClicked ? "#DBE0F0" : "white",
  };

  const cellStyle = {
    borderCollapse: "collapse",
    padding: "5px",
  };

  const buttonStyle = {
    display: props.relatedPhrases.length > 1 ? "inherit" : "none",
    fontSize: "1.1em",
  };

  return (
    <tr style={rowStyle}>
      <td style={cellStyle}>{props.wordString}</td>
      <td style={cellStyle}>{props.count}</td>
      <td style={cellStyle}>{props.relatedPhrases.length}</td>
      <td style={cellStyle}>
        <button
          style={buttonStyle}
          onClick={() =>
            props.updateRelatedPhrases(props.relatedPhrases, props.wordId)
          }
        >
          🡲
        </button>
      </td>
    </tr>
  );
}

export default WordData;
