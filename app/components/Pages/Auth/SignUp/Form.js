import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InfoWrapper from 'components/Common/ContantWrapper';

import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';
import TextFieldGroup from 'components/Common/FormElements/TextBox';
import { alphaOnly } from 'components/Common/Validations/rules';
import { validateInput } from 'components/Common/Validations/signUp';
import { globalNotificationAction } from 'actions/globalNotifyAction';
import PasswordVisibility from 'components/Common/FormElements/PasswordVisibility';
import AddressForm from'./AddressForm';

import styles from './style.scss';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      emailId: '',
      password: '',
      errors: {},
      errorStatus: false,
      isDisabled: false,
      signupData: true,
      addressField: false
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
      this.setState({
        errorStatus: false,
        errors: false,
        isDisabled: true,
        signupData: false,
        addressField: true
      })
      this.resetMessage();
    } else {
      this.props.globalNotificationAction({
        type: '',
        message: 'Please enter your details ',
      });
      this.setState({
        errorStatus: true
      })
      this.resetMessage();
    }
  }

  onChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value,
    });
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
    const { errors,password, errorStatus,emailId,secondName,firstName, isDisabled,signupData,addressField } = this.state;
    return (
      <React.Fragment>
        {signupData === true && <div className={styles.signupContent}>
          <h2>Sign Up</h2>
          <p>A small river named Duden flows by their place and supplies<br/> it with the necessary regelialia </p>
          <form onSubmit={this.onSubmit} noValidate>
            <div className={styles.formblock}>
              <InfoWrapper errorStatus={errorStatus}>
                <TextFieldGroup
                  id="firstName"
                  label="First Name"
                  onChange={this.onChange}
                  value={firstName}
                  field="firstName"
                  type="text"
                  error={errors.firstName}
                />

                <TextFieldGroup
                  id="secondName"
                  label="Second Name"
                  onChange={this.onChange}
                  value={secondName}
                  field="secondName"
                  type="text"
                  error={errors.secondName}
                />
                <TextFieldGroup
                  id="email"
                  label="email"
                  onChange={this.onChange}
                  value={emailId}
                  field="emailId"
                  type="email"
                  error={errors.emailId}
                />

                <PasswordVisibility
                  id={'password'}
                  label={'Password'}
                  field={'password'}
                  value={password}
                  passValue={password}
                  onChange={this.onChange}
                  password={password}
                  error={errors.password}
                  showVerify
                />
              </InfoWrapper>
            </div>
            <div className={styles.errorContent}>
              <span className={styles.errorStatus}>{ errors.firstName || errors.secondName || errors.emailId || errors.password }</span>
            </div>
            <div className={isDisabled === false ? styles.primaryBtn: ''}>
              <PrimaryButton label="Sign up" disabled = { isDisabled } />
            </div>
          </form>
        </div>}
        {addressField === true && <AddressForm/>}
      </React.Fragment>
    );
  }
}

SignupForm.propTypes = {
  globalNotificationAction: PropTypes.func,
};
export default connect(null, { globalNotificationAction })(SignupForm);
