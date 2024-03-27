import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('when user is authenticated', () => {
  let result;

  beforeEach(() => {
    result = render(<App />);
    fireEvent.input(
      result.container.querySelector('[class="nomDuUser"]'),
      {target: {value: 'Thomas'}},
    );
    fireEvent.click(result.queryByText('Login'));
  });

  test('On est dans la liste de pizza', () => {
    expect(window.location.pathname).toEqual('/pizza');
  })
})