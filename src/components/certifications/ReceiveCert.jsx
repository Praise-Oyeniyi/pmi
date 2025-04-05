import React, { useRef, useState } from 'react'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import NeedAssistance from './NeedAssistance';



const ReceiveCert = () => {
    const whatReceive = [
        {
            num:'01',
            what:'35 Hours of Instructor-led Training (mandatory requirement)',

        },
        {
            num:'02',
            what:'PMI-Authorized Student Manual',

        },
        {
            num:'03',
            what:'Spotlight Videos & Media',

        },
        {
            num:'04',
            what:'Spotlight Videos & Media',

        },
        {
            num:'05',
            what:'35 Hours of Instructor-led Training (mandatory requirement)',

        },
        {
            num:'06',
            what:'PMI-Authorized Student Manual',

        },
        {
            num:'07',
            what:'Spotlight Videos & Media',

        },
        {
            num:'08',
            what:'Spotlight Videos & Media',

        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = whatReceive.length;
    const sliderRef = useRef(null);
    
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const minSwipeDistance = 50; 
    
    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    
    const handleNextClick = () => {
        if (currentIndex < totalItems - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        setTouchEnd(e.targetTouches[0].clientX);
        setIsSwiping(true);
    };
    
    const handleTouchMove = (e) => {
        if (!isSwiping) return;
        
        setTouchEnd(e.targetTouches[0].clientX);
        
        if (Math.abs(touchEnd - touchStart) > 10) {
            e.preventDefault();
        }
    };
    
    const handleTouchEnd = () => {
        if (!isSwiping) return;
        setIsSwiping(false);
        
        if (touchStart - touchEnd > minSwipeDistance) {
            if (currentIndex < totalItems - 1) {
                handleNextClick();
            }
        }
        
        if (touchEnd - touchStart > minSwipeDistance) {
            if (currentIndex > 0) {
                handlePrevClick();
            }
        }
    };
  
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < totalItems - 1;


  return (
    <div className='w-full my-20 overflow-x-hidden'>
        <div className='mx-auto w-[90%] md:w-5/6'>
            <div className="w-full space-y-4 md:space-y-0 md:flex justify-between items-center gap-x-10">
                <h3 className='text-2xl md:text-5xl font-bold'>What You’ll Receive</h3>
                <p className='w-full md:w-3/6 text-sm md:text-2xl font-semibold'>This training includes PMI’s latest digital learning toolkit, designed to give you everything you need to pass the exam:</p>
            </div>
        </div>
        <div className='w-full overflow-x-hidden  mt-7'>
            <div className='mx-auto md:ml-[5%] w-[90%]'>  
                <div className="w-full flex justify-between hide-bar h-full gap-x-5 " ref={sliderRef}>
                    {whatReceive.map((e, index) => (
                        <div key={index}
                            className='md:min-w-[20rem] min-w-[90%] max-w-[90%] md:max-w-[20rem] flex-shrink-0 flex-grow-0 flex rounded-2xl p-5 px-7 md:px-10 py-6 bg-[#F7F5EF] items-baseline transition-all duration-300 ease-in-out'
                            style={{ transform: `translateX(-${currentIndex * 105}%)` }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className='w-full self-stretch font-semibold px-7 md:px-0 text-center space-y-5 flex flex-col justify-center items-center'>
                                <h3 className='text-purple text-4xl md:text-5xl h-1/4'>{e.num}</h3>
                                <p className='text-lg md:-2xl h-2/4'>{e.what}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="certbox-control mt-7 w-[90%] mx-auto">
                <div className='w-full mx-auto flex justify-between items-center'>
                    <div className='flex items-center gap-x-[2px]'>
                        {whatReceive.map((_, index) => (
                            <div 
                                key={index} 
                                className={`h-[0.15rem] transition-all duration-300 ease-in-out ${index === currentIndex ? 'w-5' : 'w-1'} bg-[#200F3B]`}
                            ></div>
                        ))}
                    </div>

                    <div className='flex w-fit items-center gap-x-3 cursor-pointer'>
                        <button 
                            onClick={handlePrevClick} 
                            className={`${canGoLeft ? 'text-[#200F3B]' : 'text-cgray'}`}
                            disabled={!canGoLeft}
                        >
                            <GoArrowLeft className='text-xl'/>
                        </button>
                        <button 
                            onClick={handleNextClick} 
                            className={`${canGoRight ? 'text-[#200F3B]' : 'text-cgray', currentIndex === 5 && 'md:pointer-events-none md:!text-cgray'}`} 
                            disabled={!canGoRight}
                        >
                            <GoArrowRight className='text-xl'/>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
        <NeedAssistance/>
    </div>
  )
}

export default ReceiveCert