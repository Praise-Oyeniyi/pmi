import React, { useEffect } from 'react'
import Hero from '../components/certifications/Hero'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import TrainingInfo from '../components/certifications/TrainingInfo'
import ReceiveCert from '../components/certifications/ReceiveCert'
import { useParams } from 'react-router'
import { useState } from 'react'
import { fetchApi } from '../apis'
import { useQuery } from '@tanstack/react-query'
import HeroSkeleton from '../components/global/Skeleton/HeroSkeleton'
import NotFound from './NotFound'

const Certifications = () => {
  const [cert, setCert] = useState([])
  const {id} = useParams();
  

  const {data, isPending} = useQuery({
    queryKey: ['certdetails', id],
    queryFn: ()=>getCertDetails(id),
  })

  useEffect(()=>{
    if(data)
    setCert(data.data)
  }, [data])


  return (
    <div className='w-full h-full font-aeonik bg-white text-dark overflow-x-hidden'>
        <Header/>
        {isPending?
          <div>
            <HeroSkeleton/>

          </div>
          : 
          data.error?
          <NotFound/>
          :
          <div className='relative'>
              <Hero 
                image={cert?.inner_icon?.url} 
                title={cert?.certification_name} 
                duration={cert?.experience} 
                body={cert?.long_description}
                url={cert.certification_name}
                link={cert.register_link}
                id={id}
              />
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
        }

        <Footer/>
    </div>
  )
}

const getCertDetails = async (id) =>{
  const certification = `/custom/v1/certification/${id}`
  const result = await fetchApi(certification)
  return result;
}

export default Certifications