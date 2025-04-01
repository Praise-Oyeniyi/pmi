import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import EDA from '../../../assets/images/ed-avatara.png'

const LinkedinProfile = () => {
  return (
    <div className='w-full my-20'>
        <div className="mx-auto w-5/6 bg-white rounded-3xl p-4 flex justify-between items-center">
            <div className='flex items-center gap-x-5'>
                <div className="avatar w-fit">
                    <img src={EDA} alt="" className='w-[6.25rem]'/>
                </div>
                <div className="bio">
                    <h4 className='text-3xl font-bold flex items-center gap-x-3'>Ravindar Ponnan <FaLinkedin className='text-[#0077B5] mt-1' size={20}/></h4>
                    <h6 className='capitalize text-xl font-semibold'>manager – planning & scheduling, atkinsRealis</h6>
               </div>
            </div>

            <button className='flex w-fit justify-center items-center mr-3 rounded-full bg-secondary text-white px-10 py-2 text-2xl font-bold'>
                Register
            </button>
        </div>

    </div>
  )
}

export default LinkedinProfile