import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {

  describe('default', () => {
    const onClick = jest.fn();
    const defaultProps = {
      children: 'Submit',
      onClick: onClick,
      type: 'primary'
    };

    const renderComponent = (props) => {
      return render(<Button {...defaultProps} {...props}></Button>)
    }

    it('should render the cta', () => {
      const component = renderComponent();
      expect(component.getByText('Submit'));
    });
    it('should display the cta trimmed and in title case', () => {
      const component = renderComponent({ children: 'get STARTED  ' });
      expect(component.getByText('Get started'));
    });
    it('should call the onClick function on click', () => {
      const component = renderComponent();
      userEvent.click(component.getByText('Submit'))
      expect(onClick).toHaveBeenCalled()
    })
  })

})