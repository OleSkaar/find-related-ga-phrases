import React from "react";

function Wordcard(props) {
  const wordCardStyle = {
    margin: 20,
    backgroundColor: "lightgray",
    borderRadius: 5,
    padding: 10,
    boxShadow: 5,
    width: 1020,
  };

  return (
    <div style={wordCardStyle}>
      <h1>{props.wordString}</h1>
      <p>Unique searches: {props.count}</p>
      <p>Related phrases: {props.relatedPhrases.length}</p>
      <p>{props.relatedPhrasesString}</p>
    </div>
  );
}

export default Wordcard;
