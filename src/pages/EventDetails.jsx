import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import EventDescription from '../components/specialProgram/EventDetails/EventDescription'
import LinkedinProfile from '../components/specialProgram/EventDetails/LinkedinProfile'
import Hero from '../components/specialProgram/Hero'
import RelatedEvents from '../components/specialProgram/EventDetails/RelatedEvents'
import { useState } from 'react'
import LinkedinSkeleton from '../components/global/Skeleton/LinkedinSkeleton'
import EventDescriptionLoader from '../components/global/Skeleton/EventDescriptionLoader'
import NotFound from './NotFound'
import { useQueries } from '@tanstack/react-query'
import { createEventDetailsQueryOptions, createRelatedQueryOptions } from '../components/queryOptions/QueryOptions'
import RelatedLoader from '../components/global/Skeleton/RelatedLoader'
import { Link } from 'react-router'


const EventDetails = () => {
    const [event, setEvent] = useState(null)
    const {id} = useParams()

    const [result1, result2] = useQueries({
      queries:[
        createEventDetailsQueryOptions(id),
        createRelatedQueryOptions(id),
      ]
    })

    useEffect(()=>{
      if(result1.data)
      setEvent(result1.data.data)
    }, [result1.data])


  

  return (
    <div className='w-full h-full font-aeonik bg-hero-bg overflow-x-hidden'>
        <Header/>
        {id === 'undefined' || result1.data?.error?
          <NotFound/>
          :
            <div className='w-full'>
              <Hero head={event?.event_title} subhead={event?.event_category[0]?.name} body={event?.date_time} />

              <div className='my-16 md:my-20 space-y-5'>
                {result1.isPending?
                  <LinkedinSkeleton/>
                  :
                  event?.speakers?.map((speaker, index)=>(
                    <div key={index}>
                      <LinkedinProfile 
                        name={speaker?.name}
                        link={speaker?.linkedin}
                        role={speaker?.designation}
                        image={speaker?.image}
                        date={event?.date_time}
                        regLink={event.register_button_link}
                      />
                    </div>
                  ))}
              </div>

              {result1.isPending?
                <EventDescriptionLoader/>
                :
                <EventDescription
                  image={event?.featured_image?.url}
                  desc={event?.description}
                  audTitle={event?.audience?.title} 
                  audContent={event?.audience?.content}
                  profCert={event?.professional_certifications?.certifications}
                  keyExpTitle={event?.key_experience?.title}
                  profCertTitle={event?.professional_certifications?.title}
                  keyExpPoints={event?.key_experience?.points}
                  aboutSpeaker={event?.about_speaker}
                />
              }

              {!result1.isPending && result1.data.data.fees_right_section[0]?.linkfile && (
                <div>
                  <div className='md:w-5/6 w-[90%] mx-auto mt-16 md:mt-20 mb-10 md:flex justify-between items-center space-y-3 md:space-y-0'>
                    <div className='md:w-2/6 w-5/6'>
                      <h4 className='text-2xl md:text-3xl font-bold pb-2'>Fees</h4>
                      <p>Early Bird offer till April 20th is 5500 all inclusive for all members/non members.</p>
                    </div>

                    <Link to={`${result1.data.data.fees_right_section[0]?.linkfile}`} target={'_blank'}>
                      <div className='cursor-pointer'>
                        <div className='bg-[#FBFBFB] rounded-xl md:rounded-3xl overflow-hidden p-3 md:p-4 border-[#E8E8E8] cursor-pointer'>
                          <div className="inner flex w-full gap-x-3 md:gap-x-4 items-center">
                            <div className="image rounded-lg md:rounded-3xl overflow-hidden">
                              <img src={result1.data.data.fees_right_section[0]?.image.url} alt="" className='md:h-[10.72rem] md:min-w-[14rem] max-w-[14rem] object-cover object-center'/>
                            </div>

                            <div className='w-4/6'>
                              <h4 className='text-xl md:text-3xl font-bold pb-2 line-clamp-3 overflow-hidden'>{result1.data.data.fees_right_section[0]?.label}</h4>
                            </div>
                          </div>
                        </div> 
                      </div>
                    </Link>


                  </div>
                </div>
              )}


              <div className='w-full mt-16 md:mt-20 mb-10'>
                <div className='md:max-w-5/6 mx-auto md:w-5/6 w-[90%]'>
                  <h3 className='text-2xl md:text-5xl font-bold'>Related Events</h3>

                  <div className='w-full grid-cols-1 md:grid-cols-2 pt-7 md:pt-10 gap-y-6 gap-x-3 grid justify-between items-stretch h-full'>
                    {result2.isPending?
                      <RelatedLoader/>
                      :
                        Array.isArray(result2.data.data) && result2.data.data.length > 0 ? (
                          result2.data.data.map((e,index)=>(
                          <div key={index} className=" w-full "> 
                            <RelatedEvents image={e.featured_img} title={e.title} date={e.date} id={e.event_id} name={e.event_category[0]?.name}/>
                          </div>
                        )))
                      :
                      <h3 className='text-base text-dark md:text-xl font-bold leading-tight py-5'>No Related Events</h3>
                    }
                  </div>
                </div>
              </div>
              
              
          </div>
        }
        <Footer/>
    </div>
  )
}



export default EventDetails