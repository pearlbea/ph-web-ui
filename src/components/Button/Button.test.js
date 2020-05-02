import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {

  describe('default', () => {
    const defaultProps = {
      cta: 'Submit',
      onClick: jest.fn(),
      type: 'primary'
    };

    const renderComponent = (props) => {
      return render(<Button {...defaultProps} {...props} />)
    }
    it('should render the cta', () => {
      const component = renderComponent();
      expect(component.getByText('Submit'))
    })
  })

})