import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { map } from 'lodash';

import styles from './style.scss';

class LeftPanel extends Component {
  render() {
    const { collapse } = this.props.collapsMenu;
    return (
      <div className={styles.leftContent}>
        <aside className={styles.sidebarContainer}>
          <ul>
            <li>
              <Link className={[styles.iconAnalyst, collapse && styles.hideNav].join(' ')} to="#">
                <span>Analyst</span>
              </Link>
            </li>
            <li>
              <Link className={[styles.iconBio, collapse && styles.hideNav].join(' ')} to="#">
                <span>Analyst</span>
              </Link>
            </li>
            <li>
              <Link className={[styles.iconReports, collapse && styles.hideNav].join(' ')} to="#">
                <span>Analyst</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    collapsMenu: state.collapsMenu,
  };
}

export default connect(mapStateToProps, {})(LeftPanel);
