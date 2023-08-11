const UserReducer = (state, action) => {
   switch(action.type) {
      case "GET_USER_START":
      return {
         user: null,
         localStorage: null,
         isFetching: true,
         error: false
      }

      case "GET_USER_SUCCESS":
      return {
         user: action.payload,
         localStorage: action.payload,
         isFetching: false,
         error: false
      }

      case "GET_USER_FAILURE":
      return {
         user: null,
         localStorage: null,
         isFetching: false,
         error: true
      }
      
      case "LOGOUT":
         return{
            user: null,
            localStorage: null,
            isFetching: false,
            error: false
         }  
       default :  
       return state; 
   }
}

export default UserReducer;