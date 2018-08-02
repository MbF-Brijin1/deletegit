import React, { Component } from 'react';
import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';
import CheckBox from 'components/Common/FormElements/CheckBox';
import { Link } from 'react-router-dom';


import styles from './style.scss';

class ConformBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDisabled: true
		}
		this.checkOption = this.checkOption.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	checkOption (e) {
		if (e.target.checked) {
      this.setState({
      	isDisabled: false
      });
    } else {
      this.setState({
      	isDisabled: true
      });
    }

	}
	onSubmit() {
		this.setState({
			isDisabled: false
    });
	}

  render() { 
  	const {  isDisabled } = this.state;
    return (
      <div className={styles.agreementSection}>
      	<ul>
					<li>
						<div className={styles.checkedBox}><CheckBox id="privacy" label = '' onChange={this.checkOption} /></div>
          	I agree to the <Link to="/register">privacy policy</Link>
          </li>
					<li><div className={styles.checkedBox}><CheckBox id="terms" label = '' onChange={this.checkOption} /></div>
						I agree to the <Link to="/register">terms and conditions</Link> 
					</li>
					<li><div className={styles.checkedBox}><CheckBox id="product" label = '' onChange={this.checkOption} /></div>
						I am happy to be contacted about new products and features
					</li>
				</ul>
				<div className={isDisabled === false ? styles.primaryBtn : styles.conformBtn }>
				  <PrimaryButton label="Confirm" onSubmit = {this.onSubmit} disabled={isDisabled}/>
				</div>
      </div>
    );
  }
}

export default ConformBox;