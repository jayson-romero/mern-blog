import { createContext, useReducer, useEffect } from 'react'
import UserReducer from './userReducer.js'


const INITIAL_STATE = {
   user: null,
   localStorage: JSON.parse(localStorage.getItem("user")) || null,
   isFetching: false,
   error: false
}
const UserContext = createContext(INITIAL_STATE)

const UserContextProvider = ({children}) => {

   const [ state, dispatch] = useReducer(UserReducer, INITIAL_STATE)

   useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.localStorage))
   },[state.localStorage])


   return (
      <UserContext.Provider value={{
         user: state.user,
         localStorage: state.localStorage,
         isFetching: state.isFetching,
         error: state.error,
         dispatch
      }}>
         {children}
      </UserContext.Provider>
   )
}

export { UserContext, UserContextProvider}