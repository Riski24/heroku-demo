import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

$.get('api/working').then(function(response) {
	ReactDOM.render(
	  <App working={response} />, document.getElementById('app')
	);
});
