import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { useState } from 'react';
import EngagedLoader from '../global/Skeleton/EngagedLoader';
import EngagedBox from '../home/EngagedBox'
import {createUpcomingQueryOptions} from '../queryOptions/QueryOptions';


const Upcoming = ({id}) => {
 const [coming, setComing] = useState([]);

  const {data, isPending} = useQuery(createUpcomingQueryOptions(id))

  useEffect(()=>{
    if(data){
      setComing(data.data)
    }
  }, [data])


  

  return (
    <div className='w-full my-16 md:my-20'>
        <div className="inner w-[90%] md:w-5/6 mx-auto bg-[#00799E] rounded-[20px] py-5 md:py-7 px-3 md:px-14">
            <h4 className='uppercase text-white font-semibold tracking-wider text-2xl md:text-3xl'>upcoming events</h4>
            {isPending?
              <EngagedLoader count={1}/>
              : 
              Array.isArray(data?.data) && data.data.length > 0 ? (
                <EngagedBox 
                  image={coming[0]?.featured_image?.url} 
                  id={coming[0]?.id} 
                  head={`${coming[0]?.event_category[0]?.name} | ${coming[0]?.event_time}`} 
                  style={'text-white'} 
                  name={coming[0]?.event_category[0]?.name}
                  title={coming[0]?.title} 
                  body={coming[0]?.brief_content}/>
              )
              :
              <h3 className='text-base md:text-xl font-medium leading-tight text-white py-3'>No Upcoming Events</h3>
            }
        </div>
    </div>
  )
}



export default Upcoming