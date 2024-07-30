import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//je sais pas pourquoi de render est barré je suppose que c'est parce que la bibliothèque n'utilise plus ce terme pour renvoyer les eléments