import React from 'react'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import NeedAssistance from './NeedAssistance';



const ReceiveCert = () => {
    const whatReceive = [
        {
            num:'01',
            what:'35 Hours of Instructor-led Training (mandatory requirement)',

        },
        {
            num:'02',
            what:'PMI-Authorized Student Manual',

        },
        {
            num:'03',
            what:'Spotlight Videos & Media',

        },
        {
            num:'04',
            what:'Spotlight Videos & Media',

        },
        {
            num:'05',
            what:'35 Hours of Instructor-led Training (mandatory requirement)',

        },
        {
            num:'06',
            what:'PMI-Authorized Student Manual',

        },
        {
            num:'07',
            what:'Spotlight Videos & Media',

        },
        {
            num:'08',
            what:'Spotlight Videos & Media',

        },
    ]


  return (
    <div className='w-full my-20 overflow-x-hidden'>
        <div className='mx-auto w-[90%] md:w-5/6'>
            <div className="w-full space-y-4 md:space-y-0 md:flex justify-between items-center gap-x-10">
                <h3 className='text-2xl md:text-5xl font-bold'>What You’ll Receive</h3>
                <p className='w-full md:w-3/6 text-sm md:text-2xl font-semibold'>This training includes PMI’s latest digital learning toolkit, designed to give you everything you need to pass the exam:</p>
            </div>
        </div>
        <div className='w-[90%] md:w-5/6 mx-auto  md:ml-[10%] mt-7'>
            <div className="w-full flex justify-between h-full gap-x-5 overflow-x-auto">
                {whatReceive.map((e, index) => (
                    <div key={index} className='md:min-w-[20rem] w-5/6 md:max-w-[20rem] flex-shrink-0 flex-grow-0 flex rounded-2xl p-4 py-6 bg-[#F7F5EF] items-baseline'>
                        <div className='w-full self-stretch font-semibold px-7 md:px-0 text-center space-y-5'>
                            <h3 className='text-purple text-4xl md:text-5xl'>{e.num}</h3>
                            <p className='text-lg md:-2xl'>{e.what}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="controls">
                <div className='flex w-fit items-center gap-x-3 mt-3 ml-auto'>
                    <button><GoArrowLeft size={25}/></button>
                    <button><GoArrowRight size={25}/></button>
                </div>
                
            </div>
        </div>
        <NeedAssistance/>
    </div>
  )
}

export default ReceiveCert