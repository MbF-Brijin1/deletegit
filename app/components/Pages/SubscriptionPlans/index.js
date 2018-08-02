import React, { Component } from 'react';
import ContantWrapper from 'components/Common/MiddleContent';
import BodyWrapper from 'components/Common/BodyWrapper';
import CloseIcon from 'components/Common/FormCloseIcon';
import SubscribeContent from './SubscribeContent';

import styles from './style.scss';

const closeIcon = require('assets/images/close-icon.png');

class SubscriptionPlans extends Component {
  render() {
    return (
    	<BodyWrapper>
        <div className={styles.prodect_Details}>
          <ContantWrapper>
            <CloseIcon />
        		<SubscribeContent/>
          </ContantWrapper>
        </div>
      </BodyWrapper>
    );
  }
}

export default SubscriptionPlans;
