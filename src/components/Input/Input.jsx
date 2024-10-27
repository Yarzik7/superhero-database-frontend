import { useId } from 'react';
import css from './Input.module.css';

const Input = ({
  onChange,
  onButtonClick,
  type = 'text',
  name = '',
  label,
  title,
  pattern,
  required = true,
  minLength,
  value,
  withButton = false,
}) => {
  const inputId = useId();
  return (
    <div className={css.inputContainer}>
      {label && (
        <label htmlFor={inputId} className={css.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[css.input, withButton ? css.paddingRight : ''].join(' ')}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        required={required}
        onChange={onChange}
        minLength={minLength}
      />
      {withButton && (
        <button type="button" onClick={onButtonClick} className={css.inputButton}>
          Add
        </button>
      )}
    </div>
  );
};

export default Input;
