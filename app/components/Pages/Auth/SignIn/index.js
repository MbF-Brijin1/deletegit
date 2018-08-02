import React, { Component } from 'react';
import SigninForm from './Form';
import ContantWrapper from 'components/Common/MiddleContent';

import BodyWrapper from 'components/Common/BodyWrapper';
import CloseIcon from 'components/Common/FormCloseIcon';

import styles from './style.scss';

class Signin extends Component {

  render() {
    return (
      <BodyWrapper>
        <ContantWrapper>
          <CloseIcon />
          <h2>Sign in</h2>
          <p>A small river named Duden flows by their place and supplies<br/> it with the necessary regelialia </p>
            <SigninForm/>
        </ContantWrapper>
        </BodyWrapper>
    );
  }
}

export default Signin;
