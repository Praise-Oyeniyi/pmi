import React from 'react'
import { Link } from 'react-router'
import BG from '../../assets/images/sp-bg.png'

const Hero = ({head, body, subhead, image}) => {

  return (
      <div className='w-full sp-bg bg-center bg-contain bg-no-repeat' style={{backgroundImage: `url(${image? image: BG})`}}>
        <div className="inner w-[90%] md:w-5/6 mx-auto py-5 pb-14">
          <h4 className='text-white font-semibold  text-sm md:text-lg tracking-wider'><Link to={'/'} className="hover:underline">Home</Link> / <Link to={'/Special Program'} className="hover:underline">Special Program</Link> / {head && subhead? subhead : head}</h4>
          <div className='text-center my-7'> 
              {subhead && <h4 className='text-lg md:text-2xl py-1 font-bold'>{subhead}</h4>}
              <h3 className={`text-3xl md:text-5xl font-bold pb-3 mx-auto w-5/6 `}> {head}</h3>
              <p className='text-sm md:text-2xl font-medium w-[90%] md:w-[75%] mx-auto'>{body}</p>
          </div>

      </div>
    </div>
    
  )
}

export default Hero