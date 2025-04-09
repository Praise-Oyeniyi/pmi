import React from 'react'

const CertNo = () => {
    return (
        <div className='w-full'>
          <div className="cert-no-inner w-5/6 mx-auto bg-gray-200 rounded-lg md:rounded-2xl animate-pulse">
            <div className="h-fit md:h-28 cert-inner-top md:flex justify-between w-full">
              <div className='flex items-start md:items-center md:px-7 px-5 border-b md:border-b-0 border-b-gray-300 py-3 justify-start gap-x-7 md:w-3/6 md:border-r border-r-gray-300'>
                <div className='h-8 w-16 bg-gray-300 animate-pulse rounded-md'></div>
                <div className='h-6 w-32 bg-gray-300 animate-pulse rounded-md'></div>
              </div>
              
              <div className='flex items-center md:px-7 px-5 border-b md:border-b-0 border-b-gray-300 py-3 justify-start gap-x-7 md:w-3/6'>
                <div className='h-8 w-16 bg-gray-300 animate-pulse rounded-md'></div>
                <div className='h-6 w-32 bg-gray-300 animate-pulse rounded-md'></div>
              </div>
            </div>
    
            <div className="h-fit md:h-28 cert-inner-bottom md:border-t border-t-gray-300 md:flex justify-between w-full">
              <div className='flex items-center md:px-7 px-5 border-b md:border-b-0 border-b-gray-300 py-3 justify-start gap-x-7 md:w-3/6 border-r border-r-gray-300'>
                <div className='h-8 w-16 bg-gray-300 animate-pulse rounded-md'></div>
                <div className='h-6 w-32 bg-gray-300 animate-pulse rounded-md'></div>
              </div>
              
              <div className='flex items-center md:px-7 px-5 border-b md:border-b-0 border-b-gray-300 py-3 justify-start gap-x-7 md:w-3/6'>
                <div className='h-8 w-16 bg-gray-300 animate-pulse rounded-md'></div>
                <div className='h-6 w-32 bg-gray-300 animate-pulse rounded-md'></div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default CertNo

