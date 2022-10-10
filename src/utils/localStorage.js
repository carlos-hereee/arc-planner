import decode from "jwt-decode";

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
export const logOut = () => localStorage.clear();

export const checkAuth = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  // check weather given tokens are in local storage
  if (!refreshToken) {
    return false;
  }
  try {
    // decode token
    const { exp, username } = decode(refreshToken);
    // check if its expired
    if (exp < new Date().getTime() / 1000) {
      logOut();
      return false;
    }
    // if (new Date().getTime() / 1000 + 86400 > exp) {
    // 	// if it has not expired refresh; token
    // 	client()
    // 		.post("/user/refresh", { userId: username })
    // 		.then((res) => {
    // 			console.log("res", res);
    // 		});
    // }
  } catch (e) {
    //  cant decode token
    return false;
  }
  return true;
};
