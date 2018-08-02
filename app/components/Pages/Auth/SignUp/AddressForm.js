import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InfoWrapper from 'components/Common/ContantWrapper';

import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';
import TextFieldGroup from 'components/Common/FormElements/TextBox';
import { alphaOnly } from 'components/Common/Validations/rules';
import { validateInput } from 'components/Common/Validations/Address';
import { globalNotificationAction } from 'actions/globalNotifyAction';

import styles from './style.scss';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrytName:'',
      postcode:'',
      address:'',
      city:'',
      errors: {},
      errorStatus: false,
      countryInfo: false,
      isDisable: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      countryInfo: true,
    }); 
    

    if (this.isValid()) {
      this.props.globalNotificationAction({
        type: 'success',
        message: 'Successfully created',
      });
      this.setState({
        errorStatus:false,
        isDisable: true,
        countryInfo: true,
        errors: false
      });
      this.resetMessage();
    } else {
      console.log('not Successfully')
      this.props.globalNotificationAction({
        type: '',
        message: 'Please enter your details ',
      });
      this.setState({
        errorStatus: true,
      });
      this.resetMessage();
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
    const { errors,errorStatus,countryInfo,countrytName,isDisable } = this.state;
    return (
       <React.Fragment>
        <h2>Your Address</h2>
        <p>A small river named Duden flows by their place and supplies<br/> it with the necessary regelialia </p>
        <form onSubmit={this.onSubmit} noValidate>
        <div className={styles.formblock}>
            <InfoWrapper errorStatus={errorStatus}>
              <TextFieldGroup
                id="countrytName"
                label="Country"
                onChange={this.onChange}
                value={countrytName}
                field="countrytName"
                type="text"
                error={errors.countrytName}
              />
            </InfoWrapper>
          </div>
          {countryInfo === true && <div className={styles.formblock}>
            <InfoWrapper errorStatus={errorStatus}>
              <div className={styles.searchIcon}>
                <span>Search</span>
                <TextFieldGroup
                  id="postcode"
                  label="Postcode"
                  onChange={this.onChange}
                  value={this.state.postcode}
                  field="postcode"
                  type="text"
                  error={errors.postcode}
                />
              </div>
              <TextFieldGroup
                id="address"
                label="Address"
                onChange={this.onChange}
                value={this.state.address}
                field="address"
                type="text"
                error={errors.address}
              />
              <TextFieldGroup
                id="city"
                label="City"
                onChange={this.onChange}
                value={this.state.city}
                field="city"
                type="text"
                error={errors.city}
              />
              
            </InfoWrapper>
          </div>}
          <div className={styles.errorContent}>
            <span className={styles.errorStatus}>{errors.countrytName || errors.postcode || errors.address || errors.city}</span>
          </div>
          <div className={isDisable === false ? styles.primaryBtn: ''}>
            <PrimaryButton label="Submit" disabled={isDisable} />
          </div>
        </form>
       </React.Fragment>
    );
  }
}

AddressForm.propTypes = {
  globalNotificationAction: PropTypes.func,
};
export default connect(null, { globalNotificationAction })(AddressForm);
