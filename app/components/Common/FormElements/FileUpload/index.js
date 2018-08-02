import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

class CreateFormupload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldNotEmpty: false,
    };
    this.keyUpEvent = this.keyUpEvent.bind(this);
  }
  keyUpEvent(e) {
    if (e.target.value !== '') {
      this.setState({
        fieldNotEmpty: true,
      });
    } else {
      this.setState({
        fieldNotEmpty: false,
      });
    }
  }
  render() {
    const { onChange } = this.props;
    return (
      <div className={styles.forminput}>
        <input onChange={onChange} onKeyUp={this.keyUpEvent} type="file" accept="application/pdf" />
        <button>Upload</button>
      </div>
    );
  }
}

CreateFormupload.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CreateFormupload;
