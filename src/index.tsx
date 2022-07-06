import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar />
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
