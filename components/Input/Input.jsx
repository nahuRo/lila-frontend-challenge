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
        // con 'cn' uno las clases
        className={cn(styles.input, styles[props.size], className)}
        onChange={handleChange}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

// son los valores por defecto de las prosp, en caso de no pasarle esa prop al componente va a tomar el valor que declaremos
// en defautlProps
Input.defaultProps = {
  handleChange: () => {},
  errorMessage: '',
  label: '',
};

// es para tipar las props, como 'agregarles' ts a las props
Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
