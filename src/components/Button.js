
import PropTypes from 'prop-types';

function Button({ text, color, onClick }) {
    return (
        <button style={{ backgroundColor: color }} onClick={onClick} className="btn">{text}</button>
    )
}

export default Button

Button.defaultProps = {
    text : "Submit",
    color : "steelblue",
}


Button.propTypes = {
    text : PropTypes.string,
    color: PropTypes.string,
    onClick : PropTypes.func.isRequired
}
