import { useQuery } from '@tanstack/react-query';
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router';
import { fetchApi } from '../../apis';
import BODSkeleton from '../global/Skeleton/BOD';


const BOD = () => {
    const {data, isPending} = useQuery({
        queryKey:['bod'],
        queryFn: getBod
    })

    if(data)
    var bodData = data.data;

    


  return (
    <div className='w-full'>
        <div className="mx-auto w-[90%] md:w-5/6 text-dark border-b border-b-[#DBD8D1] mb-10 pb-12" id='bod'>
            <h3 className='font-bold text-2xl md:text-5xl md:leading-snug text-center capitalize'>Board of Directors</h3>
            <p className='text-sm md:text-xl font-normal py-3 md:pb-7 text-center text-[#200F3B]'>
                PMI is governed by a Board comprised of member-elected directors who serve three-year 
                terms. The Board Chair serves as an Elected Officer of the Board per the PMI Bylaws. The collective wisdom, 
                experience, diversity and passion of the Board ultimately sets and executes our core ideology, purpose and 
                values—the enduring principles that guide us—our essential reasons for being. The Board and its committees 
                drive our vitality and relevance.
            </p>

            <div className='w-full'>
                {isPending?
                    <BODSkeleton count={3} /> 
                    :
                    <div>
                        {bodData.map((e, index) =>(
                            <div className={`border-b py-5 border-b-[#DBD8D1] w-full flex flex-col gap-y-4 md:gap-y-0 md:flex-row  gap-x-10 justify-between items-center ${index === bodData?.length-1 && 'border-none'}`} key={e?.id}>
                            
                                <div className='flex flex-col md:flex-row  justify-between items-start w-full md:w-4/6 order-2 md:order-1'>
                                    <h4 className='text-lg md:text-3xl font-bold md:w-3/6 pr-10 tracking-tighter md:tracking-normal'>{e?.name}</h4>
                                    <div className="bodData-info text-sm md:text-lg pt-2 md:pt-0 font-normal space-y-2 md:w-3/6">
                                        <h5 className=''>{e?.designation}</h5>
                                        <h6 className='truncate'>{e?.email}</h6>
                                        {/* <h6>{e?.date}</h6> */}
                                        <Link to={e?.linkedin} target='_blank'>
                                            <button className='flex gap-x-1 cursor-pointer md:gap-x-2 items-center font-bold text-sm md:text-xl transition-all ease-in duration-300 hover:underline  underline-offset-3'>View Bio <FaChevronRight className='h-2.5 md:h-3.5'/></button>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className='h-[11rem] md:w-[20rem] w-full rounded-2xl overflow-hidden relative md:h-48 order-1 md:order-2'>
                                    <img src={e?.profile_picture?.url} alt={e?.profile_picture?.alt} className='h-full w-full object-cover object-top absolute'/>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                <div className="other-bod md:flex justify-between items-center pt-3 md:pt-10 space-y-2 md:space-y-0">
                    <h4 className='text-base md:text-3xl font-normal'>Past Board Members</h4>
                    <div className='text-sm  md:text-xl space-y-2 capitalize'>
                        <p className='font-semibold'>Explore the PMI Board of directors from present day to inception.</p>
                        <button className='font-bold flex cursor-pointer gap-x-1 md:gap-x-2 items-center transition-all ease-in duration-300 hover:underline  underline-offset-3'>View past PMI board members <FaChevronRight className='h-2.5 md:h-3.5'/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const getBod = async () =>{
    const directors = '/custom-api/v1/directors'
    const result = await fetchApi(directors)
    return result;
}

export default BOD