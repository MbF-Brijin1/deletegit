import React, { Component } from 'react';

import PopupBlock from 'components/Common/Popup';


import ForgotForm from './Form';
import CloseIcon from 'components/Common/FormCloseIcon';

import styles from './style.scss';

class ForgotPassword extends Component {
	constructor(props) {
	    super(props);
	    this.state = {};
	    this.handleClose = this.handleClose.bind(this);
	  }
	handleClose() {
		this.props.handleClose();
	}
  render() {
    return (
      <PopupBlock>
      	<div className= {styles.closeforgotForm}>
      		<CloseIcon handleClose={this.handleClose} />
      	</div>
        <h3>Did you forgot your password?</h3>
        <h6>Enter your registered email address to reset your password</h6>
        <ForgotForm />
      </PopupBlock>
    );
  }
}

export default ForgotPassword;
