import React from 'react'


const Info = ({name, image, memberNo, mail}) => {
    

  return (
    <div className='md:flex items-center gap-x-10'>
        <div className='w-44 h-44 md:h-72 md:w-72 rounded-3xl relative overflow-hidden'>
            <img src={image} alt="user display image" className='absolute h-full w-full object-cover bg-gray-200'/>
        </div>

        <div className='flex flex-col justify-between  gap-y-5 md:gap-y-12 h-full py-5 md:py-0'>
            <div className='md:space-y-2'>
                <h3 className='text-xl md:text-2xl font-bold'>{name}</h3>
                <h5 className='capitalize text-base md:text-xl font-medium'>membership number: <span className='font-semibold'>{!memberNo? 'NIL': memberNo}</span> </h5>
            </div>
            

            <div className='space-y-2'>
                <h3 className='text-lg md:text-xl font-semibold'>Contact</h3>
                <div className='md:flex gap-x-5 space-y-2 md:space-y-0'>
                    <div className='bg-[#F6F6F6] rounded-md justify-between md:justify-self-start md:rounded-xl flex items-center gap-x-3 p-3'>
                        <h6 className='text-sm md:text-lg font-normal capitalize'>email address:</h6>
                        <h5 className='text-sm md:text-lg font-semibold'>{mail}</h5>  
                    </div>

                    {/* <div className='bg-[#F6F6F6] rounded-md justify-between md:justify-self-start md:rounded-xl flex items-center gap-x-4 p-3'>
                        <h6 className='text-sm md:text-lg font-normal capitalize'>Phone number:</h6>
                        <h5 className='text-sm md:text-lg font-semibold'>+91 73565 29814</h5>  
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info