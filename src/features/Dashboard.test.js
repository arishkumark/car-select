import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';


test('Dashboard renders with static content', () => {
  const { getByText } =  render(
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
  );
  expect(getByText(/Change now/i)).toBeInTheDocument();
})
