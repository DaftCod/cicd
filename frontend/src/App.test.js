import { render, screen } from '@testing-library/react';
import App from './App';
import { getPostData } from './api/api-connector';

jest.mock('./api/api-connector');

beforeEach(() => {
  getPostData.mockResolvedValue([]);
});

test('shows empty state when there are no posts', async () => {
  render(<App />);

  expect(await screen.findByText(/нет постов/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /добавить пост/i })).toBeInTheDocument();

  expect(getPostData).toHaveBeenCalledTimes(1);
});
