import React from 'react'
import { Link } from 'react-router-dom'

const CertBox = ({image, title, mainTitle, subTitle, boxInfo, gradient, index, id}) => {
  return (
    <div className={`w-full group h-full overflow-hidden px-5 pb-5 md:pb-6 box-outer rounded-[1.25rem] bg-cover 
            ${index === 0 && ' borde border-[#291843b4] '}
        `} 
        style={{background:`url(${gradient})`}}
    >
        <div className="box-inner relative flex flex-col justify-between h-full">
            <div className=''>
                <div className='flex justify-between'>
                    <button className={`tag my-5 md:my-6 text-white border border-white rounded-full px-3 h-6 md:h-[1.875rem] text-sm md:text-base flex justify-center items-center w-fit 
                        ${index === 0 && ' border !bordr-[#291843] !tet-[#291843] '}
                    `}>
                        Certification</button>
                    
                    <div className='relative h-24 object-cover md:h-44 w-56 overflow-hidden'>
                        <img src={image} alt="tag-icon" className='w-full h-full absolute group-hover:scale-105 transition-all ease-linear duration-300'/>
                    </div>
                </div>

                <div className="box-body mt-2">
                    <h5 className={`text-base md:text-3xl font-bold py-2 
                        ${index === 0? 'text-[#B365FD]': index ===1 ? 'text-[#05BFE0]':'text-[#200F3B]'}
                        `}>{title}</h5>
                    <h4 className={`text-white text-xl md:text-4xl md:tracking-wide font-semibold  
                        ${index === 0 && ' !tet-[#291843] '}
                    `}>
                        {mainTitle}</h4>
                    <div className={`mt-2 md:mt-5`}>
                        <h6 className={`text-sm md:text-xl font-semibold text-off-white pb-2 
                            ${index === 0 && ' !txt-[#291843] '}
                        `}>
                            {subTitle}
                        </h6>
                        <p className={`font-normal pr-5 md:pr-0 text-sm md:text-lg text-off-white leading-6 md:leading-normal 
                            ${index === 0 && '!tet-[#3A2B51] '}
                        `}>
                            {boxInfo}
                        </p>
                    </div>
                </div>
            </div>

            <Link to={`/Certifications/${id}`}>
                <button className={`
                    ${index === 0? 'hover:bg-[#B365FD]': index ===1 ? 'hover:bg-[#05BFE0]':'hover:bg-[#200F3B]'} transition-all duration-300 ease-linear hover:text-white hover:opacity-85
                    cursor-pointer w-fit mt-5 flex text-sm md:text-lg font-semibold justify-center items-center bg-white h-10 md:h-12 px-5 rounded-full text-black outline-none `}
                >
                    Learn More
                </button>
            </Link>
        </div>
        
    </div>
  )
}

export default CertBox