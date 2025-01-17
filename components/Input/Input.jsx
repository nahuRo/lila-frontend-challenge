import PropTypes from 'prop-types';
import cn from 'utils/classNames';
import styles from './Input.module.css';

/** Styled reusable form's Input component. */
const Input = ({ handleChange, className, label, errorMessage, ...props }) => {
  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <input
        {...props}
        className={cn(styles.input, styles[props.size], className)}
        onChange={handleChange}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

Input.defaultProps = {
  handleChange: () => {},
  errorMessage: '',
  label: '',
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
