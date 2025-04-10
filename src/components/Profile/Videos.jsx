import React, { useState } from 'react'
import VI from '../../assets/images/videos-thumb.png'
import PI from '../../assets/icons/play-icon.svg'

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const videoData = [...Array(8)].map((_, index) => ({
    id: index,
    title: "The world is your playground",
    author: "rohith bhat",
    details: "PM open Space | 23.O5.2024 | 65m",
    thumbnail: VI,
    youtubeId: "4pEC3UF0D58?si=Hgox1xu6w7FJqIi_"
  }));

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeOverlay = () => {
    setSelectedVideo(null);
  };

  return (
    <div className='w-full space-y-4 md:space-y-7 relative'>
      <h3 className='text-2xl md:text-4xl font-bold'>8 Videos</h3>

      <div className='w-full grid justify-start items-center gap-4 gap-y-7 grid-cols-2 md:grid-cols-4 flex-wrap'>
        {videoData.map((video, index) => (
          <div 
            key={index}
            className="w-full capitalize cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            <div className='w-full'>
              <div className='w-fit h-fit relative'>
                <div className='relative md:h-50 w-full rounded-xl overflow-hidden'>
                  <img src={video.thumbnail} alt="" className='w-full h-full object-cover'/>
                </div>
                <img src={PI} alt="" className='absolute h-8 w-8 md:h-10 md:w-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
              </div>
              
              <div>
                <h4 className="text-lg md:text-xl font-semibold py-3 leading-tight md:leading-normal">
                  {video.title}
                </h4>

                <div className='font-normal text-sm md:text-lg text-[#6C6C6C]'>
                  <h6>{video.author}</h6>
                  <p className='tracking-tight truncate'>{video.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Video Overlay */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-[#000000ab] bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50">
          <div className="relative h-3/4 w-5/6 bg-black shadow-xl rounded-xl overflow-hidden flex flex-col">
            {/* Close button */}
            <button 
              onClick={closeOverlay}
              className="absolute top-4 right-4 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* YouTube Embed */}
            <div className="flex-1 w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video info */}
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl text-white font-bold">{selectedVideo.title}</h3>
              <p className="text-gray-300">{selectedVideo.author} | {selectedVideo.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Videos