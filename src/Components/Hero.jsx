import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTiktok } from 'react-icons/fa'

const Hero = () => {
  return (
    <>
    <div className='main h-full flex border-b-2'>
      <div className='main-socials w-1/6 flex flex-col justify-center'>
        <div className='border-2 h-11 w-11 flex justify-center items-center'>
          <FaInstagramSquare className='text-gray-700' size={32}/>
        </div>
        <div className='border-2 h-11 w-11 flex justify-center items-center'>
          <FaFacebook className='text-gray-700' size={32}/>
        </div>
        <div className='border-2 h-11 w-11 flex justify-center items-center'>
          <FaTiktok className='text-gray-700' size={32}/>
        </div>
      </div>
      <div className='main-left h-full w-1/3 flex items-center justify-center'>
        <div className='left-contents flex flex-col gap-8'>
        <div className='text-gray-700 font-serif text-center flex flex-1 text-7xl'>
            FEEL FLY SERIES
        </div>
        <div className='text-xl text-gray-700 text-center'>
          Unify Your Style, Embrace Advaya
        </div>
        </div>
      </div>

      <div className='right-contents h-full w-1/2 flex items-end'>

        <div className='right-image h-full'>
          <img className='image-model h-full' src='assets/model1.png'/>
        </div>

      </div>

    </div>
    </>
  )
}

export default Hero
