import MenuApi from '../api/MenuApi';
import sendToStore from './doAction';
import { REQUEST_MENU, RECEIVE_MENU } from '../constants/action';

var MenuAction = {
	fetchMenu: () => {
		return (dispatch) => {
			sendToStore(dispatch,
				REQUEST_MENU,
				RECEIVE_MENU,
				MenuApi.fetch()
			)
		}
	}
};

export default MenuAction;