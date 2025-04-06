import React from 'react'
import PP from '../../assets/images/profile-img.png'


const Info = () => {
  return (
    <div className='flex items-center gap-x-10'>
        <div className='h-72 w-72 rounded-3xl relative overflow-hidden'>
            <img src={PP} alt="" className='absolute h-full w-full object-cover '/>
        </div>

        <div className='flex flex-col justify-between gap-y-12 h-full '>
            <div className='space-y-3'>
                <h3 className='text-4xl font-bold'>Krishnesh nair</h3>
                <h5 className='capitalize text-3xl font-medium'>membership number: <span className='font-semibold'>123456789</span> </h5>
            </div>
            

            <div className='space-y-3'>
                <h3 className='text-3xl font-semibold'>Contact</h3>
                <div className='flex gap-x-5'>
                    <div className='bg-[#F6F6F6] rounded-xl flex items-center gap-x-3 p-3'>
                        <h6 className='text-sm md:text-xl font-normal capitalize'>email address:</h6>
                        <h5 className='text-sm md:text-xl font-semibold'>krishneshnair@gmail.com</h5>  
                    </div>

                    <div className='bg-[#F6F6F6] rounded-xl flex items-center gap-x-4 p-3'>
                        <h6 className='text-sm md:text-xl font-normal capitalize'>Phone number::</h6>
                        <h5 className='text-sm md:text-xl font-semibold'>+91 73565 29814</h5>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info