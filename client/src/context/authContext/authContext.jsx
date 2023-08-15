import { createContext, useReducer, useEffect } from 'react'
import UserReducer from './authReducer.js'


const INITIAL_STATE = {
   user: null,
   usertAtlocalStorage: JSON.parse(localStorage.getItem("user")) || null,
   isFetching: true,
   error: false
}
const AuthContext = createContext(INITIAL_STATE)

const AuthContextProvider = ({children}) => {

   const [ state, dispatch] = useReducer(UserReducer, INITIAL_STATE)

   useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.usertAtlocalStorage))
   },[state.usertAtlocalStorage])

   console.log(state.user)

   return (
      <AuthContext.Provider value={{
         user: state.user,
         usertAtlocalStorage: state.usertAtlocalStorage,
         isFetching: state.isFetching,
         error: state.error,
         dispatch 
      }}>
         {children}  
      </AuthContext.Provider>
   )
}

export { AuthContext, AuthContextProvider}