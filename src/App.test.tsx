import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders initial page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Frontend Challenge - Marvel Characters/i);
  expect(linkElement).toBeInTheDocument();
});
