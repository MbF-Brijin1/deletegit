import React, { Component } from 'react';
import ContantWrapper from 'components/Common/MiddleContent';
import BodyWrapper from 'components/Common/BodyWrapper';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CloseIcon from 'components/Common/FormCloseIcon';
import InfoWrapper from 'components/Common/ContantWrapper';
import DatePickerField from 'components/Common/FormElements/DatePicker';

import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';
import SecondaryButton from 'components/Common/FormElements/Button/SecondaryButton';
import TextFieldGroup from 'components/Common/FormElements/TextBox';
import { alphaOnly } from 'components/Common/Validations/rules';
import { validateInput } from 'components/Common/Validations/PaymentDetails';
import { globalNotificationAction } from 'actions/globalNotifyAction';

import styles from './style.scss';

class PaymentDetailsForm  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expiryDate: '',
      emailId: '',
      password: '',
      promoCode: '',
      city:'',
      ccv:'',
      errors: {},
      errorStatus: false,
      isDisabled: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.selectDate = this.selectDate.bind(this);

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
        errors: '',
        isDisabled: true
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
  selectDate(date) {
    this.setState({
        expiryDate: moment(date).format('DD/MM/YYYY')
    })
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
    const { errors, errorStatus,isDisabled } = this.state;
    const minDate = new Date();
    return (
      <BodyWrapper>
        <ContantWrapper>
          <CloseIcon />
            <ul className={styles.payementWrapper}>
              <li className={styles.payementBlock}>
                <h2>Payment Details</h2>
                <p>A small river named Duden flows by their place and supplies it</p>
                  <form onSubmit={this.onSubmit} noValidate>
                    <div className={styles.formblock}>
                      <div className={styles.card_Details}>
                        <InfoWrapper errorStatus={errorStatus}>
                          <TextFieldGroup
                            id="cardNumber"
                            label="Card number"
                            onChange={this.onChange}
                            value={this.state.cardNumber}
                            field="cardNumber"
                            type="text"
                            error={errors.cardNumber}
                          />
                          <div className={styles.pickerRow}>
                            <DatePickerField
                              onChange={this.selectDate}
                              id="expiryDate"
                              label="Expiry date"
                              value = {this.state.expiryDate}
                              field="expiryDate"
                              error={errors.expiryDate}
                              minDate={minDate}
                            />
                          </div>
                          <TextFieldGroup
                            id="city"
                            label="City"
                            onChange={this.onChange}
                            value={this.state.city}
                            field="city"
                            type="text"
                            error={errors.city}
                          />
                          <TextFieldGroup
                            id="ccv"
                            label="CCV"
                            onChange={this.onChange}
                            value={this.state.ccv}
                            field="ccv"
                            type="text"
                            error={errors.ccv}
                          />
                        </InfoWrapper>
                      </div>
                      <InfoWrapper errorStatus={errorStatus}>
                        <TextFieldGroup
                          id="promoCode"
                          label="Promo code?"
                          onChange={this.onChange}
                          value={this.state.promoCode}
                          field="promoCode"
                          type="text"
                          error={errors.promoCode}
                        />
                      </InfoWrapper>
                    </div>
                    <div className={styles.errorContent}>
                      <span className={styles.errorStatus}>{ errors.cardNumber || errors.expiryDate || errors.city || errors.ccv || errors.promoCode }</span>
                    </div>
                    <div className={isDisabled === false ? styles.primaryBtn: ''}>
                      <PrimaryButton label="Sign up" disabled = { isDisabled }/>
                    </div>
                  </form>
              </li>
              <li className={styles.payementBlock}>
                <div className={styles.payementFormat}>
                  <h3>Family</h3>
                  <span>For big companies</span>
                  <h2>18.99</h2>
                  <p>A small river named Duden flows by their place and supplies<br/> it with the necessary regelialia </p>
                  <SecondaryButton label="Change" />
                </div>
              </li>
            </ul>
        </ContantWrapper>
      </BodyWrapper>
    );
  }
}

PaymentDetailsForm.propTypes = {
  globalNotificationAction: PropTypes.func,
};
export default connect(null, { globalNotificationAction })(PaymentDetailsForm);


