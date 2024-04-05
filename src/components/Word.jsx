import PopUpWindow from './PopUpWindow';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Word = ({ word, translateWord }) => {
  const [isTranslate, setIsTranslate] = useState(false);

  const handleClick = () => {
    setIsTranslate(!isTranslate);
  };

  return (
    <>
      {isTranslate && <PopUpWindow translateWord="Hi" />}
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
