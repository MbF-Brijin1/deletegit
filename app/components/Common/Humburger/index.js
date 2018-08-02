import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './style.scss';

export class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.humburgerClick = this.humburgerClick.bind(this);
  }
  humburgerClick() {
    this.setState({
      active: !this.state.active,
    });
    this.props.collapsibleActions({ collapse: !this.state.active });
  }
  render() {
    return (
      <div className={styles.humburger} onClick={this.humburgerClick}>
        <i className="fal fa-align-right" />
      </div>
    );
  }
}

export default Hamburger;
