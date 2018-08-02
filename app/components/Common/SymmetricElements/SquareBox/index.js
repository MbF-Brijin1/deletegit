import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const SquareBox = ({ children }) => <div className={styles.registerForm}>{children}</div>;

SquareBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SquareBox;
