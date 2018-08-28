import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStore from './appStore';
import Header from './components/header';
import Footer from './components/footer';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from './container/App';


ReactDOM.render(
	<Provider store={AppStore}>
		<div>
			<Header/>
			<Router>
				<App/>
			</Router>
			<Footer/> 
		</div>
	</Provider>,
  document.getElementById('root')
);
