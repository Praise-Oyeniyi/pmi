import React from 'react'
import E1 from '../../assets/images/Enagaged1.png'
import EngagedBox from '../home/EngagedBox'


const Upcoming = () => {
  return (
    <div className='w-full my-16 md:my-20'>
        <div className="inner w-[90%] md:w-5/6 mx-auto bg-[#00799E] rounded-[20px] py-5 md:py-7 px-3 md:px-14">
            <h4 className='uppercase text-white font-semibold tracking-wider text-2xl md:text-4xl '>upcoming events</h4>
            <EngagedBox image={E1} head={'E&C PM FOOTPRINTS | 12 APR 2025'} style={'text-white'} title={'Best Practices in Forensic Schedule Analysis'} body={'The audience will gain a solid understanding of forensic schedule analysis, including its purpose and significance. They will learn about construction delays, various delay analysis techniques, and different types of claims.'}/>
        </div>
    </div>
  )
}

export default Upcoming