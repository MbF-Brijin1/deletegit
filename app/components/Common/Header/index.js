import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fade from 'components/Common/Animation/fade';
import GlobalMessage from 'components/Common/GlobalMessage';
import Logo from './Logo';
import { isEmpty } from 'lodash';
// import logo from 'assets/images/logo.svg';
import styles from './style.scss';

class Header extends Component {
  render() {
    const { glabalError } = this.props;
    const { message, type } = glabalError;
    return (
      <header>
        <div className="container">
        </div>
        {!isEmpty(message) && (
          <Fade visible={!isEmpty(message)}>
            <GlobalMessage message={message} successMessage={type} />
          </Fade>
        )}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    glabalError: state.globalAction,
  };
}
export default connect(mapStateToProps, {})(Header);
