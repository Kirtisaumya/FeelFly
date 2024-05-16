import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Navbar = () => {
  return (
    <>
    <div className='navbar flex w-full items-center justify-between fixed py-6 px-16 border-b-2 bg-white'>

        <div className='cursor-pointer left-logo font-serif text-slate-700 text-xl font-extrabold'>
            Advaya
        </div>

        <div className='left-contents flex gap-4'>
                 
            <div className='text-lg cursor-pointer text-slate-700 font-serif font-bold border-r-2 pr-4'>Gallery</div>
                              
            <div className='flex cursor-pointer items-center gap-2 font-serif  text-lg border-r-2 pr-4  text-slate-700 font-bold'>
                <HiOutlineShoppingBag color='text-slate-700' size={24}/>
                Shop
            </div>
                
            <div className='flex cursor-pointer items-center font-serif text-lg text-slate-700 font-bold '>
                <FaRegEnvelope size={24}/>
            </div>

        </div>    
    </div>
    </>
  )
}

export default Navbar
