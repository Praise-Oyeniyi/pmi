import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import EventDescription from '../components/specialProgram/EventDetails/EventDescription'
import LinkedinProfile from '../components/specialProgram/EventDetails/LinkedinProfile'
import Hero from '../components/specialProgram/Hero'
import R1 from '../assets/images/RE1.png'
import R2 from '../assets/images/RE2.png'
import R3 from '../assets/images/RE3.png'
import R4 from '../assets/images/RE4.png'
import RelatedEvents from '../components/specialProgram/EventDetails/RelatedEvents'
import { useState } from 'react'
import { fetchApi } from '../apis'

const EventDetails = () => {
    const [event, setEvent] = useState(null)
    const {eventId} = useParams() ;

    useEffect(() => {
      const eventLink = `/custom-api/v1/event/2564`
      async function fetchData(){
            try {
              const result = await fetchApi(eventLink)
              if (result.success){        
                setEvent(result.data)
                
              } else {
                console.log(result)
              }
          } catch (error) {
            console.log(error)
          }
      }
      fetchData();
    }, []);


    const relatedEventsInfo=[
      {
        date:'10, apr 2024',
        title:'annual meeting of members 2024',
        image:R1,
      },
      {
        date:'10, apr 2024',
        title:'footprints anniversary new era of project menagement',
        image:R2,
      },
      {
        date:'10, apr 2024',
        title:'escalation management golden rules for...',
        image:R3,
      },
      {
        date:'10, apr 2024',
        title:'annual meeting of members 2024',
        image:R4,
      },
    ]

  return (
    <div className='w-full h-full font-aptos bg-hero-bg overflow-x-hidden'>
        <Header/>
        <div className='w-full'>
            <Hero head={event?.event_title} subhead={event?.event_category[0]?.name} body={event?.date_time} subParams={event?.event_id}/>
              {event?.speakers?.map((speaker, index)=>(
                <LinkedinProfile 
                  name={speaker?.name}
                  link={speaker?.linkedin}
                  role={speaker?.designation}
                  image={speaker?.image}
              />))}
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

            <div className='w-full mt-16 md:mt-20 mb-10'>
              <div className='md:max-w-5/6 mx-auto md:w-5/6 w-[90%]'>
                <h3 className='text-2xl md:text-5xl font-bold'>Related Events</h3>

                <div className='w-full flex-wrap pt-7 md:pt-10 gap-y-6 gap-x-3 flex justify-between items-stretch h-full'>
                  {relatedEventsInfo.map((e,index)=>(
                    <div key={index} className="min-w-[49%] md:w-[49%] w-full "> 
                      <RelatedEvents image={e.image} title={e.title} date={e.date}/>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            
        </div>
        <Footer/>
    </div>
  )
}

export default EventDetails