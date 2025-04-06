import React, { useEffect } from 'react'
import CertNumber from '../components/home/CertNumber'
import Header from '../components/global/Header'
import Hero from '../components/home/Hero'
import CertSupport from '../components/home/CertSupport'
import Engaged from '../components/home/Engaged'
import FaqBanner from '../components/home/FaqBanner'
import Footer from '../components/global/Footer'
import { fetchApi } from '../apis'

const Home = () => {

  useEffect(() => {
    const banner = 'https://www.staging.pmibangalorechapter.in/wp-json/custom/v1/matrices/'
    async function fetchData(){
          try {
            const result = await fetchApi(banner)
            if (result){        
              console.log(result)
            } else {
              console.log(result)
            }
            setLoad(true); 
        } catch (error) {
          console.log(error)
            // toast.error(error)
        }
    }
    fetchData();
  }, []);


  return (
    <div className='w-full h-auto bg-hero-bg font-aptos text-dark !overflow-x-hidden'>
        <Header/>
        <Hero/>
        <CertNumber/>
        <CertSupport/>
        <Engaged/>
        <FaqBanner/>
        <Footer/>
    </div>
  )
}

export default Home