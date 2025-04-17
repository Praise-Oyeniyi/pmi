import { useQueries } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'
import BG from '../../assets/images/video-bg.png'
import { createRecentVideoQueryOptions, createUserQueryOptions, createVideoQueryOptions } from '../../components/queryOptions/QueryOptions'
import { Link } from 'react-router-dom'
import VideoSkeletonLoader from '../../components/global/Skeleton/VideoSkeletonLoader'
import PI from '../../assets/images/RVP.svg'
import { useNavigate } from 'react-router'

const RecentVideos = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videoData, setVideoData] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const [rVideo, video, user] = useQueries({
    queries:[
        createRecentVideoQueryOptions(),
        createVideoQueryOptions(),
        createUserQueryOptions()
    ]})

  
    useEffect(() => {
        if (!user.data?.success) {
        navigate('/login');
        }
    }, [user.data, navigate]);

    useEffect(()=>{
        if(video.data){
            console.log(video.data)
            setSelectedVideo(video.data.data.find((picked)=>picked.id === parseInt(id)))
        }
        if(rVideo.data){
            setVideoData(rVideo.data.data.filter((filtered)=>filtered.id !== parseInt(id)))
        }
    },[video?.data, rVideo?.data, id])

    const handlePlayVideo = () => {
        if (selectedVideo && selectedVideo.vimeo_embed_url) {
            setIsPlaying(true);
        }
    }

    const getVimeoEmbedUrl = (vimeoLink) => {
        const vimeoId = vimeoLink?.split('/').pop();
        return `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
    }



  return (
    <div className='w-full h-full font-aeonik bg-hero-bg overflow-x-hidden'>
        <Header/>
        <div className='w-full'>

            {video?.data?.data.isPending?
              <SPLoader/>
            :
                selectedVideo && (<div className='w-full sp-bg bg-center bg-contain bg-no-repeat' style={{backgroundImage: `url(${BG})`}}>
                    <div className="inner w-[90%] md:w-5/6 mx-auto py-5">
                        <h4 className='text-white font-semibold  text-sm md:text-lg tracking-wider'><Link to={'/'} className="hover:underline">Home</Link> / Videos /</h4>
                        <div className='text-center my-7 text-white'>
                            <h3 className={`text-3xl md:text-5xl font-bold pb-3 mx-auto w-5/6 tracking-wide leading-snug`}>{selectedVideo.title}</h3>
                        </div>
            
                    </div>
                </div>)
            }

            <div className='md:w-5/6 mx-auto w-[90%] my-14 space-y-10 md:space-y-16'>
                {selectedVideo && (<div className='md:flex gap-x-10 '>
                    <div className='rounded-xl overflow-hidden my-5 bg-black md:my-0 md:h-[30rem] w-full md:w-5/6 cursor-pointer' onClick={handlePlayVideo}>
                        {isPlaying && selectedVideo.vimeo_embed_url ? (
                            <iframe 
                                src={getVimeoEmbedUrl(selectedVideo.vimeo_embed_url)} 
                                className="h-full w-full"
                                frameBorder="0" 
                                allow="autoplay; fullscreen; picture-in-picture" 
                                allowFullScreen
                                title={selectedVideo.title}
                            />
                        ) : (
                            <div className="relative h-full w-full">
                                <img 
                                    src={selectedVideo.featured_image?.url} 
                                    alt={selectedVideo.featured_image?.alt} 
                                    className="h-full w-full object-cover object-top"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/30 rounded-full p-4">
                                        <img src={PI} alt="Play button" className="h-10 w-10 md:h-16 md:w-16" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='space-y-2 md:space-y-5 md:pt-3'>
                        <h3 className='text-xl md:text-3xl font-bold'>{selectedVideo.title}</h3>
                        <p className='capitalize text-base md:text-xl font-medium'>{selectedVideo.brief}</p>
                    </div>
                </div>)}

                <div className='w-full'>
                    <h3 className='text-center text-2xl md:text-5xl font-bold my-7'>Recent Videos</h3>

                    <div className='w-full grid justify-start items-stretch gap-4 gap-y-10 grid-cols-2 md:grid-cols-4 flex-wrap'>
                        {rVideo.isPending?
                            <VideoSkeletonLoader count={4}/>
                            :
                            videoData && (videoData.map((videoItem, index) => (
                            <div 
                                key={index}
                                className="w-full capitalize cursor-pointer h-full flex flex-col"
                                onClick={() => navigate(`/Profile/Videos/${videoItem.id}`)}
                            >
                                <div className='w-full flex-1 flex flex-col'>
                                    <div className='w-full'>
                                        <div className='relative md:h-50 w-full rounded-xl overflow-hidden'>
                                            <img src={videoItem.featured_image?.url} alt="" className='w-full h-full object-cover'/>
                                            <img src={PI} alt="" className='absolute h-8 w-8 md:h-10 md:w-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                                        </div>
                                    </div>
                                
                                    <div className='flex-col flex justify-start'>
                                        <h4 className="text-base md:text-lg font-semibold my-2 leading-tight md:leading-normal line-clamp-2">
                                            {videoItem.title}
                                        </h4>

                                        <div className='font-normal text-sm md:text-lg text-[#6C6C6C] mt-auto'>
                                            <p className='tracking-tight truncate'>{videoItem.brief}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)))
                       }
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default RecentVideos