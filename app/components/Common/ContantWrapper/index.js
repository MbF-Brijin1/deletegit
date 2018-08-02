import React, { Component } from 'react';

import styles from './style.scss';

class InfoWrapper extends Component {

  render() {
  	const { errorStatus } = this.props;
    return (
      <div className={errorStatus? [styles.infoWrapper, styles.errorStatus].join(' '): styles.infoWrapper}>
      	{this.props.children}
      </div>
    );
  }
}

export default InfoWrapper;