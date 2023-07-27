const Header = () => {
  return (
    <>
      <div className="header relative mx-auto flex flex flex-col items-center">
         <div className="header-title absolute top-[20px] flex flex-col items-center">
            <h3 className="font-serif text-[25px] lg:text-[50px]">React & Node</h3>  
            <h1 className="font-serif text-[80px] md:text-[150px]">Blog</h1>
         </div>
         <img src="https://img.freepik.com/premium-photo/green-branch-eucalyptus-blank-paper-against-blue-background-top-view-flat-lay-banner_164357-9345.jpg?w=2000" alt="" 
         className="w-full lg:h-[500px] md:h-full"
         />
      </div>
    </>
  )
}
export default Header