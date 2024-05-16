import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='hero border-b-2 flex justify-center'>
      
          <div className='home-left flex w-3/12 items-center'>
            
            <div className='left-contents flex gap-6 flex-col'>
              <div className='text-5xl text-center text-slate-700 font-serif font-extrabold'>
                Colourful Series 
              </div>
              <div className='text-2xl text-center text-slate-700 font-serif font-normal'>
                Define Your Unique Style.
              </div>
            </div>
            
          </div>

          <div className='home-right w-3/12'>

            <div className='home-right flex items-end h-full'>
              <img className='h-full w-full' src='assets/model1.png'/>
            </div>
            
          </div>

    </div>
    </>
  )
}

export default Hero
