import React, { Component } from 'react';

import styles from './style.scss';

class ContantWrapper extends Component {

  render() {
    return (
      <div className={styles.contant_wrapper}>
      	{this.props.children}
      </div>
    );
  }
}

export default ContantWrapper;