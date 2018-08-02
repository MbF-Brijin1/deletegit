import React, { Component } from 'react';
import MenuList from 'components/Common//Menu';
import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';

import styles from './style.scss';
import MailForm from './CheckMail';

const appStore = require('assets/images/appstore.png');
const googleStore = require('assets/images/googleplay.png');
const realspace = require('assets/images/realspace.png');
class Dashboard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        formOpen: false
      }
      this.resendCode = this.resendCode.bind(this);
      this.handleClose = this.handleClose.bind(this);
  }
  resendCode() {
    this.setState({
      formOpen: true
    });
  }
  handleClose(){
    this.setState({
      formOpen: false
    });
  }
  render() {
    return (
      <div className={styles.dashboardWrapper}>
      <header>
        <MenuList/>
      </header>
        <div className={styles.dashbordContent}>
          <h2>Nearly there! Activate your account</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
          <ul>
            <li><Link to="/forget-password"><img src={appStore} alt="close-icon" className="close-icon" /></Link></li>
            <li><Link to="/forget-password"><img src={googleStore} alt="close-icon" className="close-icon" /></Link></li>
          </ul>
          {/*<div className={styles.primary_btn}>
                      <PrimaryButton label="Resend Code" />
                    </div>*/}
          <p>Got any notes? <a onClick = {this.resendCode}>Resend Code</a></p>
        </div>
        <figure>
          <img src={realspace} alt="close-icon" className="close-icon" />
        </figure>
        {this.state.formOpen === true && <MailForm handleClose={this.handleClose}/> }
      </div>
    );
  }
}

export default Dashboard;
