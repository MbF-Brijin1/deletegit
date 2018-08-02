import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

class Fade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classVisible: false,
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        classVisible: true,
      });
    }, 300);
  }
  render() {
    const { children, visible } = this.props;
    const { classVisible } = this.state;
    const className = cx({
      fadeElement: true,
      activeElement: classVisible,
    });
    return <div className={className}>{children}</div>;
  }
}

Fade.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node,
};

export default Fade;
