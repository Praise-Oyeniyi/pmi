import React from 'react'

const EventDescriptionLoader = () => {
  return (
    <div className='w-full'>
        <div className='mx-auto w-[90%] md:w-5/6 space-y-10'>
            <div className="description w-full">
                <div className='md:flex items-stretch gap-x-7 justify-between w-full'> 
                    {/* Image Loader */}
                    <div className="image md:min-w-[30rem] h-[22rem] rounded-3xl overflow-hidden md:max-w-[30rem] bg-gray-200 animate-pulse">
                    </div>

                    {/* Description Loader */}
                    <div className='bg-white rounded-3xl mt-7 md:mt-0 p-3 md:p-5 md:px-7 border border-[#E8E8E8]'>
                        <div className='h-8 md:h-10 w-48 bg-gray-200 rounded-lg animate-pulse mb-2'></div>
                        <div className='h-px bg-[#DADADA] w-full'></div>
                        <div className='pt-3 space-y-2'>
                            <div className='h-4 md:h-6 bg-gray-200 rounded-lg animate-pulse w-full'></div>
                            <div className='h-4 md:h-6 bg-gray-200 rounded-lg animate-pulse w-5/6'></div>
                            <div className='h-4 md:h-6 bg-gray-200 rounded-lg animate-pulse w-4/6'></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Audience section Loader */}
            <div>
                <div className='h-8 md:h-10 w-48 bg-gray-200 rounded-lg animate-pulse mb-2'></div>
                <div className='space-y-2'>
                    <div className='h-4 md:h-6 bg-gray-200 rounded-lg animate-pulse w-full'></div>
                    <div className='h-4 md:h-6 bg-gray-200 rounded-lg animate-pulse w-5/6'></div>
                </div>
            </div>

            {/* Speaker section Loader */}
            <div className="speaker">
                <div className='h-8 md:h-10 w-60 bg-gray-200 rounded-lg animate-pulse mb-2'></div>
                <div className='space-y-2'>
                    <div className='h-4 md:h-6 bg-gray-200 rounded-lg animate-pulse w-full'></div>
                    <div className='h-4 md:h-6 bg-gray-200 rounded-lg animate-pulse w-5/6'></div>
                </div>

                {/* Experience box Loader */}
                <div className='bg-white rounded-xl md:rounded-3xl p-3 md:p-5 md:px-7 border border-[#E8E8E8] mt-7'>
                    <div className='h-6 md:h-8 w-48 bg-gray-200 rounded-lg animate-pulse mb-2'></div>
                    <div className='pt-2'>
                        <div className='md:flex justify-between'>
                            <div className='w-full md:w-3/6 space-y-2 border-b md:border-b-0 border-b-[#DADADA] pb-3 md:pb-0 md:border-r border-r-[#DADADA] md:pr-10 pl-5'>
                                {[1, 2, 3].map((_, index) => (
                                    <div key={index} className='flex items-center'>
                                        <div className='h-2 w-2 rounded-full bg-gray-300 mr-2'></div>
                                        <div className='h-4 md:h-5 bg-gray-200 rounded-lg animate-pulse w-5/6'></div>
                                    </div>
                                ))}
                            </div>
                            <div className='w-full md:w-3/6 md:pl-10 pt-3 md:pt-0'>
                                <div className='h-6 md:h-8 w-48 bg-gray-200 rounded-lg animate-pulse mb-2'></div>
                                <div className='pl-5 space-y-2'>
                                    {[1, 2, 3].map((_, index) => (
                                        <div key={index} className='flex items-center'>
                                            <div className='h-2 w-2 rounded-full bg-gray-300 mr-2'></div>
                                            <div className='h-4 md:h-5 bg-gray-200 rounded-lg animate-pulse w-5/6'></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventDescriptionLoader