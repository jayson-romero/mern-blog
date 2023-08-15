import axios from 'axios'
import { getUserStart, getUserSuccess, getUserFailure, logoutUser } from './authAction.js'
import {toast} from 'react-toastify'

const URL = "https://blog-w5bl.onrender.com"
const development_URL = "http://localhost:5000"
 export const login = async (user, dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.post(`${URL}/api/auth/login`, user, {
      withCredentials: true,
      credentials: 'include',
    });
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data.message);
    dispatch(getUserFailure());
  }
};


 export const logout = async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/api/auth/logout`,{
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
    const res = await axios.get(`${URL}/api/user`, {
     withCredentials: true,
     credentials: 'include',
   });
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(getUserFailure());
  
  }
};
