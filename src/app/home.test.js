import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders download button', () => {
  render(<Home />);
  const downloadButton = screen.getByText(/Download/i);
  expect(downloadButton).toBeInTheDocument();
});

test('download button has correct attributes', () => {
  render(<Home />);
  const downloadButton = screen.getByText(/Download/i);
  expect(downloadButton).toHaveAttribute('href', '/rom.jpg');
  expect(downloadButton).toHaveAttribute('download', '/rom.jpg');
  expect(downloadButton).toHaveAttribute('target', '_blank');
});
