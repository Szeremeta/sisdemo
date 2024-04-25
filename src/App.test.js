import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './components/Product/Product';

describe('Product Component', () => {
  const props = {
    id: 1,
    description: 'Test Product',
    expiryDate: '2024-04-30',
    category: 'Test Category',
    price: 10.99,
    special: true,
  };

  it('renders product information correctly', () => {
    render(<Product {...props} />);
    expect(screen.getByText('Test Product'));
    expect(screen.getByText('Test Category'));
    expect(screen.getByText('£10.99'));
    expect(screen.getByText('ON SPECIAL!!'));
    expect(screen.getByText('Expiry Date: 2024-04-30'));
  });

  it('matches snapshot', () => {
    const wrapper = render(<Product {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});