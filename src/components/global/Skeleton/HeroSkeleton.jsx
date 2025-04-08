import React from 'react'

const HeroSkeleton = () => {
  return (
    <div className="hero-outer transition-all ease-linear duration-300 bg-hero-bg">
      <div className="hero-inner py-7 space-y-7 sm:space-y-0 sm:py-10 block md:flex justify-between items-center">
        <div className="hero-image-section w-5/6 md:w-[50rem] relative overflow-hidden">
          {/* Image skeleton with blur effect */}
          <div className="h-64 md:h-96 w-full bg-gray-200 animate-pulse relative overflow-hidden rounded-r-full">
            {/* Blur overlay */}
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-200/50"></div>
            
            {/* Moving gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
          </div>
        </div>

        <div className="hero-text w-full md:w-4/6">
          <div className="hero-text-inner space-y-4 pr-10 sm:w-full w-[90%] md:w-5/6 mx-auto">
            {/* Title skeleton */}
            <div className="h-8 md:h-14 w-5/6 bg-gray-200 animate-pulse rounded"></div>
            
            {/* Subtitle skeleton - multiple lines */}
            <div className="space-y-2">
              <div className="h-4 md:h-6 w-full bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 md:h-6 w-5/6 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-4 md:h-6 w-4/6 bg-gray-200 animate-pulse rounded"></div>
            </div>
            
            {/* Button skeleton */}
            <div className="h-10 md:h-14 w-56 bg-gray-300 animate-pulse rounded-full mt-4 md:mt-8"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSkeleton