import React from 'react'

const CertNumber = () => {
  return (
    <div className='w-full my-20 mb-22'>
        <div className="cert-no-inner text-white w-5/6 mx-auto bg-secondary rounded-[1.25rem]">
            <div className="h-28 cert-inner-top flex justify-between w-full">
                <div className='flex items-center px-7 py-3 justify-start gap-x-7 w-3/6 border-r border-r-[#ffffffa4]'>
                    <h4 className='text-3xl font-bold'>1.7M+</h4>
                    <p className='font-normal text-lg'>PMI Certification holders worldwide, making PMI the leader in the field since 1969.</p>
                </div>
                
                <div className='flex items-center px-7 py-3 justify-start gap-x-7 w-3/6'>
                    <h4 className='text-3xl font-bold'>6300</h4>
                    <p className='font-normal text-lg'>PMI certification holders in PMI Bangalore Chapter, making it the second largest PMI Chapter in the world.</p>
                </div>
            </div>


            <div className="h-28 cert-inner-bottom border-t border-t-[#ffffffa4] flex justify-between w-full">
                <div className='flex items-center px-7 py-3 justify-start gap-x-7 w-3/6 border-r border-r-[#ffffffa4]'>
                    <h4 className='text-3xl font-bold'>₹24L</h4>
                    <p className='font-normal text-lg'>Average annual salary for cAPM-Certified project managers in india.</p>
                </div>
                
                <div className='flex items-center px-7 py-3 justify-start gap-x-7 w-3/6'>
                    <h4 className='text-3xl font-bold'>₹24L</h4>
                    <p className='font-normal text-lg'>Any other statistic you would like to show here</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CertNumber