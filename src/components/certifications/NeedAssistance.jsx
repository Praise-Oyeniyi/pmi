import React from 'react'
import NA from '../../assets/images/assitImage.png'
import C1 from '../../assets/images/contact1.svg'
import C2 from '../../assets/images/contact2.svg'


const NeedAssistance = () => {
    const contact = [
        {
            name:'Arun',
            avatar:C1,
            phone:'8105354822',
        },
        {
            name:'Ranganatham',
            avatar:C2,
            phone:'9886814078',
        },
    ]


  return (
    <div className='mt-20 w-full md:mb-5'>
        <div className="w-full md:flex justify-start gap-x-10 items-center md:pr-16">
            <div className="image w-5/6 md:w-3/6 my-7 md:my-0">
                <img src={NA} alt="" className='w-full'/>
            </div>

            <div className='w-[90%] mx-auto'>
                <h3 className='text-2xl md:text-5xl font-bold leading-snug pb-1'>Need Assistance?</h3>
                <p className='text-sm md:text-3xl font-semibold'>We’re here to guide you through the process.</p>

                <div className='md:pt-10 pt-5 space-y-3'>
                    <h4 className='text-base md:text-3xl font-semibold '>Contact:</h4>
                    <div>
                        <div className='md:flex gap-x-5 space-y-3 md:space-y-0'>
                            {contact.map((e,index)=>(
                                <div key={index} className='bg-[#F6F6F6] rounded-xl justify-between md:justify-start flex items-center gap-x-4 p-3'>
                                    
                                    <div className='flex items-center gap-x-3'>
                                        <div className='md:h-10 md:w-10 w-8 h-8 rounded-full '>    
                                            <img src={e.avatar} alt="contact-avatar" className='w-full h-full'/>
                                        </div>
                                        <h6 className='text-sm md:text-xl font-normal'>{e.name}:</h6>
                                    </div>

                                    <h5 className='text-sm md:text-xl font-semibold'>{e.phone}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mx-auto w-[90%] md:w-5/6 mt-20">
            <div className="w-full md:flex justify-between items-center gap-x-10">
                <h3 className='font-bold text-2xl md:text-5xl w-full md:w-[60%]'>
                    Want to Learn More About PMP Certification?
                </h3>

                <div className='font-semibold space-y-4-3  md:space-y-8 w-full md:w-[30%]'>
                    <h4 className='text-sm py-5 md:py-0 md:text-xl capitalize'>Understand the certification process and eligibility:</h4>
                    <button className='text-sm md:text-lg capitalize text-white flex justify-center items-center rounded-full px-7 py-3 bg-purple w-fit min-w-fit'>Explore PMP Certification on pMI</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NeedAssistance