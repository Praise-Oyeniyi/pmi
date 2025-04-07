import React, { useEffect } from 'react'
import Hero from '../components/certifications/Hero'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import HeroImage from '../assets/icons/CertHero1.svg'
import TrainingInfo from '../components/certifications/TrainingInfo'
import ReceiveCert from '../components/certifications/ReceiveCert'
import { useParams } from 'react-router'
import { useState } from 'react'
import { fetchApi } from '../apis'

const Certifications = () => {
  const [cert, setCert] = useState([])
  const {id} = useParams();
    

  useEffect(() => {
    const certification = `/custom/v1/certification/${id}`
    async function fetchData(){
          try {
            const result = await fetchApi(certification)
            if (result.success){        
              setCert(result.data)
              
            } else {
              console.log(result)
            }
        } catch (error) {
          console.log(error)
        }
    }
    fetchData();
  }, []);

    const HeroInfo = {
        image: HeroImage, 
    }
    console.log(cert)

  return (
    <div className='w-full h-full font-aptos bg-white text-dark overflow-x-hidden'>
        <Header/>
        <div className='relative'>
            <Hero image={cert?.inner_icon?.url} title={cert?.certification_name} duration={cert?.experience} body={cert?.long_description}/>
            <TrainingInfo 
              schTitle={cert?.schedule_title} 
              schDesc={cert?.schedule_description} 
              whyTitle ={cert?.why_pmp_title}
              feeM={cert?.fees_for_members}
              feeNM={cert?.fees_for_non_members}
              trainFeeTitle ={cert?.training_fees_title}
              whyDesc={cert?.why_pmp_description}
              whyImage={cert?.why_pmp_image}
              dates={cert?.upcoming_batches_dates}
            />


            <ReceiveCert
              whatReceive={cert?.what_you_receive_points}
              explore={cert?.explore_pmp_certification_on_pmi}
            />
        </div>

        <Footer/>
    </div>
  )
}

export default Certifications