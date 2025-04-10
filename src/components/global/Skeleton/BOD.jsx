import React from 'react';

const BODSkeleton = ({ count = 3 }) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div 
          className={`border-b py-5 border-b-[#DBD8D1] w-full flex flex-col gap-y-4 md:gap-y-0 md:flex-row gap-x-10 justify-between items-center ${index === count-1 && 'border-none'}`} 
          key={`skeleton-${index}`}
        >
          {/* Text content skeleton */}
          <div className='flex flex-col gap-x-10 md:flex-row justify-between items-start w-full md:w-4/6 order-2 md:order-1'>
            {/* Title skeleton */}
            <div className='h-7 md:h-10 bg-gray-200 rounded-md w-4/5 md:w-3/6 pr-10 animate-pulse'></div>
            
            {/* Info skeleton */}
            <div className="dir-info pt-2 md:pt-0 space-y-4 md:w-3/6">
              {/* Designation skeleton */}
              <div className='h-5 md:h-6 bg-gray-200 rounded-md w-3/4 animate-pulse'></div>
              
              {/* Email skeleton */}
              <div className='h-5 md:h-6 bg-gray-200 rounded-md w-4/5 animate-pulse'></div>
              
              {/* Button skeleton */}
              <div className='h-6 md:h-8 bg-gray-200 rounded-md w-1/3 animate-pulse mt-2'></div>
            </div>
          </div>
          
          {/* Image skeleton */}
          <div className='h-[11rem] md:w-[20rem] w-full rounded-2xl overflow-hidden relative md:h-48 order-1 md:order-2 bg-gray-200 animate-pulse'></div>
        </div>
      ))}
    </>
  );
};

export default BODSkeleton;