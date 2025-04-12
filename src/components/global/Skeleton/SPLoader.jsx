import React from 'react'

const SPLoader = () => {
  return (
    <div className='w-full bg-hero-bg bg-center bg-contain bg-no-repeat'>
        <div className=" w-[90%] md:w-5/6 mx-auto py-5 pb-14">
            <div className="bg-gray-300 animate-pulse h-6 w-56 rounded mb-5"></div>
            
            <div className="text-center my-7">
                {/* <div className="bg-gray-300 animate-pulse h-8 md:h-10 w-40 md:w-64 rounded mx-auto mb-4"></div> */}
                
                <div className="bg-gray-300 animate-pulse h-12 md:h-16 w-5/6 mx-auto rounded mb-5"></div>
                
                <div className="flex flex-col items-center">
                <div className="bg-gray-300 animate-pulse h-5 md:h-7 w-[90%] md:w-[75%] rounded mb-2"></div>
                {/* <div className="bg-gray-300 animate-pulse h-5 md:h-7 w-[85%] md:w-[70%] rounded mb-2"></div>
                <div className="bg-gray-300 animate-pulse h-5 md:h-7 w-[80%] md:w-[65%] rounded"></div> */}
                </div>
            </div>
        </div>
    </div>
    );
};

export default SPLoader