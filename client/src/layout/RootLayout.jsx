import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const user = true

const RootLayout = () => {
  return (
    <>
    {user &&  <Navbar/>}   
      <Outlet/>
    {user &&  <Footer/>}   
    </>
  ) 
}
export default RootLayout