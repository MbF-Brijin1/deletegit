import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseStyles from 'helpers/baseStyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { buttonStyles, rippleColor } from 'helpers/customMDstyles';

const Button = ({ label, disabled }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(baseStyles)}>
    <FlatButton disabled={disabled} style={buttonStyles.labelStyle} type="submit" rippleColor={rippleColor}>
      {label}
    </FlatButton>
  </MuiThemeProvider>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
