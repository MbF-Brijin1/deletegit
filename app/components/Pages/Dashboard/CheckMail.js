import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from 'components/Common/FormElements/TextBox';
import { validateInput } from 'components/Common/Validations/Dashboard';
import InfoWrapper from 'components/Common/ContantWrapper';
import { globalNotificationAction } from 'actions/globalNotifyAction';
import CloseIcon from 'components/Common/FormCloseIcon';
import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';

import PopupBlock from 'components/Common/Popup';



import styles from './style.scss';

class MailForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      errors: {},
      errorStatus: false,
      isDisabled: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
  handleClose() {
    this.props.handleClose();
  }
  render() {
      const { errors, errorStatus, emailId,isDisabled} = this.state;
    return (
      <PopupBlock>
      <CloseIcon handleClose={this.handleClose}/>
        <h3>Check your email?</h3>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
        <form onSubmit={this.onSubmit}>
          <div className={styles.formblock}>
            <InfoWrapper errorStatus={errorStatus}>
              <TextFieldGroup
                id="emailId"
                label="Email Id"
                onChange={this.onChange}
                value={emailId}
                field="emailId"
                type="email"
                error={errors.emailId}
              />
            </InfoWrapper>
          </div>
          <div className={styles.errorContent}>
            <span className={styles.errorStatus}>{ errors.emailId }</span>
          </div>
          <div className={isDisabled === false ? styles.primary_btn: ''}>
            <PrimaryButton label="Resend Code" disabled = { isDisabled }/>
          </div>
        </form>
      </PopupBlock>
    );
  }
}

MailForm.propTypes = {
  globalNotificationAction: PropTypes.func,
};
export default connect(null, { globalNotificationAction })(MailForm);