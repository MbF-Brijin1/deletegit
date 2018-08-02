import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Common/FormElements/Button/PrimaryButton';


import styles from './style.scss';

class MenuList extends Component {
 

  render() {
    
    return (
      <div className={styles.menus}>
        <ul>
          <li>Menu One</li>
          <li>Menu Two</li>
          <li>Menu Three</li>
          <li>
            <div className={styles.primary_btn}>
              <Link to ="/login"><PrimaryButton label="Logout" /></Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuList;
