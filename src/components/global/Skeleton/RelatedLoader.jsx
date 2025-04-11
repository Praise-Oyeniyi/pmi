import React from 'react'

const RelatedLoader = ({count = 4}) => {
    return (
        <>
      {[...Array(count)].map((_, index) => (
        <div key={index} className='w-full border bg-[#FBFBFB] rounded-xl md:rounded-3xl overflow-hidden p-3 md:p-4 border-[#E8E8E8]'>
            <div className="inner flex w-full gap-x-3 md:gap-x-4">
            {/* Image skeleton */}
            <div className="image rounded-lg md:rounded-3xl overflow-hidden bg-gray-200 animate-pulse h-24 md:h-[10.72rem] min-w-[30%] md:min-w-[14rem]"></div>

            <div className='flex flex-col justify-between w-4/6'>
                <div className='flex items-center justify-between w-full'>
                {/* Calendar button skeleton */}
                <div className='flex items-center justify-between px-2 md:px-3 py-2 rounded-full border border-[#F3EFEF] bg-gray-200 animate-pulse h-8 w-24 md:w-32'></div>

                {/* Arrow button skeleton */}
                <div className='bg-gray-200 animate-pulse border border-[#F3EFEF] rounded-full h-8 w-8 md:h-12 md:w-12'></div>
                </div>

                {/* Title skeleton */}
                <div className='space-y-2 mt-auto'>
                <div className='h-4 md:h-6 bg-gray-200 rounded animate-pulse w-3/4'></div>
                <div className='h-4 md:h-6 bg-gray-200 rounded animate-pulse w-1/2'></div>
                </div>
            </div>
            </div>
        </div>
      ))}
      </>
    );
}

export default RelatedLoader