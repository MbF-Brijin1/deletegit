import React, { Component } from 'react';


import styles from './style.scss';

class Logo extends Component {
  render() {
    return (
      	<div className={styles.logo}>
        	<i className="fas fa-square-full">&nbsp; </i><span>Nino City</span>
        </div>
    );
  }
}

export default Logo;