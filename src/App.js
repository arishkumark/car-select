import React from 'react';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { Container, AppBar } from '@mui/material';
import { IntlProvider, FormattedMessage } from "react-intl";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import locale_en from './languages/en';
import locale_de from './languages/de';
import Dashboard from './features/Dashboard';
import CustomAppBar from './common/CustomAppBar';
import SelectCar from './features/selectCar/SelectCar';
import './App.css';

const data = {
  'en': locale_en,
  'de': locale_de
};
const locale = navigator.language.split(/[-_]/)[0];

function App() {
  const navigate = useNavigate();

  const handleChange = (type) => {
    navigate(`/${type}`);
  }

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={data[locale]}>
        <Container maxWidth={false} disableGutters data-testid="container">
          <CustomAppBar onChange={handleChange} />
          <Routes>
            <Route path="/" element={<Dashboard onChange={handleChange} />} />
            <Route path="select" element={<SelectCar />} />
          </Routes>
        </Container>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
