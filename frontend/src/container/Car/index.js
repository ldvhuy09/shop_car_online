import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Progress } from 'mdbreact';
import DynamicImport from '../DynamicImport';

const DetailCar = (props) => (
  <DynamicImport load={() => import('./DetailCar')}>
    {(Component) => Component === null
      ? <Progress value={75}></Progress>
      : <Component {...props} />}
  </DynamicImport>
)

const Car = () => (
  <Switch>
    <div>
      <Route exact path='/cars/:id' component={DetailCar}/>
    </div>
  </Switch>
);

export default Car;