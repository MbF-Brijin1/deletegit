import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import TopPanel from 'components/Common/TopPanel';

class Index extends Component {
  render() {
    const { collapsMenu } = this.props;
    return (
      <React.Fragment>
        <TopPanel />
        <div className={`collaps-menu ${collapsMenu.collapse && 'collapsActive'}`}>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    collapsMenu: state.collapsMenu,
  };
}

export default connect(mapStateToProps, {})(Index);
