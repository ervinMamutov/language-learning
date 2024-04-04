import PropTypes from 'prop-types';
import { useState } from 'react';

const Word = ({ word, translateWord }) => {
  const [isTranslate, setIsTranslate] = useState(false);

  const handleClick = () => {
    setIsTranslate(!isTranslate);
  };

  return (
    <>
      {isTranslate && <span className="translate-word">{translateWord}</span>}
      <span className="word" onClick={(e) => handleClick(e)}>
        {word}
      </span>
    </>
  );
};

Word.propTypes = {
  word: PropTypes.string,
  translateWord: PropTypes.string,
};

export default Word;
