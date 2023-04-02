import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { TodoProvider } from './context/todo-provider';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <React.StrictMode>
      <Helmet>
        <title>
          Awesome todo tracker
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TodoProvider>
          <App />
        </TodoProvider>
      </ThemeProvider>
    </React.StrictMode>
  </HelmetProvider>,
)
