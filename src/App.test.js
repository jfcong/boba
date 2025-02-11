import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders input box', () => {
  render(<App />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

test('input box value changes', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {target: {value: 'test'}});
    expect(inputElement.value).toBe('test');
});

test('renders list', () => {
    render(<App />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
});

test('renders list items', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');
    const listElement = screen.getByRole('list');
    fireEvent.keyPress(inputElement, {key:'Enter'});
    const listItem = screen.getByText(/test/i);
    expect(listItem).toBeInTheDocument();
});
