import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

const AppStore = createStore (
	reducers,
	applyMiddleware(thunk)
);

export default AppStore;