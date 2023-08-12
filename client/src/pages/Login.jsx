import { useContext, useRef } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/authContext/authContext.jsx';
import {login, getUser} from '../context/authContext/apiCalls.js';


const Login = () => {

  const userRef = useRef()
  const passwordRef = useRef()
  const { user , isFetching, dispatch, usertAtlocalStorage} = useContext(AuthContext)
 
  
  const handleSubmit = async(e) =>{ 
      e.preventDefault();
      login({ email:userRef.current.value , password : passwordRef.current.value}, dispatch);
      console.log(usertAtlocalStorage)
   
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  ref={userRef}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={passwordRef}
                  className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 "
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  ${isFetching? "cursor-wait disabled:hover:bg-primary-dark" : "hover:bg-primary-dark"}`}
              >
                {isFetching? "Loading..." : "Sign-in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm ">
            Not a member?{' '}
            <Link to="/register" className="font-semibold leading-6 text-primary hover:text-indigo-500">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
export default Login


 // const handleSubmit = async(e) =>{
  //   e.preventDefault();
  //   dispatch({type: "LOGIN_START"});
  //   try {
  //       const res = await axios.post("http://localhost:5000/api/auth/login", { 
  //         email : userRef.current.value,
  //         password : passwordRef.current.value,
  //       }, 
  //       {
  //         withCredentials: true,
  //         credentials: 'include',
  //       }
  //       )
  //       dispatch({type: "LOGIN_SUCCESS", payload:res.data});
  //       toast.success("Login Success")
  //       navigate('/')

  //   } catch (error) {
  //       dispatch({type: "LOGIN_FAILURE"});
  //       toast.error(error?.response?.data?.message)
  //   }
  // }
