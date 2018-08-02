import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from 'components/Common/FormElements/TextBox';
import PasswordChecker from './Checker';
import PasswordVisibility from './PasswordVisibility';

import { styles } from './style.scss';
 
class PwdIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      addClass: false,
    };
    this.showHandleClick = this.showHandleClick.bind(this);
  }
  onChange(e) {
    this.props.onChange(e);
  }
  showHandleClick() {
    this.setState({
      showPassword: !this.state.showPassword,
      addClass: !this.state.addClass,
    });
  }
  render() {
    const { passValue,password, error, id, label, value, field,showVerify} = this.props;
    const { showPassword, addClass } = this.state;
    return (
      <div className="revealerWrapper">
        <PasswordVisibility password={password} addClass={addClass} password={passValue} showHandleClick={this.showHandleClick} />
        {showVerify && <PasswordChecker password={passValue} />}
        <TextFieldGroup
          id={id}
          label={label}
          onChange={this.onChange.bind(this)}
          value={value}
          field={field}
          type={showPassword ? 'text' : 'password'}
          error={error}
        />
      </div>
    );
  }
}

PwdIndex.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  field: PropTypes.string,
  password: PropTypes.string,
};
export default PwdIndex;
