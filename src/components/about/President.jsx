import React, { useEffect, useState } from 'react'
import { FaChevronRight, FaLinkedinIn } from "react-icons/fa6";
import { fetchApi } from '../../apis';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import BODSkeleton from '../global/Skeleton/BOD';

const President = () => {
    // const [pres, setPres] = useState([]);

    const {data, isPending} = useQuery({
        queryKey:['presi'],
        queryFn: getPres,
    })

    if(data)
    var pres = data.data
    // setPres(data.data)


  return (
    <div className='w-full'>
        <div className="mx-auto w-[90%] md:w-5/6 text-dark mb-14" id='pp'>
            <h3 className='font-bold text-2xl md:text-5xl md:leading-snug text-center capitalize md:py-7'>Past Presidents</h3>

            <div className='w-full'>
                {isPending?
                    <BODSkeleton count={3}/>
                    :
                    <div>
                        {pres.map((e, index) =>(
                            <div className={`border-b py-5 border-b-[#DBD8D1] gap-y-4 md:gap-y-0 w-full flex md:flex-row flex-col items-center gap-x-10 justify-between ${index === pres.length-1 && 'border-none'}`} key={index}>
                                
                                <div className='md:flex justify-between items-start w-full md:w-4/6 order-2 md:order-1'>
                                    <h4 className='text-lg md:text-2xl font-bold w-full md:w-3/6 tracking-tight md:tracking-normal md:pr-10'>{e?.name}</h4>
                                    
                                    <div className="dir-info text-sm md:text-lg font-normal space-y-2 md:w-3/6">
                                        <h5 className=''>{e?.role}</h5>
                                        <h6>{e?.designation} </h6>
                                        <div className='flex items-center gap-x-1 md:gap-x-2'>
                                            <h6 className='border-r border-r-[#DBD8D1] pr-2'>{e?.from_to}</h6>
                                            <Link to={e?.linkedin} target={"_blank"}>
                                                <button className='cursor-pointer bg-[#0077B5] text-white w-4 h-4 md:w-6 md:h-6 flex justify-center items-center rounded-full'>
                                                    <FaLinkedinIn className='h-2 md:h-3.5 hover:opacity-75 transition-all ease-in duration-200'/>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className=' h-[11rem] md:w-[20rem] w-full rounded-2xl overflow-hidden md:h-48 order-1 md:order-2 relative'>
                                    <img src={e?.profile_picture?.url} alt={e?.profile_picture?.alt} className='h-full w-full object-cover object-top absolute'/>
                                </div>
                            </div>
                        ))}
                    </div>
                }

            </div>
        </div>
    </div>
  )
}

const getPres = async () =>{
    const president = '/custom-api/v1/past-directors/'
    const result = await fetchApi(president)
    return result;
}

export default President