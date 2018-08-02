import React, { Component } from 'react';

import styles from './style.scss';

const BodyWrapper = (props) => <div className={styles.outer_wrapper}>
	{props.children}
</div>;

export default BodyWrapper;