import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <>  
      <Header/>
      <div className='flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"'>
        <div className='grow-[9] w-[70%]'>
             <Outlet/>
        </div>
        <div  className='grow-[3] w-[30%]'><Sidebar/></div>
      </div>
     
    </>
  )
}
export default Home