import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'

render(
  <Provider store={store}>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'),
);
