import React from 'react'
import { Link } from 'react-router-dom'

const CertBox = ({image, title, mainTitle, subTitle, boxInfo, gradient, titleColor}) => {
  return (
    <div className={`w-full h-full overflow-hidden px-4 pb-4 box-outer rounded-[1.25rem] bg-gradient-to-b ${gradient} ${titleColor === 'text-[#200F3B]' && ' border border-[#291843b4] '}`}>
        <div className="box-inner relative flex flex-col justify-between h-full">
            <div>
                <div className='flex justify-between'>
                    <button className={`tag my-4 text-white border border-white rounded-full px-3 h-[1.875rem] flex justify-center items-center w-fit ${titleColor === 'text-[#200F3B]' && ' border !border-[#291843] !text-[#291843] '}`}>Certification</button>
                    <img src={image} alt="tag-icon" className='relative h-40 opacity-40'/>
                </div>

                <div className="box-body">
                    <h5 className={`text-3xl font-bold py-2 ${titleColor}`}>{title}</h5>
                    <h4 className={`text-white text-3xl font-semibold  ${titleColor === 'text-[#200F3B]' && ' !text-[#291843] '}`}>{mainTitle}</h4>
                    <div className={`mt-5`}>
                        <h6 className={`text-xl font-semibold text-off-white pb-1 ${titleColor === 'text-[#200F3B]' && ' !text-[#291843] '}`}>{subTitle}</h6>
                        <p className={`font-normal text-lg text-off-white ${titleColor === 'text-[#200F3B]' && '!text-[#3A2B51] '}`}>{boxInfo}</p>
                    </div>
                </div>
            </div>

            <Link to={'/Home/Certifications/1'}>
                <button className='w-fit mt-5 flex text-lg font-semibold justify-center items-center bg-white border border-cgray h-10 px-5 rounded-full text-black'>
                    Learn More
                </button>
            </Link>
        </div>
        
    </div>
  )
}

export default CertBox