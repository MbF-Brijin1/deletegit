import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import classnames from 'classnames/bind';

import Select from 'react-select';
import styles from './style.scss';

const cx = classnames.bind(styles);

class SelectDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      isAnimated: false,
    };
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.selectChange(selectedOption.value);
  };

  render() {
    const { errorStatus, menuItem, menuValue, id, error, label, value, selectLabel, reduceBottom } = this.props;
    const menuGroup = menuItem.map((k, index) => ({ label: k, value: menuValue[index] }));
    const className = cx({
      multiSelectRowWrap: true,
      active: this.state.open,
    });
    const { selectedOption, isAnimated } = this.state;
    const selectedValue = selectedOption && selectedOption.value;
    return (
      <div className={[styles.dropAlign, reduceBottom && styles.reduceBottom].join(' ')}>
        <Select
          name="Test"
          placeholder={selectLabel}
          onChange={this.handleChange}
          options={menuGroup}
          value={value !== '' ? value : selectedValue}
        />
        {error && value === '' ? <span className={styles.helpBlock}>{error}</span> : ''}
      </div>
    );
  }
}

SelectDropDown.propTypes = {
  selectChange: PropTypes.func,
  errorStatus: PropTypes.string,
  menuItem: PropTypes.array,
  menuValue: PropTypes.array,
  id: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  selectLabel: PropTypes.string,
  reduceBottom: PropTypes.bool,
};

export default SelectDropDown;
