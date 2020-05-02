import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ cta, onClick, type }) => (
  <button className={`ph-button ${type}`}>{cta}</button>
);

Button.propTypes = {
  cta: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'link'])
}

Button.defaultProps = {
  type: 'primary'
}

export default Button;