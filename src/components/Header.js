import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title,onToggleForm,showAddTask}) => {

    return (
        <header className="header">
            <h3>{title}</h3>
            <Button text={
                showAddTask ? 'Close' : 'Add'
            } color={
                showAddTask ? 'red' : 'green'
            } onClick={onToggleForm}></Button>
        </header>
    );
}

export default Header;

Header.defaultProps = {
    title: "Hello"
}


Header.propTypes = {
    title:PropTypes.string,
}
