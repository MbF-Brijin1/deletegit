import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { map } from 'lodash';

import CheckBox from 'components/Common/FormElements/CheckBox';

import style from './style.scss';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedPrice: 15,
      sampleArray: [
        {
          id: 0,
          title: 'EBIN STORE',
          message: 'This good friday, so selling price with low cast',
          price: 22.5,
        },
        {
          id: 1,
          title: 'CoffeDay',
          message: 'Say Good morning to Freshness',
          price: 35,
        },
        {
          id: 2,
          title: 'Best Tea',
          message: 'Where there is tea,there is hope',
          price: 55.7,
        },
      ],
    };
  }

  render() {
    const { addedPrice } = this.state;
    const cardList = map(this.state.sampleArray, (el, index) => (
      <div className={style.arrTable} key={index}>
        <div>
          <span>Shop Name : {el.id}</span>
          <div>Shop Name : {el.title}</div>
          <span>MESSAGE :</span>
          <h2>{el.message}</h2>
          <div>
            <div>Actual Price : {el.price} rs</div>
            <div>Discount : {addedPrice} rs</div>
          </div>
          <span>Offer Rate : {el.price - addedPrice} rs</span>
        </div>
      </div>
    ));
    return (
      <div className={style.baseContainer}>
        <div>
          <div>--------------------------------------------</div>
          <h3>Unit Tesing in a Array</h3>
          <div>--------------------------------------------</div>
        </div>
        <div className={style.respnseArray}>{cardList}</div>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    );
  }
}
export default AboutUs;
