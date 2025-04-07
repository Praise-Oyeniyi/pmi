import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../apis';
import heroBg from '../../assets/images/hero-image.png';
import HeroSkeleton from '../global/Skeleton/HeroSkeleton';


const Hero = () => {
  const [heroData, setHeroData] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const banner = '/custom/v1/home-banner/'
    async function fetchData(){
          try {
            const result = await fetchApi(banner)
            if (result.success){        
              setHeroData(result.data)
              
            } else {
              console.log(result)
            }
        } catch (error) {
          console.log(error)
        }
    }
    fetchData();
  }, []);


  useEffect(() => {
  const interval = setInterval(() => {
    heroData && setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
  }, 5000);
  
  return () => clearInterval(interval);
  }, [heroData && heroData.length]);

  const currentContent = heroData && heroData[currentSlide];


  return (
    <div>
    {
      !heroData?
        <HeroSkeleton/>
      :
      <div className={`hero-outer transition-all ease-linear duration-300 ${currentContent?.bgColor}`} style={{backgroundImage: currentContent?.background_image}}>
          <div className="hero-inner py-7 space-y-7 sm:space-y-0 sm:py-10 block md:flex justify-between items-center ">
              <div className="hero-image-section w-5/6  md:w-[50rem]">
                  <img src={currentContent?.banner} alt="pmi hero section media"  className='object-cover h-full w-full'/>
              </div>

              <div className="hero-text w-full md:w-4/6 ">
                  <div className={`hero-text-inner space-y-4 pr-10 sm:w-full w-[90%] md:w-5/6 mx-auto `}>
                      <h2 className={`text-3xl md:text-6xl font-bold text-black `} >{currentContent?.title}</h2>
                      <p className={`font-medium text-sm md:text-2xl text-[#272622] `}>
                          {currentContent?.sub_content}
                      </p>
                      <button className={`${currentContent?.buttonColor} bg-secondary text-white hover:opacity-70 transition-all ease-in duration-200 md:mt-8 w-fit flex items-center justify-center text-sm sm:text-lg font-semibold  h-[2.5rem] md:h-[3.5rem] px-3 md:px-7 rounded-full`}>
                        Explore Training Programs
                      </button>
                  </div>
                  
              </div>
          </div>
      </div>
    }
    </div>
  )
}

export default Hero



