import React from 'react'

const ProfileLoader = () => {
    return (
        <div className='md:flex items-center gap-x-10 md:w-5/6 mx-auto w-[90%] py-10'>
            {/* Profile Image Skeleton */}
            <div className='w-44 h-44 md:h-72 md:w-72 rounded-3xl relative overflow-hidden bg-gray-200 animate-pulse'>
            </div>
    
            <div className='flex flex-col justify-between gap-y-5 md:gap-y-12 h-full py-5 md:py-0'>
                {/* Name and Membership Number Skeleton */}
                <div className='md:space-y-2'>
                    {/* Name Skeleton */}
                    <div className='h-7 md:h-9 bg-gray-200 rounded w-48 md:w-64 animate-pulse'></div>
                    
                    {/* Membership Number Skeleton */}
                    <div className='h-5 md:h-7 bg-gray-200 rounded w-64 md:w-80 mt-2 animate-pulse'></div>
                </div>
                
                {/* Contact Section Skeleton */}
                <div className='space-y-2'>
                    {/* Contact Header Skeleton */}
                    <div className='h-6 md:h-7 bg-gray-200 rounded w-24 animate-pulse'></div>
                    
                    <div className='md:flex gap-x-5 space-y-2 md:space-y-0'>
                        {/* Email Box Skeleton */}
                        <div className='bg-[#F6F6F6] rounded-md md:rounded-xl p-3 w-full md:w-auto'>
                            <div className='flex items-center justify-between'>
                                <div className='h-5 md:h-6 bg-gray-300 rounded w-24 md:w-32 animate-pulse'></div>
                                <div className='h-5 md:h-6 bg-gray-300 rounded w-40 md:w-48 ml-3 animate-pulse'></div>
                            </div>
                        </div>
    
                        {/* Phone Number Box Skeleton */}
                        <div className='bg-[#F6F6F6] rounded-md md:rounded-xl p-3 w-full md:w-auto'>
                            <div className='flex items-center justify-between'>
                                <div className='h-5 md:h-6 bg-gray-300 rounded w-28 md:w-36 animate-pulse'></div>
                                <div className='h-5 md:h-6 bg-gray-300 rounded w-32 md:w-40 ml-3 animate-pulse'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileLoader