import { render, screen, waitForElement } from '@testing-library/react';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import SelectCar from './SelectCar';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import Dashboard from '../Dashboard';


describe('Select car component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="select" element={<SelectCar />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    );
  })

  it('Fetches brand data', async() => {
    const cardElement = await waitForElement(() => screen.getByText(/Please select the brand and model/i));
    expect(cardElement).toBeInTheDocument();
  });
});
