import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('Отображается текст копирайта', () => {
  render(<Footer />);
  expect(screen.getByText(/© 2025 Landing Page/)).toBeInTheDocument();
});
