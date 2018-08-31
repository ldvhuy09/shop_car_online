import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Progress } from 'mdbreact';
import DynamicImport from '../DynamicImport';

const DetailCar = (props) => (
  <DynamicImport load={() => import('./DetailCar')}>
    {(Component) => Component === null
      ? <Progress value={75}>Loading</Progress>
      : <Component {...props} />}
  </DynamicImport>
);

const GalleryCar = (props) => (
	<DynamicImport load={() => import('./GalleryCar')}>
		{(Component) => Component === null
			? <Progress value={75}>Loading</Progress>
			: <Component {...props} />}
	</DynamicImport>
);

const Car = () => (
  <Switch>
    <div>
      <Route exact path='/cars/:id' component={DetailCar}/>
      <Route exact path='/cars/:field/:value' component={GalleryCar}/>
    </div>
  </Switch>
);

export default Car;