import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const FormMiddleAlign = ({ children }) => <div className={styles.formWrapper}>{children}</div>;

FormMiddleAlign.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormMiddleAlign;
