import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';
import ForgotPassword from '../ForgetPassword';
import PopupBlock from 'components/Common/Popup';
import TextFieldGroup from 'components/Common/FormElements/TextBox';
import { alphaOnly } from 'components/Common/Validations/rules';
import { validateInput } from 'components/Common/Validations/signIn';
import { globalNotificationAction } from 'actions/globalNotifyAction';
import PasswordVisibility from 'components/Common/FormElements/PasswordVisibility';

import InfoWrapper from 'components/Common/ContantWrapper';

import styles from './style.scss';

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: '',
      checkMe: true,
      errors: {},
      errorStatus: false,
      openpopup: false,
      isDisabled: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
        errors:'',
        isDisabled: true
      });
    } else {
      this.props.globalNotificationAction({
        type: '',
        message: 'Invalid email or password',
      });
      this.resetMessage();
      this.setState({
        errorStatus: true,
      });
    }
  }

  onChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value, 
    });
    
  }
  handlePress() {
    this.setState({
      openpopup: true
    }); 
  }

  handleClose(){
    this.setState({
      openpopup: false
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
    const { errors,password,errorStatus,openpopup,emailId,error,isDisabled } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} noValidate>
          <div className={styles.formblock}>
            <InfoWrapper errorStatus={errorStatus}>
              <TextFieldGroup 
                id="email"
                label="Examble@ninocity.com"
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
                onChange={this.onChange}
                password={password}
                error={errors.password}
              />
            </InfoWrapper>
          </div>
          <div className={styles.errorContent}>
            <span className={styles.errorStatus}>{ errors.emailId || errors.password }</span>
          </div>
          <div className={isDisabled === false ? styles.primaryBtn: ''}>
            <PrimaryButton label="submit" disabled = { isDisabled }/>
          </div>
          <div className={styles.linkTo}>
            <a onClick = {this.handlePress}>Forgot your password?</a>
          </div>
        </form>
        <div className="linkTest">
          <p>Already have an account? <Link to="/register">Sign In</Link></p>
        </div>
        {this.state.openpopup === true && <ForgotPassword handleClose= {this.handleClose}/> }
      </React.Fragment>
    );
  }
}

SigninForm.propTypes = {
  globalNotificationAction: PropTypes.func,
  error: PropTypes.string,
};
export default connect(null, { globalNotificationAction })(SigninForm);
