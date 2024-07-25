import React from 'react';

const Hero = ({ heroapi: { title, subtitle, btntext, img } }) => {

  return (
    <>
      <div className='relative h-auto w-auto flex mb-3'>

        <div className='bg-theme h-[100vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>

        <div className='relative opacity-100 z-20 flex justify-between items-center sm:flex-col 
        sm:justify-center sm:items-center md:flex-col md:justify-center lg:flex-col
        lg:items-center lg:justify-center h-[100vh] nike-container'>

          {/* text */}
          <div className='flex flex-col items-center justify-center w-[100%] 
          gap-[10px] 
          md:mt-12 sm:mb-9 md:w-[100%] sm:w-[100%] lg:w-[100%] xl:w-[100%]'>

            <h1
              className='text-4xl lg:text-3xl md:text-3xl sm:text-2xl xsm:text-2xl font-bold 
              filter drop-shadow-sm text-center  text-slate-200'>
              {title}
            </h1>

            <h2
              className='text-4xl lg:text-3xl md:text-3xl sm:text-2xl xsm:text-2xl font-bold 
              filter drop-shadow-sm text-start text-slate-200 my-3'>
              {subtitle}
            </h2>

            <button type='button'
              className='button-theme bg-slate-200 text-1xl shadow-slate-200 rounded-xl
              sm:text-lg md:text-xl lg:text-xl'>
              {btntext}
            </button>
            
          </div>

          {/* img hero */}
          <div className='flex justify-center items-center w-[100%] sm:items-center sm:w-[100%] md:w-[100%] lg:w-[100%]'>
            <img
              src={img}
              alt='hero-img/img'
              className='w-auto h-[70vh] lg:h-[55vh] md:h-[45vh] sm:h-[35vh] object-contain'
            />
          </div>


        </div>
      </div>
    </>
  )
}

export default Hero