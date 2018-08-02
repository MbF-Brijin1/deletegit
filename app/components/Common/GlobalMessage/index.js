import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const GlobalMessage = ({ message, successMessage }) => (
  <div className={[styles.globalMessage, successMessage && styles.successMessage].join(' ')}>
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto">{message}</div>
      </div>
    </div>
  </div>
);

GlobalMessage.propTypes = {
  message: PropTypes.string,
  successMessage: PropTypes.string,
};

export default GlobalMessage;
