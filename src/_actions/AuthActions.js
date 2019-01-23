import types from './types';

const loginUser = () => {
	return {
		type: types.LOGIN_USER
	}
}

const logoutUser = () => {
	return {
		type: types.LOGOUT_USER
	}
}


export default {
	loginUser,
	logoutUser
};