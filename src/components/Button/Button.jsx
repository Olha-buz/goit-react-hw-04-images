import PropTypes from 'prop-types';
import css from './Buttom.module.css';

export const Button = ({ onClick, isVisible }) => {
    if (!isVisible) { return null; }
    return (
        <div>
            <button
                className={css.button}
                type="button"
                onClick={onClick} >
                Load More
            </button>
        </div>
    )
};


Button.propTypes = {
    onClick: PropTypes.func,
    isVisible: PropTypes.bool,
};
