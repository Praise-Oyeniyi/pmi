import React from 'react'
import fImage from '../../assets//images/faq-image.svg'


const FaqBanner = () => {
  return (
    <div className='w-full md:my-20 mt-20'>
        <div className="faq-inner mx-auto w-[90%] md:w-5/6 bg-gradient-to-b from-[#097C9E] to-[#CDB7A6] rounded-3xl md:rounded-4xl md:px-7 p-5 md:py-10">
            <div className='w-full md:flex justify-between items-center space-y-10 md:space-y-0'>
                <div className="left md:w-[55%] text-white w-full">
                    <h3 className='text-2xl md:text-5xl font-bold pb-3 leading-snug '>Have A Question? <br className='hidden'/>Ask Mitra!</h3>
                    <p className='font-semibold text-sm md:text-2xl tracking-widest'>
                        Mitra is your always-available Al assistant, here to help you navigate the PMI Bangalore Chapter website. 
                        From event details to membership queries, just ask—and Mitra will guide you in seconds.
                    </p>
                </div>

                <div className="right flex md:block w-full justify-center">
                    <img src={fImage} alt="" className='w-fit h-[14rem] md:h-[20rem] md:mr-10' />
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default FaqBanner