import React, { Component } from 'react';
import SecondaryButton from 'components/Common/FormElements/Button/SecondaryButton';
import { Link } from 'react-router-dom';

import styles from './style.scss';


class ProductDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 'month',
		};
	}

	tabHandleClick(value) {
		this.setState({
			activeTab: value
		})
	}

  render() {
  	const { activeTab } = this.state;
    return (
    	<React.Fragment>
	    	<div className={styles.subscribeTab}>
	        <ul>
	          <li onClick = {this.tabHandleClick.bind(this, 'month')}  className={activeTab === 'month' ? styles.active: ''}>Monthly</li>
	          <li onClick = {this.tabHandleClick.bind(this, 'year')} className={activeTab === 'year' ? styles.active: ''} >Yearly</li>
	        </ul>
	      </div>
	     	{activeTab === 'month' && <ul className={styles.monthTabContent}>
	 				<li className={styles.SubscribeDetails}>
	   				<h3>Basic</h3>
	   				<span>For a taste our product</span>
	   				<h2>$0</h2>
	   				<p >always free</p>
	   				<div className={styles.infoPlans}>Far far away, behind the word mountains, far from the country Vokalia
	   				</div>
	   				<ul>
	   					<li>Item one</li>
	   					<li>Item two</li>
	   					<li>Item three</li>
	   				</ul>
	   				<div className={styles.primary_btn}>
	            <SecondaryButton label="Select" />
	          </div>
	        </li>
	        	<li className={styles.SubscribeDetails}>
	   				<h3>One Child</h3>
	   				<span>For a taste our product</span>
	   				<h2>$8.99</h2>
	   				<p >per month</p>
	   				<div className={styles.infoPlans}>Far far away, behind the word mountains, far from the country Vokalia
	   				</div>
	   				<ul>
	   					<li>Item one</li>
	   					<li>Item two</li>
	   					<li>Item three</li>
	   				</ul>
	   				<div className={styles.primary_btn}>
	            <SecondaryButton label="Select" />
	          </div>
	        </li>
	        	<li className={styles.SubscribeDetails}>
	   				<h3>Family</h3>
	   				<span>For a taste our product</span>
	   				<h2>$18.99</h2>
	   				<p >per month</p>
	   				<div className={styles.infoPlans}>Far far away, behind the word mountains, far from the country Vokalia
	   				</div>
	   				<ul>
	   					<li>Item one</li>
	   					<li>Item two</li>
	   					<li>Item three</li>
	   				</ul>
	   				<div className={styles.primary_btn}>
	            <SecondaryButton label="Select" />
	          </div>
	        </li>
	 			</ul>}
 				{activeTab === 'year' && <ul className={styles.monthTabContent}>
	 				<li className={styles.SubscribeDetails}>
	   				<h3>Basic</h3>
	   				<span>For a taste our product</span>
	   				<h2>$0</h2>
	   				<p >always free</p>
	   				<div className={styles.infoPlans}>Far far away, behind the word mountains, far from the country Vokalia
	   				</div>
	   				<ul>
	   					<li>Item one</li>
	   					<li>Item two</li>
	   					<li>Item three</li>
	   				</ul>
	   				<div className={styles.primary_btn}>
	            <SecondaryButton label="Select" />
	          </div>
	        </li>
	        	<li className={styles.SubscribeDetails}>
	   				<h3>One Child</h3>
	   				<span>For a taste our product</span>
	   				<h2>$55.2</h2>
	   				<p >per year</p>
	   				<div className={styles.infoPlans}>Far far away, behind the word mountains, far from the country Vokalia
	   				</div>
	   				<ul>
	   					<li>Item one</li>
	   					<li>Item two</li>
	   					<li>Item three</li>
	   				</ul>
	   				<div className={styles.primary_btn}>
	            <SecondaryButton label="Select" />
	          </div>
	        </li>
	        	<li className={styles.SubscribeDetails}>
	   				<h3>Family</h3>
	   				<span>For a taste our product</span>
	   				<h2>$150.2</h2>
	   				<p >per year</p>
	   				<div className={styles.infoPlans}>Far far away, behind the word mountains, far from the country Vokalia
	   				</div>
	   				<ul>
	   					<li>Item one</li>
	   					<li>Item two</li>
	   					<li>Item three</li>
	   				</ul>
	   				<div className={styles.primary_btn}>
	            <SecondaryButton label="Select" />
	          </div>
	        </li>
				</ul>}
	 		</React.Fragment>
    );
  }
}

export default ProductDetails;
