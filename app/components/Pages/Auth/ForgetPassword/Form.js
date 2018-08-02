import React, { Component } from 'react';
import ContantWrapper from 'components/Common/MiddleContent';

import PropTypes from 'prop-types';
import PopupBlock from 'components/Common/Popup';
import InfoWrapper from 'components/Common/ContantWrapper';
import { validatePassword } from 'components/Common/Validations/signIn';

import { connect } from 'react-redux';
import TextFieldGroup from 'components/Common/FormElements/TextBox';
import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';
import { globalNotificationAction } from 'actions/globalNotifyAction';

import styles from './style.scss';

class ForgotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {},
      errorStatus: false,
      isDisabled: false,
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
        errors: false,
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
  isValid() {
    const { errors, isValid } = validatePassword(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  resetMessage() {
    setTimeout(() => {
      this.props.globalNotificationAction({
        type: '',
        message: '',
      });
    }, 3500);
  }

  render() {
    const { errors,errorStatus,email,openpopup,isDisabled } = this.state;
    return (
        <PopupBlock>
          <h3>Did you forgot your password?</h3>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
          <form onSubmit={this.onSubmit} noValidate>

            <div className={styles.forgot_Password}>
              <div className={styles.formblock}>
              <InfoWrapper errorStatus={errorStatus}>
                <TextFieldGroup
                  id="email"
                  label="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  field="email"
                  type="email"
                  error={errors.email}
                />
                </InfoWrapper>
              </div>
              <div className={styles.errorContent}>
                <span className={styles.errorStatus}>{ errors.email }</span>
              </div>
              <div className={isDisabled === false ? styles.primary_btn: ''}>
                <PrimaryButton label="Send" disabled = { isDisabled }/>
              </div>
            </div>
          </form>
        </PopupBlock>
    );
  }
}


ForgotForm.propTypes = {
  globalNotificationAction: PropTypes.func,
};
export default connect(null, { globalNotificationAction })(ForgotForm);
























{/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextFieldGroup from 'components/Common/FormElements/TextBox';
import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';
import { validatePassword } from 'components/Common/Validations/signIn';
import { globalNotificationAction } from 'actions/globalNotifyAction';

class ForgotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      errors: {},
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
    } else {
      this.props.globalNotificationAction({
        type: '',
        message: 'Invalid email or password',
      });
      this.resetMessage();
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  isValid() {
    const { errors, isValid } = validatePassword(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          id="emailId"
          label="Email Id"
          onChange={this.onChange}
          value={this.state.emailId}
          field="emailId"
          type="email"
          error={errors.emailId}
        />
        <PrimaryButton label="submit" />
      </form>
    );
  }
}

ForgotForm.propTypes = {
  globalNotificationAction: PropTypes.func,
};
export default connect(null, { globalNotificationAction })(ForgotForm);*/}
