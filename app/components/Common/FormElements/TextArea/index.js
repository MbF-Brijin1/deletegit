import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from '../TextBox/style.scss';

const cx = classnames.bind(styles);

class TextArea extends Component {
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
    const { id, field, value, label, error, type, onChange, style, maxLength } = this.props;
    const { fieldNotEmpty } = this.state;
    const className = cx({
      formGroup: true,
      hasError: (error && value === '') || (type === 'message' && error),
      hasSuccess: fieldNotEmpty || value !== '',
    });
    return (
      <div>
      <div className={className}>
        <textarea
          onChange={onChange}
          onKeyUp={this.keyUpEvent}
          value={value}
          name={field}
          className={styles.formGroupTextArea}
          id={id}
          style={style}
          maxLength={maxLength}
          type={type}
        />
        <label className={styles.formGroupLabel} htmlFor={id}>
          {label}
        </label>
      </div>
       {(error && value === '') || (type === 'message' && error) ? (
          <span className={styles.helpBlock}>{error}</span>
        ) : (
          ''
        )}
      </div>
    );
  }
}

TextArea.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  maxLength: PropTypes.number,
};

export default TextArea;
