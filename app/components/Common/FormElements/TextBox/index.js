import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

class TextFieldGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldNotEmpty: false,
    };
    this.keyUpEvent = this.keyUpEvent.bind(this);
  }
  keyUpEvent(e) {
    if (e.target.value !== '') {
      this.setState({
        fieldNotEmpty: true,
      });
    } else {
      this.setState({
        fieldNotEmpty: false,
      });
    }
  }
  render() {
    const {
      id,
      field,
      value,
      label,
      error,
      type,
      onChange,
      tabIndex,
      checkUserExists,
      maxLength,
      style,
      borderGold,
      spaceAdjust,
      disabledColor,
      reduceBottom,
      memberInput,
      readOnly,
    } = this.props;
    const { fieldNotEmpty } = this.state;
    const className = cx({
      formGroup: true,
      hasError: (type === 'text' && error) || (type === 'email' && error) ,
      hasSuccess: fieldNotEmpty || value !== '',
    });
    return (
      <div>
      <div className={[className, memberInput && styles.memberInput, reduceBottom && styles.reduceBottom].join(' ')} error = {error}>
        <input 
          onChange={onChange}
          onKeyUp={this.keyUpEvent}
          onBlur={checkUserExists}
          value={value}
          type={type}
          name={field}
          className={[styles.formGroupInput, disabledColor && styles.disabledColor].join(' ')}
          id={id}
          maxLength={maxLength}
          tabIndex={tabIndex}
          style={style}
          readOnly={readOnly}
          placeholder={label}
        />
      </div>
      </div>
    );
  }
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  tabIndex: PropTypes.string,
  maxLength: PropTypes.number,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  checkUserExists: PropTypes.func,
  style: PropTypes.object,
  disabledColor: PropTypes.bool,
  reduceBottom: PropTypes.bool,
  memberInput: PropTypes.bool,
  readOnly: PropTypes.bool,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
