import React from 'react';

const Footer = ({footerAPI: {titles, links}}) => {
  return (
    <>
      <footer className='bg-theme pt-7 pb-5'>
        <div className='nike-container text-slate-200'>
          <div className='flex justify-around items-center w-full m-auto md:flex-col md:gap-5'>

            {links.map((list, i) => (
              <ul key={i} className='flex flex-col items-center justify-center gap-1'>
                {list.map((link, i) => (
                  <li key={i} className='text-sm sm:text-xs cursor-pointer hover:opacity-40 first:text-white/100 first:uppercase first:text-lg first:font-semibold'>
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}


          </div>

          <div className="mt-5 text-center border-t border-black/50">
            <p className="text-sm md:text-center mt-1">
              All Reserved Rights 2024 <br />
              <span className='font-semibold text-yellow-500'>
                &copy;elSaleh</span></p>
          </div>
          

        </div>
      </footer>
    </>
  )
}

export default Footer;