import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../apis';
import HeroSkeleton from '../global/Skeleton/HeroSkeleton';
import {useQuery} from "@tanstack/react-query"
import { Link } from 'react-router';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const {data, isPending} = useQuery({
    queryKey: ['homeHero'],
    queryFn: getHero,
  }) 


  useEffect(() => {
    const interval = setInterval(() => {
      data && setCurrentSlide((prevSlide) => (prevSlide + 1) % data.data.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [data && data.data.length]);
  
  const currentContent = data && data.data[currentSlide];

  return (
    <div>
    {
      isPending || data.data.length === 0?
        <HeroSkeleton/>
      :
      <div className={`hero-outer transition-all ease-linear duration-300`} style={{backgroundImage: `url(${currentContent.background_image})`}}>
          <div className="hero-inner py-7 space-y-7 sm:space-y-0 sm:py-10 block md:flex justify-between items-center ">
              <div className="hero-image-section w-5/6  md:w-[50rem]">
                  <img src={currentContent?.banner} alt="pmi hero section media"  className='object-cover object-top h-full w-full'/>
              </div>

              <div className="hero-text w-full md:w-5/6 ">
                  <div className={`hero-text-inner space-y-4 pr-10 sm:w-full w-[90%] md:w-5/6 mx-auto `}>
                      <h2 className={`text-3xl md:text-6xl font-bold text-black ${currentContent.is_backgroud_purple && 'text-white'}`} >{currentContent?.title}</h2>
                      <p className={`font-medium text-sm md:text-2xl text-[#272622] ${currentContent.is_backgroud_purple && 'text-white'}`}>
                          {currentContent?.sub_content}
                      </p>
                      <Link to={`http://localhost:5173/Certifications/2691`}>
                        <button 
                          className={`${currentContent.is_backgroud_purple && 'bg-white !text-purple'} bg-purple text-white hover:opacity-70 transition-all ease-in duration-200 md:mt-8 w-fit flex items-center justify-center text-sm sm:text-base font-medium  h-[2.5rem] md:h-[3.5rem] px-3 md:px-7 rounded-full`}
                        >
                          Explore Training Programs
                        </button>
                      </Link>
                  </div>
                  
              </div>
          </div>
      </div>
    }
    </div>
  )
}

const getHero = async () =>{
  const banner = '/custom/v1/home-banner/'
  const result = await fetchApi(banner)
  return result;
}

export default Hero



