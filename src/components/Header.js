import React,{useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';

const Header = () => {
    let [open,setOpen]=useState(false);
  return (

    <div className='shadow-md w-full sticky top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        Contacts
      </div>

      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>

       <AiOutlineMenu name={open ? 'close':'menu'}/>
      </div>


        <div className={`md:flex md:items-center md:pb-0 pb-12 space-x-2 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>

          <input type="text" className='bg-gray-200 p-2 px-6 rounded-lg focus:outline-none' />
         <button className='bg-gray-200 p-2 px-4 rounded-lg'>
            Search
         </button>

        </div>


      </div>
    </div>
  )
}

export default Header