import React from 'react';

const PasswordVisibility = props => {
  const boxClass = ['passwordRevealer'];
  if (props.addClass) {
    boxClass.push('passwordRevealerOn');
  }
  return (
    <React.Fragment>
      {props.password !== '' ? (
        <span className={boxClass.join(' ')} onClick={props.showHandleClick} />
      ) : (
        <span className="revealerDefault" />
      )}
    </React.Fragment>
  );
};

export default PasswordVisibility;
