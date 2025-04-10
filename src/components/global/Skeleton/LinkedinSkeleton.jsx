import React from 'react'

const LinkedinSkeleton = () => {
    return (
        <div className='w-full'>
            <div className="mx-auto w-[90%] md:w-5/6 bg-white space-y-3 md:space-y-0 rounded-3xl border border-[#E8E8E8] p-3 md:p-4 md:flex justify-between items-center">
                
            <div className='flex items-center gap-x-5'>
                {/* Avatar skeleton */}
                <div className="h-12 w-12 md:w-[6.25rem] md:h-[6.25rem] rounded-full bg-gray-200 animate-pulse"></div>
                
                <div className="bio space-y-2">
                {/* Name skeleton */}
                <div className='h-6 md:h-8 w-32 md:w-64 bg-gray-200 rounded-md animate-pulse'></div>
                {/* Role skeleton */}
                <div className='h-4 md:h-6 w-24 md:w-40 bg-gray-200 rounded-md animate-pulse'></div>
                </div>
            </div>

            {/* Button skeleton */}
            <div className='h-9 md:h-12 w-32 md:w-44 bg-gray-200 rounded-full animate-pulse mx-auto md:mx-0'></div>
            </div>
        </div>
    );
}

export default LinkedinSkeleton