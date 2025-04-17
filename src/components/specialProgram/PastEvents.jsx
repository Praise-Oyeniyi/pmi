import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { fetchApi } from '../../apis'
import EngagedLoader from '../global/Skeleton/EngagedLoader'
import EngagedBox from '../home/EngagedBox'



const PastEvents = ({id}) => {
  const [year, setYear] = useState(2025)
  const [info, setInfo] = useState([])

const {data, isPending} = useQuery({
  queryKey: ['past', year, id],
  queryFn: ()=> getPast(year, id),
})

useEffect(()=>{
  if(data){
    setInfo(data.data)
  }
}, [data])

const getPast = async (year, id) =>{
  const relatedAPi = `/custom/v1/past-events/?year=${year}&category_id=${id}`
  const result = await fetchApi(relatedAPi)
  return result
}



  return (
    <div className='w-full mt-16 mb-7 md:my-20 overflow-x-hidden'>
        <div className="inner w-[90%] md:w-5/6 mx-auto py-5 md:py-7 md:px-14">
            <div className='flex items-center gap-x-5 md:gap-x-7 md:mb-4'>
                <h4 className='uppercase text-black font-semibold tracking-wider text-2xl md:text-3xl'>past events</h4>
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

            {isPending?
              <EngagedLoader/>
              : 
               Array.isArray(info) && info.length > 0 ? (
                <div className='space-y-2'>
                    {info.map((event, index)=>(
                        <div key={index}>
                            <EngagedBox image={event?.featured_image.url} 
                                id={event?.event_id} 
                                name={event?.event_category[0]?.name}
                                head={`${event?.event_category[0]?.name} | ${event?.event_time}`} 
                                title={event?.title} 
                                body={event?.brief_content} 
                                style={'border-b text-black'}
                            />
                        </div>
                    ))}
                </div>
              )
              :
              <h3 className='text-base md:text-xl font-medium leading-tight'>No Past Events</h3>
            }
            
        </div>
    </div>
  )
}



export default PastEvents