
module.exports = function(type, dispatch) {
	this.type = type;
	this.dispatch = dispatch;
	this.setType = (type) => {
		this.type = type;
	};
	this.request = () => {
		dispatch({type: this.type})
	};
	this.loadingSuccess = (data) => 
	{
		this.dispatch({
			type: this.type,
			payload: {
				success: true,
				data: data[0] ? data[0] : data
			}
		})
	};
	this.loadingFailed = (error) => {
		this.dispatch({
			type: this.type,
			payload: {
				success: false,
				data: [] 
			}
		})
	}
};


