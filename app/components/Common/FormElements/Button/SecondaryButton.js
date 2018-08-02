import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseStyles from 'helpers/baseStyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { buttonStyles, rippleColor, hoverColor } from 'helpers/customMDstyles';
import { RotateSpinLoader } from 'react-css-loaders';


const SecondaryButton = ({ label, disabled, enableLoader, onClick, fluid }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(baseStyles)}>
    <FlatButton
      disabled={disabled}
      style={buttonStyles.secondaryLabel}
      type="submit"
      rippleColor={rippleColor}
      onClick={onClick}
      hoverColor={hoverColor}
    >
      {enableLoader ? (
        <RotateSpinLoader
          color="black"
          style={{
            border: '2px solid rgb(255, 204, 0)',
            borderLeft: '3px solid white',
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

SecondaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  enableLoader: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SecondaryButton;
