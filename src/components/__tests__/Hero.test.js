import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../Hero';

test('Отображается заголовок и кнопка', () => {
  render(<Hero />);
  expect(screen.getByText('Welcome to Our Landing Page')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument();
});

test('Кнопка кликабельна', () => {
  render(<Hero />);
  const button = screen.getByText('Get Started');
  fireEvent.click(button);
  expect(button).toBeInTheDocument();
});
