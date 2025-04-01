import React from 'react'
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

const EventDetails = () => {
    const {eventId} = useParams() ;

    const heroInfo = {
        subtitle:'E&C PM Footprints',
        title:"Best Practices in Forensic Schedule Analysis",
        body:'12 Apr 25 | 10.00 AM',
        subParams: eventId,
    }

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
    <div className='w-screen h-full font-aptos bg-hero-bg'>
        <Header/>
        <div className='w-full'>
            <Hero head={heroInfo.title} subhead={heroInfo.subtitle} body={heroInfo.body} subParams={heroInfo.subParams}/>
            <LinkedinProfile/>
            <EventDescription/>

            <div className='w-full mt-20 mb-10'>
              <div className='max-w-5/6 mx-auto w-5/6'>
                <h3 className='text-6xl font-bold'>Related Events</h3>

                <div className='w-full flex-wrap pt-10 gap-y-6 gap-x-3 flex justify-between items-stretch h-full'>
                  {relatedEventsInfo.map((e,index)=>(
                    <div key={index} className="min-w-[49%] w-[49%] "> 
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