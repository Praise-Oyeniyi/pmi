import React from 'react'

const Hero = ({head, body, subParams, subhead}) => {
  
    // const name = searchParams.get('name');
  return (
    <div className='w-full sp-bg bg-center bg-contain bg-no-repeat'>
        <div className="inner w-5/6 mx-auto py-5 pb-14">
            <h4 className='text-white font-semibold text-xl'> Home / {subParams}</h4>
            <div className='text-center'> 
                {subhead && <h4 className='text-3xl py-1 font-bold'>{subhead}</h4>}
                <h3 className='text-6xl font-bold pb-3 '> {head}</h3>
                <p className='text-2xl font-bold w-5/6 mx-auto'>{body}</p>
            </div>

        </div>
    </div>
  )
}

export default Hero