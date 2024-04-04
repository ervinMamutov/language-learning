import Word from './Word';
import textParser from '../utiles/textParser';
import textData from '../data/textData';
// import PropTypes from 'prop-types';

const TextBlock = () => {
  const text = textData[0].text;
  const words = textParser(text);
  console.log(textData.text);

  return (
    <article className="text-block">
      <section>
        {words.map((word, index) => (
          <Word word={word} key={index} translateWord="Hi" />
        ))}
      </section>
    </article>
  );
};

// TextBlock.propTypes = {};

export default TextBlock;
