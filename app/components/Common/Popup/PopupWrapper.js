import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

const closeIcon = require('assets/images/close-icon.png');
const PopupWrapper = (props) => (
 	<div id="popupAlign" className={styles.popupContainer}>
    {props.children}
	</div>
);

export default PopupWrapper;
