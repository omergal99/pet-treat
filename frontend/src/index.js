import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/AppStore';

import './assets/css/index.scss';
import App from './App';
import * as serviceWorker from './service-worker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


navigator.serviceWorker.addEventListener('push', function (event) {
    console.log(event);
    console.log(event.data);
    if (event.data) {
        console.log('222222 This push event has data: ', event.data.text());
    } else {
        console.log('222222 This push event has no data.');
    }

    // const promiseChain = window.registration.showNotification('Hello, World.');

    // event.waitUntil(promiseChain);
});

window.self.addEventListener('push', function (event) {
    console.log(event);
    console.log(event.data);
    if (event.data) {
        console.log('333333 This push event has data: ', event.data.text());
    } else {
        console.log('333333 This push event has no data.');
    }

    // const promiseChain = window.registration.showNotification('Hello, World.');

    // event.waitUntil(promiseChain);
});