import React, { Component } from 'react';
import { connect } from 'react-redux';

// import UserMenu from 'components/Common/UserMenu';
import { collapsibleActions } from 'actions/CollapsibleMenu';

import HumburgerWithLogo from './HumburgerAndLogo';

const TopPanel = props => (
  <div>
    <div className="row">
      <div className="col-2 whiteBg leftNav">
        <HumburgerWithLogo {...props} />
      </div>
      {/* <div className="col-10">
        <Header userAlign>
          <UserMenu />
        </Header>
      </div> */}
    </div>
  </div>
);

export default connect(null, { collapsibleActions })(TopPanel);
