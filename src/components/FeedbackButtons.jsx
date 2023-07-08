import PropTypes from 'prop-types';
import css from './buttons.module.css'
export const FeedbackButtons = ({options, handleFeedback}) => {
    return(
        <div>
        {options.map(option => {
          return (
            <button className={css.button} key={option} onClick={() => handleFeedback(option)}>
              {option}
            </button>
          );
        })}
      </div>
        )
};
FeedbackButtons.propTypes = {
    options: PropTypes.arrayOf().isRequired,
    handleFeedback: PropTypes.func.isRequired,
};