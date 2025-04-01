import React from 'react'
import fImage from '../../assets//images/faq-image.svg'


const FaqBanner = () => {
  return (
    <div className='w-full my-20'>
        <div className="faq-inner mx-auto w-5/6 bg-gradient-to-b from-[#097C9E] to-[#CDB7A6] rounded-4xl px-7 py-10">
            <div className='w-full flex justify-between items-center'>
                <div className="left w-[55%] text-white">
                    <h3 className='text-5xl font-bold pb-3 leading-snug '>Have A Question? <br/>Ask Mitra!</h3>
                    <p className='font-semibold text-2xl tracking-widest'>
                        Mitra is your always-available Al assistant, here to help you navigate the PMI Bangalore Chapter website. 
                        From event details to membership queries, just ask—and Mitra will guide you in seconds.
                    </p>
                </div>

                <div className="right">
                    <img src={fImage} alt="" className='w-fit h-[20rem] mr-10' />
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default FaqBanner