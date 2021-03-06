import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';

const mount = (element) => {
    ReactDOM.render(<App />, element)
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#devRoot');
    if (devRoot) {
        mount(devRoot);
    }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { mount };