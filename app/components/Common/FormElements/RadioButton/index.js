import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const RadioButton = ({
  label,
  id,
  onChange,
  name,
  value,
  customRadio,
  checked,
  customStyle,
  disabled,
  increaseBottom,
}) => (
  <div className={[styles.RadioButttonRow, customRadio].join(' ')} style={customStyle}>
    <input type="radio" onChange={onChange} id={id} name={name} value={value} checked={checked} disabled={disabled} />
    <label className={increaseBottom && styles.increaseBottom} htmlFor={id}>
      {label}
    </label>
  </div>
);

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  customRadio: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  customStyle: PropTypes.object,
  disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  increaseBottom: PropTypes.bool,
};

export default RadioButton;
