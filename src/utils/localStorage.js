export const loadState = (state) => {
	try {
		const serializedState = localStorage.getItem(state);
		if (serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (stateName, stateDetail) => {
	try {
		const serializedState = JSON.stringify(stateDetail);
		localStorage.setItem(stateName, serializedState);
	} catch (error) {
		console.log(`Error occurs while saving state: ${error}`);
	}
};
export const logOut = ({ history }) => {
	try {
		localStorage.clear();
		history.push("/");
	} catch (e) {
		console.log(`error occurs while clearing state: ${e}`);
	}
};

export const isLoggedIn = () => {
	if (localStorage.getItem("accessToken") !== null) {
		return true;
	}
	return false;
};
