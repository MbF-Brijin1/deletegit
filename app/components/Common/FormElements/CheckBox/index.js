import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

class CheckBox extends Component {
  render() {
    const { label, id, onChange, type, checked } = this.props;
    const className = cx({
      checkboxRow: true,
    });
    return (
      <div className={className}>
        <input type="checkbox" onChange={onChange} id={id} value={label} checked={checked} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
