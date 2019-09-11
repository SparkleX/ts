import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './index.reducer'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));