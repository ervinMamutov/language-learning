import PropTypes from 'prop-types';
import { useState } from 'react';

const PopUpWindow = ({ translateWord }) => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const closePopUp = (e) => {
    setOpenPopUp(!openPopUp);
  };

  return (
    <div className="pop-up">
      <p>{translateWord}</p>
      <button
        onClick={(e) => {
          closePopUp(e);
        }}
      ></button>
      {openPopUp && <button>Save</button>}
    </div>
  );
};

PopUpWindow.propTypes = {
  translateWord: PropTypes.string,
};

export default PopUpWindow;
