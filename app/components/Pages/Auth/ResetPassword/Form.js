import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';
import TextFieldGroup from 'components/Common/FormElements/TextBox';
import { alphaOnly } from 'components/Common/Validations/rules';
import { validateInput } from 'components/Common/Validations/ResetPassword';
import { globalNotificationAction } from 'actions/globalNotifyAction';
import PasswordVisibility from 'components/Common/FormElements/PasswordVisibility';

import InfoWrapper from 'components/Common/ContantWrapper';

import styles from './style.scss';

class ResetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: '',
      checkMe: true,
      errors: {},
      errorStatus: false,
      isDisabled: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.props.globalNotificationAction({
        type: 'success',
        message: 'Successfully created',
      });
      this.resetMessage();
      this.setState({
        errorStatus: false,
        errors: '',
        isDisabled: true
      });
    } else {
      this.props.globalNotificationAction({
        type: '',
        message: 'Invalid email or password',
      });
      this.resetMessage();
      this.setState({
        errorStatus: true
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  resetMessage() {
    setTimeout(() => {
      this.props.globalNotificationAction({
        type: '',
        message: '',
      });
    }, 3500);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  render() {
    const { errors,password,errorStatus, isDisabled } = this.state;
    return (
      <form onSubmit={this.onSubmit} noValidate>
        <div className={styles.formblock}>
          <InfoWrapper errorStatus={errorStatus}>
            <PasswordVisibility
              id={'password'}
              label={'Password'}
              field={'password'}
              value={password}
              onChange={this.onChange}
              password={password}
              error={errors.password}
              passValue={password}
              showVerify
            />
          </InfoWrapper>
        </div>
        <div className={styles.errorContent}>
          <span className={styles.errorStatus}>{ errors.password }</span>
        </div>
        <div className={isDisabled === false ? styles.primary_btn : ''}>
          <PrimaryButton label="Login" disabled = { isDisabled }/>
        </div>
      </form>
    );
  }
}

ResetForm.propTypes = {
  globalNotificationAction: PropTypes.func,
};
export default connect(null, { globalNotificationAction })(ResetForm);
