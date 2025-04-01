import React from 'react'
import NA from '../../assets/images/assitImage.png'

const NeedAssistance = () => {
  return (
    <div className='my-20 w-full'>
        <div className="w-full flex justify-start gap-x-10 items-center pr-16">
            <div className="image w-3/6">
                <img src={NA} alt="" />
            </div>

            <div>
                <h3 className='text-5xl font-bold leading-snug'>Need Assistance?</h3>
                <p className='text-3xl font-semibold'>We’re here to guide you through the process.</p>

                <div className='pt-5'>
                    <h4 className='text-3xl font-semibold '>Contact:</h4>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NeedAssistance