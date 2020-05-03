import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Use the `Primary` button for submitting data, going to the next page, or other major actions, and
 * the `Secondary` button to close modals, cancel form submissions, and other minor actions. 
 * Use the `Link` button inline. Text for all button types is title case.
 */
export const Button = ({ children, onClick, type }) => {

  const formatString = (buttonText) => {
    if (typeof buttonText === 'string') {
      const cleanText = buttonText.trim().toLowerCase();
      return cleanText.charAt(0).toUpperCase() + cleanText.slice(1)
    }
    return children;
  }

  return (
    <button className={`ph-button ${type}`} onClick={onClick}>{formatString(children)}</button>
  )
};

Button.propTypes = {
  /**
   * button text 
   */
  children: PropTypes.string,
  /**
   * button action
   */
  onClick: PropTypes.func.isRequired,
  /**
   * button style
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'link'])
}

Button.defaultProps = {
  children: 'Submit',
  type: 'primary'
}

export default Button;