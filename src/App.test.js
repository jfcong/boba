import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('add item to list', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test input' } });
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    const listItem = screen.getByText(/test input/i);
    expect(listItem).toBeInTheDocument();
});
