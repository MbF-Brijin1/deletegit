import React, { Component } from 'react';
import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';
import ProductDetails from './productDetails';
import { Link } from 'react-router-dom';

import styles from './style.scss';


class SubscribeContent extends Component {

  render() {
    return (
     	<div className={styles.SubscribeBlock}>
     		<ProductDetails/>
     	</div>
    );
  }
}

export default SubscribeContent;
