import React, { useEffect } from 'react'
import { useState } from 'react'
import { fetchApi } from '../../apis'
import E1 from '../../assets/images/Enagaged1.png'
import EngagedBox from '../home/EngagedBox'



const PastEvents = () => {
  const [year, setYear] = useState(2025)
  const [related, setRelated] = useState(null)

  useEffect(() => {
      const relatedAPi = `/custom/v1/past-events/?year=${year}&category_id=55`
      async function fetchData(){
            try {
              const result = await fetchApi(relatedAPi)
              if (result.success){        
                setRelated(result.data)
              } else {
                console.log(result)
              }
          } catch (error) {
            console.log(error)
          }
      }
      fetchData();
  }, [year]);



  return (
    <div className='w-full mt-16 mb-7 md:my-20 overflow-x-hidden'>
        <div className="inner w-[90%] md:w-5/6 mx-auto py-5 md:py-7 md:px-14">
            <div className='flex items-center gap-x-5 md:gap-x-7 md:mb-4'>
                <h4 className='uppercase text-black font-semibold tracking-wider text-2xl md:text-4xl'>past events</h4>
                <select 
                  onClick={(e)=>setYear(e.target.value)}
                  className='bg-[#F2F2F2] outline-0 rounded-[2px] text-sm md:text-base font-semibold  border border-[#DCDCDC] w-fit px-3 py-2'
                > 
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
            </div>

            <div>
                {related && related.map((event, index)=>(
                    <div key={index}>
                        <EngagedBox image={event?.featured_image?.url} 
                        // id={event?.id} 
                            head={`${event?.event_category[0]?.name} | ${event?.event_time}`} 
                            title={event?.title} 
                            body={event?.brief_content} 
                            style={'border-b text-black'}
                        />
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default PastEvents