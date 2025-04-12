import EngagedBox from './EngagedBox'
import { FaChevronRight } from "react-icons/fa6";
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import EngagedLoader from '../global/Skeleton/EngagedLoader';



const Engaged = () => {
  const {data, isPending} = useQuery({
    queryKey: ['activeEvents'],
    queryFn: getActive
  })


  return (
    <div>
        <div className="engaged-inner mx-auto w-[90%] md:w-5/6 ">
            <div className="head mb-2 md:mb-7">
                <h3 className='text-2xl md:text-6xl font-bold pb-2 md:pb-1 leading-snug'>Stay Engaged. Stay Ahead</h3>
                <p className='text-sm md:text-2xl font-medium'>
                    Be part of impactful events that connect you with industry experts and fellow professionals. From insightful webinars to in-person experiences, explore what's upcoming and revisit the highlights from our knowledge-rich archives.
                </p>
            </div>

            <div className="body">
              {isPending?
                <EngagedLoader count={1}/>
                : 
                  Array.isArray(data?.data) && data.data.length > 0 ? (
                    data.data.map((e, index)=>(
                      <div key={index}>
                          <EngagedBox 
                            image={e.featured_image.url} 
                            id={e.event_id} 
                            head={`${e?.event_category[0]?.name} | ${e?.event_time}`} 
                            title={e.title} 
                            body={e.brief_content}
                            style={'border-b'}
                          />
                      </div>
                    ))
                  )
                :
                <h3 className='text-base md:text-xl font-bold leading-tight'>No Active Events</h3>
              }
            </div>
            <Link to="/Special Program/56'">
              <p className='text-right my-2 md:my-3 text-sm md:text-xl font-bold w-fit ml-auto cursor-pointer flex gap-x-1 items-center h-fit'>GO TO ARCHIVES <FaChevronRight className='h-3 md:h-4'/></p>
            </Link>
        </div>
    </div>
  )
}

const getActive = async () =>{
  const activeLink = `/custom/v1/active-events/`
    const result = await fetchApi(activeLink)
    return result;
}

export default Engaged