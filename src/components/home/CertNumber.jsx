import React from 'react'

const CertNumber = () => {
  return (
    <div className='w-full my-20 mb-22'>
        <div className="cert-no-inner text-white w-5/6 mx-auto bg-secondary rounded-lg md:rounded-[1.25rem]">
            <div className="h-fit md:h-28 cert-inner-top md:flex justify-between w-full">
                <div className='flex items-start md:items-center md:px-7 px-5 border-b md:border-b-0 border-b-[#ffffffa4]  py-3 justify-start gap-x-7 md:w-3/6 md:border-r border-r-[#ffffffa4]'>
                    <h4 className='text-lg md:text-3xl font-bold'>1.7M+</h4>
                    <p className='font-normal text-sm md:text-lg'>PMI Certification holders worldwide, making PMI the leader in the field since 1969.</p>
                </div>
                
                <div className='flex items-center md:px-7 px-5 border-b md:border-b-0 border-b-[#ffffffa4]  py-3 justify-start gap-x-7 md:w-3/6'>
                    <h4 className='text-lg md:text-3xl font-bold'>6300</h4>
                    <p className='font-normal text-sm md:text-lg'>PMI certification holders in PMI Bangalore Chapter, making it the second largest PMI Chapter in the world.</p>
                </div>
            </div>


            <div className="h-fit md:h-28 cert-inner-bottom md:border-t border-t-[#ffffffa4] md:flex justify-between w-full">
                <div className='flex items-center md:px-7 px-5 border-b md:border-b-0 border-b-[#ffffffa4]  py-3 justify-start gap-x-7 md:w-3/6 border-r border-r-[#ffffffa4]'>
                    <h4 className='text-lg md:text-3xl font-bold'>₹24L</h4>
                    <p className='font-normal text-sm md:text-lg'>Average annual salary for cAPM-Certified project managers in india.</p>
                </div>
                
                <div className='flex items-center md:px-7 px-5 border-b md:border-b-0 border-b-[#ffffffa4]  py-3 justify-start gap-x-7 md:w-3/6'>
                    <h4 className='text-lg md:text-3xl font-bold'>₹24L</h4>
                    <p className='font-normal text-sm md:text-lg'>Any other statistic you would like to show here</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CertNumber