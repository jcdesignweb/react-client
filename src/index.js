import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Page from './containers/Page'
import App from './App'
import './res/index.css'
import configureStore from './store/configureStore'
import registerServiceWorker from './res/registerServiceWorker'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
