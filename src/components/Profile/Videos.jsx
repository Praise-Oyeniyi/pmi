import React from 'react'
import VI from '../../assets/images/videos-thumb.png'
import PI from '../../assets/icons/play-icon.svg'

const Videos = () => {
  return (
    <div className='w-full space-y-4 md:space-y-7 relative'>
        <h3 className='text-2xl md:text-4xl font-bold'>8 Videos</h3>

        <div className='w-full grid justify-start items-center gap-4 gap-y-7 grid-cols-2 md:grid-cols-4 flex-wrap'>
            {
                [...Array(8)].map((_, index)=>(
                    <div 
                        key={index}
                        className="w-full capitalize "
                    >
                        <div className=' w-full'>
                            <div className='w-fit h-fit relative cursor-pointer'>
                                <div className='relative md:h-50 w-full rounded-xl overflow-hidden'>
                                    <img src={VI} alt=""  className=' w-full h-full object-cover'/>
                                </div>
                                <img src={PI} alt=""  className='absolute h-8 w-8 md:h-10 md:w-10 top-[50%] -translate-[50%] left-[50%]'/>
                            </div>
                            

                            <div>
                                <h4 className="text-lg md:text-xl font-semibold py-3 leading-tight md:leading-normal">
                                    The world is your playground
                                </h4>

                                <div className='font-normal text-sm md:text-lg text-[#6C6C6C]'>
                                    <h6>rohith bhat</h6>
                                    <p className='tracking-tight truncate'>PM open Space | 23.O5.2024 | 65m</p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Videos