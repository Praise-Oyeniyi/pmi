import React, { useEffect, useState } from 'react'
import heroBg from '../../assets/images/hero-image.png';


const Hero = () => {
    const heroContent = [
        {
          id: 1,
          bgColor: 'bg-hero-bg',
          image: heroBg,
          title: 'Empowering Project Professionals, One Step at a Time',
          description: 'Join a vibrant community of certified project leaders, forward-thinking professionals, and changemakers. Access exclusive trainings, register for events, and unlock opportunities to grow, lead, and contribute with PMI Bangalore Chapter',
          buttonText: 'Explore Training Programs',
          buttonColor: ' bg-secondary text-white'
        },
        {
          id: 2,
          bgColor:'bg-purple',
          image: heroBg,
          title: 'Advance Your Career with Industry-Leading Certifications',
          description: 'Take the next step in your professional journey with our PMP, CAPM, and Agile certifications. Our expert-led programs provide the knowledge and credentials you need to excel in today\'s competitive project management landscape.',
          buttonText: 'Explore Training Programs',
          buttonColor: ' bg-white text-dark'
        },
        {
          id: 3,
          bgColor: 'bg-grey-400',
          image: heroBg,
          title: 'Connect with a Global Network of Project Leaders',
          description: 'Expand your professional network and gain insights from industry experts worldwide. Attend our monthly meetups, annual conferences, and specialized workshops to share knowledge and build meaningful relationships.',
          buttonText: 'Join Our Community',
          buttonColor: ' bg-secondary text-white'
        }
    ];
    
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % heroContent.length);
    }, 5000);
    
    return () => clearInterval(interval);
    }, [heroContent.length]);

    const currentContent = heroContent[currentSlide];


  return (
    <div className={`hero-outer transition-all ease-linear duration-300 ${currentContent.bgColor}`}>
        <div className="hero-inner py-7 space-y-7 sm:space-y-0 sm:py-10 block md:flex justify-between items-center ">
            <div className="hero-image-section w-5/6  md:w-[50rem]">
                <img src={currentContent.image} alt="pmi hero section media"  className='object-cover h-full w-full'/>
            </div>

            <div className="hero-text w-full md:w-4/6 ">
                <div className={`hero-text-inner space-y-4 pr-10 sm:w-full w-[90%] md:w-5/6 mx-auto `}>
                    <h2 className={`text-3xl md:text-6xl font-bold text-black ${currentContent.id == 2 && '!text-white'}`} >{currentContent.title}</h2>
                    <p className={`font-medium text-sm md:text-2xl text-[#272622] ${currentContent.id == 2 && '!text-white'}`}>
                        {currentContent.description}
                    </p>
                    <button className={`${currentContent.buttonColor} hover:opacity-70 transition-all ease-in duration-200 md:mt-8 w-fit flex items-center justify-center text-sm sm:text-lg font-semibold  h-[2.5rem] md:h-[3.5rem] px-3 md:px-7 rounded-full`}>
                        {currentContent.buttonText}
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero