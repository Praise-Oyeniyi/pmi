import React from 'react';

const EngagedLoader = ({ count = 3 }) => {
  return (
    <>
        {[...Array(count)].map((_, index) => (
            <div className={` border-b-[#00000054] py-2`} key={index}>
                <div className='md:flex items-center justify-between gap-x-14'>
                    <div className='md:flex space-y-3 md:space-y-0 items-center gap-x-8 w-full md:w-[60%] justify-start py-3'>
                    {/* Image skeleton */}
                    <div className='min-w-[18rem] w-full md:max-w-[18rem] relative h-[10rem] rounded-[1rem] overflow-hidden bg-gray-200 animate-pulse'></div>
                    
                    <div className='space-y-1 md:space-y-0'>
                        {/* Header skeleton */}
                        <div className='h-4 md:h-5 w-24 md:w-32 bg-gray-200 rounded animate-pulse'></div>
                        {/* Title skeleton */}
                        <div className='mt-2'>
                        <div className='h-6 md:h-8 w-40 md:w-64 bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-6 md:h-8 w-32 md:w-48 bg-gray-200 rounded animate-pulse mt-1'></div>
                        </div>
                    </div>
                    </div>

                    <div className='md:text-xl text-sm w-full md:w-[40%] mt-3 md:mt-0'>
                    {/* Body text skeleton */}
                    <div className='h-4 md:h-5 w-full bg-gray-200 rounded animate-pulse'></div>
                    <div className='h-4 md:h-5 w-3/4 bg-gray-200 rounded animate-pulse mt-1'></div>
                    <div className='h-4 md:h-5 w-1/2 bg-gray-200 rounded animate-pulse mt-1'></div>
                    
                    {/* Learn more button skeleton */}
                    <div className='h-5 md:h-6 w-28 bg-gray-200 rounded animate-pulse mt-3'></div>
                    </div>
                </div>
            </div>
        ))}
    </>
  );
};

export default EngagedLoader;