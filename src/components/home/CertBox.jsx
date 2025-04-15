import React from 'react'
import { Link } from 'react-router-dom'

const CertBox = ({image, title, mainTitle, subTitle, boxInfo, gradient, index, id}) => {
  return (
    <div className={`w-full group h-full overflow-hidden pl-5 md:px-5b pb-5 md:pb-6 box-outer rounded-[1.25rem] bg-cover 
            ${index === 0 && ' borde border-[#291843b4] '}
        `} 
        style={{background:`url(${gradient})`}}
    >
        <div className="box-inner relative flex flex-col justify-between h-full">
            <div className=''>
                <div className='flex justify-between'>
                    <button className={`tag my-5 md:my-6 text-[#291843] border-[#291843]  border  rounded-full px-3 h-6 md:h-[1.875rem] text-sm md:text-base flex justify-center items-center w-fit 
                        ${title.toLowerCase().includes('pmp') && '!text-white !border-white'}
                    `}>
                        Certification</button>
                    
                    <div className='relative h-24 md:h-44 w-56 overflow-hidden'>
                        <img src={image} alt="tag-icon" className='w-full h-full object-contain object-top absolute group-hover:scale-105 transition-all ease-linear duration-300'/>
                    </div>
                </div>

                <div className="box-body mt-2 pr-5">
                    <h5 className={`text-base md:text-3xl font-bold py-2 
                        ${title ? (
                            title.toLowerCase().includes('pmp') ? 'text-[#B365FD]' : 
                            title.toLowerCase().includes('pmi-acp') ? 'text-[#200F3B]' : 
                            'text-[#200F3B]'
                          ) : 'text-[#200F3B]'}
                        `}>
                            {title}</h5>
                    <h4 className={`text-[#291843] text-xl md:text-4xl md:tracking-wide font-semibold w-[90%] sm:w-full
                        ${title.toLowerCase().includes('pmp') && '!text-white'}
                    `}>
                        {mainTitle}</h4>
                    <div className={`mt-2 md:mt-5`}>
                        <h6 className={`text-sm md:text-xl font-semibold text-[#291843]  pb-2 
                            ${title.toLowerCase().includes('pmp') && '!text-off-white'}
                        `}>
                            {subTitle}
                        </h6>
                        <p className={`font-normal pr-5 md:pr-0 text-sm md:text-lg text-[#291843] leading-6 md:leading-normal 
                            ${title.toLowerCase().includes('pmp') && '!text-off-white'}
                        `}>
                            {boxInfo}
                        </p>
                    </div>
                </div>
            </div>

            <Link to={`/Certifications/${id}`}>
                <button className={`
                    transition-all duration-300 ease-linear hover:text-white hover:opacity-85
                    cursor-pointer w-fit mt-5 flex text-sm md:text-lg font-semibold justify-center items-center bg-white h-10 md:h-12 px-5 rounded-full text-black outline-none 
                    ${title.toLowerCase().includes('pmp') ? 'hover:bg-[#B365FD]' : 
                        title.toLowerCase().includes('pmi-acp') ? 'hover:bg-[#200F3B]' : 'hover:bg-[#200F3B]'}`}
                >
                    Learn More
                </button>
            </Link>
        </div>
        
    </div>
  )
}

export default CertBox