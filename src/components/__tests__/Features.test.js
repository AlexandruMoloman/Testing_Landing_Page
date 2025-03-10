import { render, screen } from '@testing-library/react';
import Features from '../Features';

test('Отображается заголовок и список преимуществ', () => {
  render(<Features />);
  expect(screen.getByText('Our Features')).toBeInTheDocument();
  expect(screen.getByText('Fast')).toBeInTheDocument();
  expect(screen.getByText('Secure')).toBeInTheDocument();
  expect(screen.getByText('Reliable')).toBeInTheDocument();
});
