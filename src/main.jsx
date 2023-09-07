import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./assets/fonts/StandardStencil-Bold.otf"
import "./assets/fonts/Tele2DisplaySerif-Bold.otf"
import "./assets/fonts/Tele2DisplaySerif-Regular.otf"
import "./assets/fonts/Tele2TextSans-Bold.otf"
import "./assets/fonts/Tele2TextSans-Regular.otf"
import "./assets/styles/index.sass"
import {createTheme, ThemeProvider} from "@mui/material";
import {store} from "./store/store.js"
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom";

const theme = createTheme({
    typography: {
        fontFamily: 'Tele2TextSans'
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename={"/admin"}>
          <Provider store={store}>
              <ThemeProvider theme={theme}>
                  <App />
              </ThemeProvider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
