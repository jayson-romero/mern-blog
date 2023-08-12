const UserReducer = (state, action) => {
   switch(action.type) {
      case "LOGIN_START":
      return {
         user: null,
         usertAtlocalStorage: null,
         isFetching: true,
         error: false
      }

      case "LOGIN_SUCCESS":
      return {
         user: action.payload,
         usertAtlocalStorage: action.payload,
         isFetching: false,
         error: false
      }

      case "LOGIN_FAILURE":
      return {
         user: null,
         usertAtlocalStorage: null,
         isFetching: false,
         error: true
      }
      
      case "LOGOUT":
         return{
            user: null,
            usertAtlocalStorage: null,
            isFetching: false,
            error: false
         }  
       default :  
       return state; 
   }
}

export default UserReducer;