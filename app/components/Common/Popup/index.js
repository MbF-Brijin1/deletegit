import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import PopupWrapper from './PopupWrapper';

import styles from './style.scss';


const PopupBlock = (props) => (
  <div className={styles.popupWrapper}>
  	<PopupWrapper>
  		{props.children}
  	</PopupWrapper>
  </div>
);

export default PopupBlock;
