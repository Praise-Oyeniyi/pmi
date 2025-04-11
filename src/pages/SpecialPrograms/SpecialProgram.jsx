import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'
import SPLoader from '../../components/global/Skeleton/SPLoader'
import { createSpecialQueryOptions } from '../../components/queryOptions/QueryOptions'
import Hero from '../../components/specialProgram/Hero'
import PastEvents from '../../components/specialProgram/PastEvents'
import Upcoming from '../../components/specialProgram/Upcoming'

const SpecialProgram = () => {
  const {id} = useParams()
  const {data, isPending} = useQuery(createSpecialQueryOptions())

  if(data)
  var gotData = data.data.find((e) => e.id === parseInt(id, 10))

  return (
    <div className='w-full h-full font-aptos bg-hero-bg overflow-x-hidden'>
        <Header/>
        <div className='w-full'>

            {isPending?
              <SPLoader/>
            :
              <Hero head={gotData.name} body={gotData.description} image={gotData.image}/>
            }
            <Upcoming id={id}/>
            <PastEvents id={id}/>

        </div>
        <Footer/>
    </div>
  )
}


export default SpecialProgram