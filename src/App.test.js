import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';

test('Renders header element', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/©/i);
  expect(linkElement).toBeInTheDocument();
});

test('Reads config.json', () => {
  render(<Router><App /></Router>);
  expect(config.siteName).toBeDefined();
  expect(config.siteName).not.toMatch('');
});
