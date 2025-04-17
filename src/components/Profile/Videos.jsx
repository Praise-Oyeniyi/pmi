import React, { useState } from 'react'
import PI from '../../assets/icons/play-icon.svg'
import { useQuery } from '@tanstack/react-query';
import VideoSkeletonLoader from '../global/Skeleton/VideoSkeletonLoader';
import { useNavigate } from 'react-router';
import { createVideoQueryOptions } from '../queryOptions/QueryOptions';

const Videos = () => {
  const navigate = useNavigate();

  const {data, isPending} = useQuery(createVideoQueryOptions())

  
  const videoData = data?.data.map((video, index) => ({
    id: video.id,
    title: video.title,
    details: video.brief,
    thumbnail: video.featured_image.url,
    vimeoUrl: video.vimeo_embed_url
  }));

  const handleVideoClick = (video) => {
    navigate(`Videos/${video.id}`)
  };


  return (
    <div className='w-full space-y-4 md:space-y-7 relative'>
      <h3 className='text-2xl md:text-3xl font-bold'>{data?.data.length} Videos</h3>

      <div className='w-full grid justify-start items-start gap-4 gap-y-7 grid-cols-2 md:grid-cols-4 flex-wrap'>
        {isPending?
          <VideoSkeletonLoader/>
        :
        videoData.map((video, index) => (
          <div 
            key={index}
            className="w-full capitalize cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            <div className='w-full flex-1 flex flex-col'>
              <div className='w-full'>
                <div className='w-fit h-fit relative'>
                  <div className='relative md:h-50 w-full rounded-xl overflow-hidden'>
                    <img src={video.thumbnail} alt="" className='w-full h-full object-cover'/>
                  </div>
                  <img src={PI} alt="" className='absolute h-8 w-8 md:h-10 md:w-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                </div>
                
                <div className='flex-col flex justify-start'>
                  <h4 className="text-base md:text-lg font-semibold my-2 leading-tight md:leading-normal line-clamp-2">
                    {video.title}
                  </h4>

                  <div className='font-normal text-sm md:text-lg text-[#6C6C6C]'>
                    <p className='tracking-tight truncate'>{video.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}


export default Videos