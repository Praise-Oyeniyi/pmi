import React, { useEffect } from 'react'
import { useState } from 'react';
import { fetchApi } from '../../apis';
import E1 from '../../assets/images/Enagaged1.png'
import EngagedBox from '../home/EngagedBox'


const Upcoming = () => {
 const [coming, setComing] = useState([]);

  useEffect(() => {
    const comingLink = `/custom/v1/upcoming-events?category_id=55`
    async function fetchData(){
          try {
            const result = await fetchApi(comingLink)
            if (result.success){        
              setComing(result.data)
              
            } else {
              console.log(result)
            }
        } catch (error) {
          console.log(error)
        }
    }
    fetchData();
  }, []);

  console.log(coming)

  return (
    <div className='w-full my-16 md:my-20'>
        <div className="inner w-[90%] md:w-5/6 mx-auto bg-[#00799E] rounded-[20px] py-5 md:py-7 px-3 md:px-14">
            <h4 className='uppercase text-white font-semibold tracking-wider text-2xl md:text-4xl '>upcoming events</h4>
            <EngagedBox 
              image={coming[0]?.featured_image?.url} 
              // id={coming[0]?.id} 
              head={`${coming[0]?.event_category[0]?.name} | ${coming[0]?.event_time}`} 
              style={'text-white'} 
              title={coming[0]?.title} 
              body={coming[0]?.brief_content}/>
        </div>
    </div>
  )
}

export default Upcoming