const VideoSkeletonLoader = ({count = 8}) => {
    return (
      <>
        {/* Generate 8 skeleton loaders */}
        {[...Array(count)].map((_, index) => (
          <div key={index} className="w-full capitalize">
            <div className='w-full'>
              {/* Thumbnail skeleton */}
              <div className='w-fit h-fit relative'>
                <div className='relative md:h-50 w-40 md:w-50 h-40 rounded-xl overflow-hidden bg-gray-200 animate-pulse'>
                  {/* Play button skeleton */}
                  <div className='absolute h-8 w-8 md:h-10 md:w-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300 animate-pulse'></div>
                </div>
              </div>
              
              <div>
                {/* Title skeleton */}
                <div className="h-6 bg-gray-200 rounded w-3/4 mt-3 mb-2 animate-pulse"></div>
                
                <div className='font-normal text-sm md:text-lg'>
                  {/* Author skeleton */}
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
                  {/* Details skeleton */}
                  <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default VideoSkeletonLoader;