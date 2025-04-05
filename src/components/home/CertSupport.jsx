import React, { useRef, useState } from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import Box1 from '../../assets/icons/box1.svg'
import Box2 from '../../assets/icons/box2.svg'
import Box3 from '../../assets/icons/box3.svg'
import CertBox from './CertBox'



const CertSupport = () => {
    const supportBox = [
        {
            imageIcon:Box1,
            title:'PMP®',
            mainTitle:'Project Management Professional (PMP)®', 
            subTitle:'3-5 years of experience', 
            boxInfo:'The PMP® validates skills and knowledge in managing & directing people, processes, and priorities for a project team from start to finish.',
            gradient:'from-[#14062A] to-[#2B0C58]',
            titleColor:'text-[#B365FD]'

        },
        {
            imageIcon:Box2,
            title:'CAPM®',
            mainTitle:'Certified Associate in Project Management (CAPM)®', 
            subTitle:'No experience required', 
            boxInfo:"This certification demonstrates an understanding of the foundational skills that project teams demand.",
            gradient:'from-[#041120] to-[#02384D]',
            titleColor:'text-[#05BFE0]'

        },
        {
            imageIcon:Box3,
            title:'PMI-ACP®',
            mainTitle:'PMI Agile Certified Practitioner (PMI-ACP)®', 
            subTitle:'2+ years of experience', 
            boxInfo:'This Certification validates your ability to engage stakeholders, apply agile approaches, and lead teams.',
            gradient:'from-[#FEFEFE] to-[#D3BEAE]',
            titleColor:'text-[#200F3B]'

        }

    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = supportBox.length;
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
    <div className='top-cert-outer w-full pb-20'>
        <div className="cert-inner w-[90%] md:w-5/6 mx-auto pb-10">
            <div className="top md:flex w-full justify-between items-center">
                <div className='space-y-3 md:space-y-5'>
                    <h3 className='text-xl md:text-5xl font-bold w-5/6 md:w-4/6 leading-snug tracking-wider md:tracking-normal'>Top Certifications We Support</h3>
                    <button className='bg-white hidden rounded-full md:flex justify-center items-center border border-cgray px-7 h-[3rem]'>View all certifications</button>
                </div>

                <p className='text-sm md:text-2xl font-medium md:w-2/6 md:text-right'>Boost your professional credibility
                    with globally recognized certifications.
                    Whether you're starting your journey
                    or upskilling for leadership, PMI
                    Bangalore offers the top programs to
                    help you stand out and succeed.
                </p>

                <button className='bg-white md:hidden text-sm rounded-full flex justify-center items-center border border-cgray px-5 h-[2.6rem] mt-4'>View all certifications</button>

            </div>
        </div>


        <div 
            className="certBox flex max-w-[90%] w-[90%] md:w-5/6 mx-auto gap-x-4 min-h-fit justify-between items-stretch overflow-hidden"
            ref={sliderRef}
        >
            {supportBox.map((e,index)=>(
                <div 
                    key={index} 

                    className="md:max-w-2/6 md:min-w-[20%] md:w-2/6 min-w-[80%] max-w-[80%] h-auto transition-all duration-300 ease-in-out md:transform-none" 
                    style={{ transform: `translateX(-${currentIndex * 95}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <CertBox title={e.title} 
                        mainTitle={e.mainTitle} 
                        subTitle={e.subTitle} 
                        image={e.imageIcon} 
                        gradient={e.gradient} 
                        boxInfo={e.boxInfo} 
                        titleColor={e.titleColor}
                    />
                </div>
            ))}
        </div>
        
        <div className="certbox-control md:hidden mt-7">
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <div className='flex items-center gap-x-1'>
                    {supportBox.map((_, index) => (
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
                        className={`${canGoRight ? 'text-[#200F3B]' : 'text-cgray'}`} 
                        disabled={!canGoRight}
                    >
                        <GoArrowRight className='text-xl'/>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CertSupport