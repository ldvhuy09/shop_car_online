import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DynamicImport from './DynamicImport';
import { Progress } from 'mdbreact';
import Car from './Car';
import ProfileUser from './User';

const Home = (props) => (
  <DynamicImport load={() => import('./Home')}>
    {(Component) => Component === null
      ? <Progress value={75}>Loading</Progress>
      : <Component {...props} />}
  </DynamicImport>
);

const Search = (props) => (
  <DynamicImport load={() => import('./Search')}>
    {(Component) => Component === null
      ? <Progress value={75}>Loading</Progress>
      : <Component {...props} />}
  </DynamicImport>
);

// const ProfileUser = (props) => (
//   <DynamicImport load={() => import('./User')}>
//     {(Component) => Component === null
//       ? <Progress value={75}>Loading</Progress>
//       : <Component {...props} />}
//   </DynamicImport>
// );

export default class App extends Component {
	render() {
		return (
			<Switch>
				<div>
					<Route exact path='/' component={Home}/>
					<Route path='/cars' component={Car}/>
          <Route exact path='/search' component={Search}/>
          <Route path='/user' component={ProfileUser}/>
				</div>
			</Switch>
		)
	}
};

