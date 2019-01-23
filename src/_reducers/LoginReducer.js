import types from 'Actions/types';

const INITIAL_STATE = { 
	isLoggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {	
		case types.LOGIN_USER:
			return {
				...state,
				isLoggedIn: true,
			};
		case types.LOGOUT_USER:
			return {
				...state,
				isLoggedIn: false,
			};		
		default:
		  return state;
	}
}