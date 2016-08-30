// Node Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// Helpers
import './index.css';
// Component
import App from './App';
import rootReducer from './reducers/index';


let store = createStore(rootReducer);


const AppComponent = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(
  AppComponent,
  document.getElementById('root')
);
