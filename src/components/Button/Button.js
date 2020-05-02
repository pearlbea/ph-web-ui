import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Use the `Primary` button for submitting data, going to the next page, or other major actions, and
 * the `Secondary` button to close modals, cancel form submissions, and other minor actions. 
 * Use the `Link` button inline. Text for all button types is title case.
 */
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