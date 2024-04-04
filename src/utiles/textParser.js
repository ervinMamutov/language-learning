export const textParser = (text) => {
  const words = text.split(/\s/u);
  console.log(words);
  return words;
};

export default textParser;
