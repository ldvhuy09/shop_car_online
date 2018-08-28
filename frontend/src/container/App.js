import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DynamicImport from './DynamicImport';
import { Spinner, Progress } from 'mdbreact';
import Car from './Car';

const Home = (props) => (
  <DynamicImport load={() => import('./Home')}>
    {(Component) => Component === null
      ? <Progress value={75}></Progress>
      : <Component {...props} />}
  </DynamicImport>
)

export default class App extends Component {
	render() {
		return (
			<Switch>
				<div>
					<Route exact path='/' component={Home}/>
					<Route path='/cars' component={Car}/>
				</div>
			</Switch>
		)
	}
};

