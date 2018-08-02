import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseStyles from 'helpers/baseStyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { buttonStyles, rippleColor } from 'helpers/customMDstyles';

const SocialButton = ({ label, disabled }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(baseStyles)}>
    <FlatButton
      disabled={disabled}
      style={label === 'Facebook' ? buttonStyles.facebookLable : buttonStyles.googleLable}
      type="submit"
      rippleColor={rippleColor}
    >
      {label}
    </FlatButton>
  </MuiThemeProvider>
);

SocialButton.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default SocialButton;
