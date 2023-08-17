import { createContext, useReducer, useEffect, useState } from 'react'
import UserReducer from './authReducer.js'


const INITIAL_STATE = {
   user: null,
   isFetching: true,
   error: false
}
const AuthContext = createContext(INITIAL_STATE)

const AuthContextProvider = ({children}) => {

   const [ state, dispatch] = useReducer(UserReducer, INITIAL_STATE)
   const [token, setToken] = useState( JSON.parse(localStorage.getItem("user")) || null);

    // Save the token to local storage
    const saveToLocalStorage = (newToken) => {
      try {
        setToken(newToken);
      } catch (error) {
        console.log("problob with saving Token")
      }
   
    };

     // Remove the token from local storage
     const removeToLocalStorage = () => {
      localStorage.removeItem('user');
      setToken(null);
    };

    // Load token from local storage on component mount
   useEffect(() => {
      localStorage.setItem('user', JSON.stringify(token));
    }, [token]) 


   return (
      <AuthContext.Provider value={{
         user: state.user,
         isFetching: state.isFetching,
         error: state.error,
         dispatch,
         saveToLocalStorage,
         removeToLocalStorage
      }}>
         {children}  
      </AuthContext.Provider>
   )
}

export { AuthContext, AuthContextProvider}