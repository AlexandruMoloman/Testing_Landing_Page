import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Рендерится заголовок и ссылки', () => {
  render(<Header />);
  expect(screen.getByText('Landing Page')).toBeInTheDocument();
  expect(screen.getByText('Features')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});
