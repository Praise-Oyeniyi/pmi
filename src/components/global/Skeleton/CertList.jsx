


const CertList = ({ index }) => {
    return (
      <div key={index} className={`w-full h-full md:h-[38rem] overflow-hidden px-5 pb-5 md:pb-6 box-outer rounded-[1.25rem] bg-gray-100 animate-pulse`}>
        <div className="box-inner relative flex flex-col justify-between h-full">
          <div>
            <div className='flex justify-between'>
              {/* Tag skeleton */}
              <div className={`my-5 md:my-6 bg-gray-300 animate-pulse rounded-full px-3 h-6 md:h-[1.875rem] w-28`}></div>
              
              {/* Image skeleton */}
              <div className='relative h-28 md:h-44 w-56 bg-gray-300 animate-pulse rounded-md'></div>
            </div>
  
            <div className="box-body mt-2">
              {/* Title skeleton */}
              <div className={`bg-gray-300 animate-pulse h-6 md:h-8 w-1/2 rounded my-2 md:my-3`}></div>
              
              {/* Main title skeleton */}
              <div className={`bg-gray-300 animate-pulse h-7 md:h-10 w-3/4 rounded`}></div>
              
              <div className={`mt-2 md:mt-5`}>
                {/* Subtitle skeleton */}
                <div className={`bg-gray-300 animate-pulse h-5 md:h-7 w-1/3 rounded mb-2`}></div>
                
                {/* Description skeleton - multiple lines */}
                <div className={`bg-gray-300 animate-pulse h-4 md:h-6 w-full rounded mb-2`}></div>
                <div className={`bg-gray-300 animate-pulse h-4 md:h-6 w-5/6 rounded mb-2`}></div>
                <div className={`bg-gray-300 animate-pulse h-4 md:h-6 w-4/5 rounded`}></div>
              </div>
            </div>
          </div>
  
          {/* Button skeleton */}
          <div className={`mt-5 bg-gray-300 animate-pulse h-10 md:h-12 w-36 rounded-full`}></div>
        </div>
      </div>
    );
  };
  
  export default CertList;