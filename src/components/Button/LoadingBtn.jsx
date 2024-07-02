import styles from "./LoadingBtn.module.css";
import PropTypes from "prop-types";

function LoadBtn({ onClick }) {
  return (
    <button className={styles.Button} onClick={onClick}>
        Load more
    </button>
  );
}

LoadBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadBtn;