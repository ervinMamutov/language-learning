import Word from './Word';
import PropTypes from 'prop-types';

const TextBlock = () => {
  return (
    <article className="text-block">
      <section>
        <Word word="Hello" translateWord="Hi" />
      </section>
    </article>
  );
};

TextBlock.propTypes = {};

export default TextBlock;
