import axios from 'axios'
import { getUserStart, getUserSuccess, getUserFailure, logoutUser } from './authAction.js'



 export const login = async (user, dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user, {
      withCredentials: true,
      credentials: 'include',
    });
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};


 export const logout = async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/auth/logout",{
      withCredentials: true,
      credentials: 'include',
    });
    dispatch(logoutUser(res.data));
  } catch (err) {
    console.log(err)
  }
};


export const getUser = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get("http://localhost:5000/api/user", {
     withCredentials: true,
     credentials: 'include',
   });
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(getUserFailure());
  
  }
};
