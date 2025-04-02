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
    <div className='mt-20 w-full mb-5'>
        <div className="w-full flex justify-start gap-x-10 items-center pr-16">
            <div className="image w-3/6">
                <img src={NA} alt="" />
            </div>

            <div>
                <h3 className='text-5xl font-bold leading-snug pb-1'>Need Assistance?</h3>
                <p className='text-3xl font-semibold'>We’re here to guide you through the process.</p>

                <div className='pt-10 space-y-3'>
                    <h4 className='text-3xl font-semibold '>Contact:</h4>
                    <div>
                        <div className='flex gap-x-5'>
                            {contact.map((e,index)=>(
                                <div key={index} className='bg-[#F6F6F6] rounded-xl flex items-center gap-x-4 p-3'>
                                    <div className='flex items-center gap-x-3'>
                                        <div className='h-10 w-10 rounded-full '>    
                                            <img src={e.avatar} alt="contact-avatar" className='w-full h-full'/>
                                        </div>
                                        <h6 className='text-xl font-normal'>{e.name}:</h6>
                                    </div>
                                    <h5 className='text-xl font-semibold'>{e.phone}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mx-auto w-5/6 mt-20">
            <div className="w-full flex justify-between items-center gap-x-10">
                <h3 className='font-bold text-5xl w-[60%]'>
                    Want to Learn More About PMP Certification?
                </h3>

                <div className='font-semibold space-y-8 w-[30%]'>
                    <h4 className='text-xl capitalize'>Understand the certification process and eligibility:</h4>
                    <button className=' text-lg capitalize text-white flex justify-center items-center rounded-full px-7 py-3 bg-purple w-fit min-w-fit'>Explore PMP Certification on pMI</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NeedAssistance