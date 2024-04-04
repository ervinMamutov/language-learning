import PropTypes from 'prop-types';
import { useState } from 'react';

function Word({ word, translateWord }) {
  const [isTranslate, setIsTranslate] = useState(false);

  const handleClick = () => {
    setIsTranslate(true);
  };

  return (
    <>
      {isTranslate && <p>{translateWord}</p>}
      <p className="word" onClick={(e) => handleClick(e)}>
        {word}
      </p>
    </>
  );
}

Word.propTypes = {
  word: PropTypes.string,
  translateWord: PropTypes.string,
};

export default Word;
