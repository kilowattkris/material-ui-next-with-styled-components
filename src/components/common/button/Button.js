import React from 'react';
import PropTypes from 'prop-types';
import MaterialUIButton from 'material-ui/Button';

const Button = (props) => {
  return (
      <MaterialUIButton raised={props.raised} onTouchTap={props.onTouchTap} className={props.className}>{props.children}</MaterialUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onTouchTap: PropTypes.func,
  raised: PropTypes.bool,
  disabled: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  other: PropTypes.bool
};

export default Button;
