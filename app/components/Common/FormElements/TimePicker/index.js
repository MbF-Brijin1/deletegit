import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseStyles from 'helpers/baseStyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePicker from 'material-ui/TimePicker';
import TextFieldGroup from 'components/Common/FormElements/TextBox';

import styles from './style.scss';

const pickerStyle = {
  textFieldStyle: {
    left: 0,
    top: 0,
    height: '50px',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    zIndex: '1',
    color: '#000000',
  },
};

class TimePickerField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, date) {
    this.props.onChange(date);
  }
  render() {
    const { onChange, id, label, errors, dateValue, maxDate } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseStyles)}>
        <div className={styles.datePickerAlign}>
          <TextFieldGroup
            id={id}
            error={errors}
            label={label}
            onChange={() => console.log(1)}
            value={dateValue}
            field={id}
            type="text"
          />
          <TimePicker
            hintText="12hr Format with auto ok"
            autoOk
            minutesStep={5}
            onChange={this.handleChange}
            textFieldStyle={pickerStyle.textFieldStyle}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

TimePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  errors: PropTypes.string,
  label: PropTypes.string,
  dateValue: PropTypes.string,
  maxDate: PropTypes.object,
};

export default TimePickerField;
