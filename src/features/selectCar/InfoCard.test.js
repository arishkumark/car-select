import { render } from '@testing-library/react';
import InfoCard from './InfoCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';


test('Info card renders with proper content', () => {
  const { getByText } =  render(
    <ThemeProvider theme={theme}>
      <InfoCard data={{ make: 'BMW' }} />
    </ThemeProvider>
  );
  expect(getByText(/Make:/i)).toBeInTheDocument();
})
