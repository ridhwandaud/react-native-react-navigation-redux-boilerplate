const INITIAL_STATE = { 
	user: null,
	isLoggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {	
		case 'login':
			console.log('login');
			return {
				...state,
				isLoggedIn: true,
			};	
		default:
		  return state;
	}
}