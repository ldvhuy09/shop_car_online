
import DispatchAction from './dispatchAction';

const sendToStore = (dispatch, requestType, receiveType, service) => {
	var dispatchAct = new DispatchAction(requestType, dispatch);
	dispatchAct.setType(receiveType);
	Promise.all([service]).then(
		dispatchAct.loadingSuccess,
		dispatchAct.loadingFailed
	);
};

export default sendToStore;