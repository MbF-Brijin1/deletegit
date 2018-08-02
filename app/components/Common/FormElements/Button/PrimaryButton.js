import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseStyles from 'helpers/baseStyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { buttonStyles, rippleColor, hoverColor } from 'helpers/customMDstyles';
import { RotateSpinLoader } from 'react-css-loaders';

const PrimaryButton = ({ label, disabled, enableLoader, onClick }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(baseStyles)}>
    <FlatButton
      disabled={disabled}
      style={disabled ? buttonStyles.disableLabel: buttonStyles.primaryLabel}
      type="submit"
      rippleColor={rippleColor}
      onClick={onClick}
      hoverColor={hoverColor}
    >
      {enableLoader ? (
        <RotateSpinLoader
          color="black"
          style={{
            border: '3px solid rgba(255, 255, 255, 0.2)',
            borderLeft: '3px solid black',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '28px',
            height: '28px',
            margin: '-14px 0px 0px -14px',
          }}
        />
      ) : (
        label
      )}
    </FlatButton>
  </MuiThemeProvider>
);

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  enableLoader: PropTypes.bool,
  onClick: PropTypes.func,
};

export default PrimaryButton;
