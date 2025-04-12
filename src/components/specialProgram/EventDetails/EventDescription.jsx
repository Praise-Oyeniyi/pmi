import React from 'react'

const EventDescription = ({image, desc, audTitle, audContent, profCert, keyExpTitle, profCertTitle, keyExpPoints, aboutSpeaker}) => {

  return (
    <div className='w-full'>
        <div className='mx-auto w-[90%] md:w-5/6 space-y-10'>
            <div className="description w-full">

                <div className='md:flex items-stretch gap-x-7 justify-between w-full'> 
                    
                    <div className="image md:min-w-[30rem] max-h-[22rem] rounded-3xl overflow-hidden md:max-w-[30rem]">
                        <img src={image} alt="" className='h-full w-full object-cover object-top'/>
                    </div>

                    <div className='bg-white rounded-3xl mt-7 md:mt-0 p-3 md:p-5 md:px-7 border border-[#E8E8E8]'>
                        <h4 className='text-2xl md:text-3xl font-bold pb-2 border-b  border-b-[#DADADA]'>Description</h4>
                        <div className='text-sm md:text-xl font-normal pt-3 space-y-2'>{desc}</div>
                    </div>
                </div>
            </div>

            <div>
                <h4 className='text-2xl md:text-3xl font-bold pb-2'>
                    {audTitle}
                </h4>
                <p className='text-sm md:text-xl font-normal'>
                    {audContent}
                </p>
            </div>

            <div className="speaker">
                <h4 className='text-2xl md:text-3xl font-bold pb-2'>About the speaker</h4>
                <div className='text-sm md:text-xl font-light space-y-2 list-disc' dangerouslySetInnerHTML={{ __html: aboutSpeaker }}/>


                {keyExpPoints !== [] || profCert !== [] && 
                    <div className='bg-white rounded-xl md:rounded-3xl p-3 md:p-5 md:px-7 border border-[#E8E8E8] mt-7'>
                    <h4 className='text-lg md:text-2xl font-semibold md:pb-2 '>{keyExpTitle}:</h4>
                    <div className='pt-2'>
                        <ul className='md:flex justify-between list-disc text-[#3A2B51] text-sm md:text-xl font-normal'>
                            <div className='w-full md:w-3/6 space-y-2 border-b md:border-b-0 border-b-[#DADADA] pb-3 md:pb-0 md:border-r border-r-[#DADADA] md:pr-10 pl-5'>
                                {keyExpPoints?.map((point,index)=>(
                                    <li key={index}>{point}</li>
                                ))}
                            </div>
                            <div className='w-full md:w-3/6 md:pl-10 md:-mt-1 pt-3 md:pt-0'>
                                <h4 className='text-[#040301] text-lg md:text-2xl font-semibold md:w-full w-3/6 pb-3 md:pb-1 leading-tight'>{profCertTitle}:</h4>
                                <div className='pl-5 space-y-2'>
                                    {profCert?.map((point,index)=>(
                                        <li key={index} dangerouslySetInnerHTML={{ __html: point}}/>
                                    ))}
                                </div>
                            </div>
                            
                        </ul>
                    </div>
                </div>}
            
            </div>
        </div>

    </div>
  )
}

export default EventDescription