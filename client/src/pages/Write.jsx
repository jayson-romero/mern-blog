import {MdOutlineAddPhotoAlternate} from 'react-icons/md'

const Write = () => {
  return (
    <>
      <div className='m-6 flex flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
             <img src="https://media.istockphoto.com/id/496848472/vector/blog-blogging-and-blogglers-theme.jpg?s=612x612&w=0&k=20&c=mSpcEVoA-YeViMFD--ozz_CyP1UXnEgw89MpU8bwd9s=" alt="img" 
               className="w-[100%] h-[280px] rounded-2xl object-cover"/>
         <form>
            <div className='m-6'>
               <label htmlFor='fileinput' className='flex items-center'>
                  <MdOutlineAddPhotoAlternate className='w-[30px] h-[30px]'/>
                  <p className='text-[14px] text-gray-light'>Add Photo</p>
               </label>
               <input type="file" id="fileinput" className='hidden'/>

               <input type="text" 
               className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 my-6 '
               placeholder="Title" 
               autoFocus={true}/>
            </div> 
            <div>
               <textarea 
               placeholder='Tell your story...' 
               type="text"
               className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300  my-6 h-[500px]'
               ></textarea>
               <button
               className=' bg-primary inline-flex items-center justify-center rounded-md p-2.5 font-bold'
               >Publish</button>
            </div>
         </form>
      </div>
    </>
  )
}
export default Write