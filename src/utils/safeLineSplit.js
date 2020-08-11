import Line from "./Line";

export const safeLineSplit = (line) => {
  console.log(`Phrase: ${line.data[0]}`);
  console.log(`Count: ${line.data[1]}`);
  if (line.data[0].charAt(0) === '"') {
    const findTextInQuotesRE = /'"(.+?)"'/;
    const findQuoteTextCountRE = /'",(.+?),'/;
    const phrase = findTextInQuotesRE.exec(line.data[0]);
    const count = findQuoteTextCountRE.exec(line.data[1]);

    return new Line(phrase, count);
  } else {
    return new Line(line.data[0], line.data[1]);
  }
};
