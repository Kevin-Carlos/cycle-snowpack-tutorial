import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";
import { App } from "./pages/app";
import { GlobalStyles } from 'common/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
