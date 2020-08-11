export const removeInvalidLines = (array, firstHeaderColumn) => {
  const isCorrectLength = (array) => array.length > 2;
  const isNotHeader = (string) => string.localeCompare(firstHeaderColumn);
  const isNotEmpty = (string) => string.length > 0;

  const newArray = [];

  array.forEach((element) => {
    if (
      isCorrectLength(element.data) &&
      isNotHeader(element.data[0]) &&
      isNotEmpty(element.data[0])
    )
      newArray.push(element);
  });

  return newArray;
};
