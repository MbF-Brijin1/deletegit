import React, { Component } from 'react';
import { connect } from 'react-redux';

import Humburger from 'components/Common/Humburger';

import styles from './style.scss';

const HumburgerAndLogo = props => (
  <div className={styles.humWithLogo}>
    <Humburger {...props} />
  </div>
);

export default HumburgerAndLogo;
