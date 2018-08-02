import React, { Component } from 'react';


import styles from './style.scss';

const closeIcon = require('assets/images/close-icon.png');

class CloseIcon extends Component {
	constructor(props) {
	super(props);
		this.state = {};
		this.handleClose = this.handleClose.bind(this);
	}
	handleClose(){
		this.props.handleClose();
	}
  render() {
    return (
      	<div className={styles.close_Icon} onClick={this.handleClose}>
        	<img src={closeIcon} alt="close-icon" className="close-icon" />
        </div>
    );
  }
}

export default CloseIcon;
