import React from 'react'
import { Link } from 'react-router-dom'

const CertBox = ({image, title, mainTitle, subTitle, boxInfo, gradient, titleColor}) => {
  return (
    <div className={`w-full h-full md:h-[38rem] overflow-hidden px-5 pb-5 md:pb-6 box-outer rounded-[1.25rem] bg-gradient-to-b ${gradient} ${titleColor === 'text-[#200F3B]' && ' border border-[#291843b4] '}`}>
        <div className="box-inner relative flex flex-col justify-between h-full">
            <div>
                <div className='flex justify-between'>
                    <button className={`tag my-5 md:my-6 text-white border border-white rounded-full px-3 h-6 md:h-[1.875rem] text-sm md:text-base flex justify-center items-center w-fit ${titleColor === 'text-[#200F3B]' && ' border !border-[#291843] !text-[#291843] '}`}>Certification</button>
                    <img src={image} alt="tag-icon" className='relative h-28 md:h-48 opacity-40'/>
                </div>

                <div className="box-body mt-2">
                    <h5 className={`text-base md:text-3xl font-bold py-2 md:py-3 ${titleColor}`}>{title}</h5>
                    <h4 className={`text-white text-xl md:text-4xl md:tracking-tighter font-semibold  ${titleColor === 'text-[#200F3B]' && ' !text-[#291843] '}`}>{mainTitle}</h4>
                    <div className={`mt-2 md:mt-5`}>
                        <h6 className={`text-sm md:text-xl font-semibold text-off-white pb-2 ${titleColor === 'text-[#200F3B]' && ' !text-[#291843] '}`}>{subTitle}</h6>
                        <p className={`font-normal pr-5 md:pr-0 text-sm md:text-lg text-off-white leading-6 md:leading-normal  ${titleColor === 'text-[#200F3B]' && '!text-[#3A2B51] '}`}>{boxInfo}</p>
                    </div>
                </div>
            </div>

            <Link to={'/Home/Certifications/1'}>
                <button className='cursor-pointer w-fit mt-5 flex text-sm md:text-lg font-semibold justify-center items-center bg-white border border-cgray h-10 px-5 rounded-full text-black'>
                    Learn More
                </button>
            </Link>
        </div>
        
    </div>
  )
}

export default CertBox