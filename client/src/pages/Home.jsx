import { Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'

const Home = () => {
  return (
     <>
      <Navbar/>
      <Header/>
      <div className='flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"'>
        <div className='grow-[9] w-[70%]'><Outlet/></div>
        <div  className='grow-[3] w-[30%]'><Sidebar/></div>
      </div>
     
      <div>Footer</div>
     </>
  )
}
export default Home