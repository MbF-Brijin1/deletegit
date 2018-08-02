import React, { Component } from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';

import { styles } from './style.scss';

class PasswordChecker extends Component {
    render(){
      const { password } = this.props;
      const scoreValue = zxcvbn(password);
      let width;
      let color;
      switch(scoreValue.score){
        case 0:
          width = "0%";
          color = 'transparent';
          break;
        case 1:
          width = "25%";
          color = '#d0021b';
          break;
        case 2:
          width = "50%";
          color = '#ff8000'
          break;
        case 3:
          width = "75%";
          color = '#ff5400';
          break;
        case 4:
          width = "100%";
          color = '#50e6d9';
          break;
      }
      return(
        <div>
          <div style={{width:'56px', height:15, borderRadius:50, backgroundColor: '#6f6b99', position: 'absolute',zIndex: '999',right: '40px',top: '17px',}}>
            <div style={{width:width, height:15, borderRadius:50, backgroundColor:color,transition: 'width 0.3s ease-in'}} />
          </div>
        </div>
      );
    }
}

PasswordChecker.propTypes = {
  password:PropTypes.string
};

export default PasswordChecker;
