import React from 'react'
import VI from '../../assets/images/videos-thumb.png'
import PI from '../../assets/icons/play-icon.svg'

const Videos = () => {
  return (
    <div className='w-full space-y-7 relative'>
        <h3 className='text-4xl font-bold'>8 Videos</h3>

        <div className='w-full grid justify-start items-center gap-4 grid-cols-4 flex-wrap'>
            {
                [...Array(8)].map((_, index)=>(
                    <div 
                        key={index}
                        className="w-full capitalize "
                    >
                        <div className=' w-full'>
                            <div className='w-fit h-fit relative'>
                                <div className='relative h-50 w-full rounded-xl overflow-hidden'>
                                    <img src={VI} alt=""  className=' w-full h-full object-cover'/>
                                </div>
                                <img src={PI} alt=""  className='absolute h-10 w-10 top-[50%] -translate-[50%] left-[50%]'/>
                            </div>
                            

                            <div>
                                <h4 className="text-xl font-semibold py-5">
                                    The world is your playground
                                </h4>

                                <div className='font-normal text-lg text-[#6C6C6C]'>
                                    <h6>rohith bhat</h6>
                                    <p className='tracking-tight'>PM open Space | 23.O5.2024 | 65m</p>
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