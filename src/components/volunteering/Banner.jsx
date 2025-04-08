import React from 'react'

const Banner = () => {
  return (
    <div className='w-full volunteer-banner'>
        <div className="mx-auto w-[90%] md:w-5/6 py-10 md:py-16">
            <div className='md:w-4/6 text-center md:text-left text-white space-y-4 z-5'>
                <h3 className='text-2xl md:text-6xl md:leading-14 capitalize'>Get Involved. Make a difference. Be a volunteer</h3>
                <p className='text-sm md:text-xl '>Make your mark on PMI and the profession. As a member, you can volunteer to work on, and to lead activities that advance the profession and the Institute.</p>
                <button className='text-sm font-semibold rounded-full py-3 w-fit px-7 capitalize bg-purple cursor-pointer hover:opacity-70 transition-all ease-linear duration-200'>join now</button>
            </div>
        </div>
    </div>
  )
}

export default Banner