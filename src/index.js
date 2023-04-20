import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.cjsx';



const rerenderEntireTree = (state) => {
	ReactDOM.render(
		<App/>,
		document.getElementById('root')
	)
}

rerenderEntireTree()

