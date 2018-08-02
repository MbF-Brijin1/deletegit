import React, { Component } from 'react';
import BodyWrapper from 'components/Common/BodyWrapper';
import CloseIcon from 'components/Common/FormCloseIcon';
import ContantWrapper from 'components/Common/MiddleContent';
import { Link } from 'react-router-dom';

import Footer from 'components/Common/Footer';
import InfoWrapper from 'components/Common/ContantWrapper';

import SignupForm from './Form';

import styles from './style.scss';

class SignUp extends Component {
  render() {
    return (
        <BodyWrapper>
          <ContantWrapper>
            <CloseIcon />
            <SignupForm />
            <div className={styles.link_test}>
              <p>Already have an account? <Link to="/login">Sign In</Link></p>
            </div>
          </ContantWrapper>
        </BodyWrapper>
    );
  }
}

export default SignUp;
