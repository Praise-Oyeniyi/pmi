import React from 'react'
import { useState } from 'react'
import Footer from '../../../components/global/Footer'
import Header from '../../../components/global/Header'
import Info from '../../../components/Profile/Info'
import Videos from '../../../components/Profile/Videos'

const Profile = () => {
    const [tabbed, setTabbed] = useState(0)

  return (
    <div className='w-full h-auto bg-hero-bg font-aptos text-dark !overflow-x-hidden'>
        <Header/>
        <div className='main w-full bg-white pb-16'>
            <div className="p-head w-full h-14 bg-purple flex items-center">
                <div className='cursor-pointer h-full w-5/6 mx-auto text-white text-xl font-semibold flex items-center justify-between'>
                    <ul className='flex items-center pt-3.5 h-full gap-x-7'>
                        {['My Profile', 'My Videos'].map((tab, index)=>(
                            <li 
                                key={index}
                                className={`border-b-2 transition-all ease-linear duration-300 h-full ${index=== tabbed? "border-b-white": "border-b-transparent"} `}
                                onClick={()=>setTabbed(index)}
                            >{tab}</li>
                        ))}
                    </ul>
                    
                    <button className='cursor-pointer'>Logout</button>
                </div>
            </div>


            <div className='py-12 w-5/6 mx-auto transition-all ease-linear duration-300'>
                {tabbed === 0?
                    <div>
                        <Info/>
                    </div>
                    :
                    <div>
                        <Videos/>
                    </div>
                }

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Profile