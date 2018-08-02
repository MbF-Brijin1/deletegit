import React, { Component } from 'react';
import ResetForm from './Form';
import ContantWrapper from 'components/Common/MiddleContent';

import BodyWrapper from 'components/Common/BodyWrapper';
import CloseIcon from 'components/Common/FormCloseIcon';

import styles from './style.scss';

class ResetPassword extends Component {
  render() {
    return (
      <BodyWrapper>
          <ContantWrapper>
            <CloseIcon />
            <h3>Please enter your new password</h3>
            <p>A small river named Duden flows by their place and supplies<br/> it with the necessary regelialia </p>
              <ResetForm/>
          </ContantWrapper>
        </BodyWrapper>
    );
  }
}

export default ResetPassword;
