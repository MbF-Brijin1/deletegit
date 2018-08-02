import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import styles from './style.scss';

class Tab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 1,
      content: this.props.data[0].body,
    };
  }

  onTabChange(currentIndex, content) {
    this.setState({
      currentIndex,
      content,
    });
  }

  render() {
    const { currentIndex, content } = this.state;
    const { data } = this.props;
    const tabList = map(data, (el, i) => (
      <li
        key={i}
        className={currentIndex === el.id ? styles.active : ''}
        onClick={this.onTabChange.bind(this, el.id, el.body)}
      >
        {el.title}
      </li>
    ));

    return (
      <div className={styles.tabRow}>
        <ul className="clearfix">{tabList}</ul>
        <div className={styles.tabContentWrap}>{content}</div>
      </div>
    );
  }
}

Tab.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Tab;
