import { render, screen } from '@testing-library/react';
import React from 'react'
import App from '../App';

test('renders app homepage', () => {
  render(<App />);
  const element = screen.getByText(/Social/i);
  expect(element).toBeInTheDocument();
});

