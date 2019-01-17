import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createStore } from 'redux';
import rootReducer from './store/reducer'
import { Provider } from 'react-redux';

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(rootReducer,reduxDevTool());

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

