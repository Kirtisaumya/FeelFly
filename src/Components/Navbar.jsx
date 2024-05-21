import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Navbar = () => {
  return (
    <>
    <div className='navbar border-b-2 flex justify-between items-center px-20 py-6'>
        
            <div className='navbar-logo text-gray-700 font-serif font-bold'>
                ADVAYA
            </div>

            <div className='navbar-contents flex gap-5'>
                <div className='contents-shop pr-4 border-r-2 flex gap-2 text-gray-700 font-serif items-center'>
                    <HiOutlineShoppingBag className='text-gray-700 font-serif'/>
                    Shop
                    </div>
                <div className='contents-gallery pr-4 border-r-2 text-gray-700 font-serif'>Gallery</div>
                <div className='contents-contact pr-4 border-r-2 flex items-center'>
                    <FaRegEnvelope className='text-gray-700 font-serif'/>
                    </div>
            </div>
        
    </div>
    </>
  )
}

export default Navbar
