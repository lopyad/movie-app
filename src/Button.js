import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    Button.propTypes = {
        text: PropTypes.string.isRequired,
    };
    return <button className={styles.btn}>{text}</button>
}
export default Button;