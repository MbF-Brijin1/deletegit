import React, { Component } from 'react';
import CloseIcon from 'components/Common/FormCloseIcon';
import PaymentDetailsForm from './Form';

import styles from './style.scss';

class PaymentDetails extends Component {

  render() {
    return (
      <div>
        <PaymentDetailsForm />
      </div>
    );
  }
}

export default PaymentDetails;