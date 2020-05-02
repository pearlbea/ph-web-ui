import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
// types
// primary, secondary, link

// states
// active/hover/focus
// 

const Button = ({ cta, onClick }) => (
  <button className='ph-button'>{cta}</button>
);

Button.propTypes = {
  cta: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;