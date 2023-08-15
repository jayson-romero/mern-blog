
export const getUserStart = () => ({
   type: "LOGIN_START"
})

export const getUserSuccess = (user) => ({
   type: "LOGIN_SUCCESS",
   payload: user,
})

export const getUserFailure = () => ({
   type: "LOGIN_FAILURE"
})

export const logoutUser = () => ({
   type: "LOGOUT"
})