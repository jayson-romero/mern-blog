import axios from 'axios'
import { getUserStart, getUserSuccess, getUserFailure, logoutUser } from './authAction.js'
import {toast} from 'react-toastify'


// const URL = "https://blog-w5bl.onrender.com"
// const development_URL = "http://localhost:5000"



const config = {
  headers : {"Content-Type": "application/json"},
  withCredentials: true
}



 export const login = async (user, dispatch) => {

  dispatch(getUserStart());
  try {
    const res = await axios.post(`/api/auth/login`, user, config);
    dispatch(getUserSuccess(res.data));
    return res.data
  } catch (err) {
    toast.error(err.response.data.message);
    dispatch(getUserFailure());
  }
};


 export const logout = async (dispatch) => {
  try {
    const res = await axios.get(`/api/auth/logout`, {
      withCredentials: true
    });
    dispatch(logoutUser(res.data));
    console.log(res.data) 
  } catch (err) {
    console.log(err)
  }
};


export const getUser = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get(`/api/user`, {
     withCredentials: true
   });
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(getUserFailure());
  
  }
};
