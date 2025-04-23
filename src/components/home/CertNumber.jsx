import { fetchApi } from '../../apis';
import {useQuery} from '@tanstack/react-query'
import CertNo from '../global/Skeleton/CertNo';

const CertNumber = () => {
  const {data, isPending} = useQuery({
    queryKey: ['matrices'],
    queryFn: getMatrix,
  }) 


  return (
      <div className='w-full my-20 mb-22'>
        {isPending?
          <CertNo/>
        :
        data === undefined || data?.data?.length === 0?
        ''
        :
        <div className="cert-no-inner text-white w-[90%] md:w-5/6 mx-auto bg-purple rounded-lg md:rounded-[1.25rem]">
            <div className="h-fit md:h-28 cert-inner-top md:flex justify-between w-full">
                <div className='flex items-start md:items-center md:px-7 px-5 border-b md:border-b-0 border-b-[#ffffffa4]  py-3 justify-start gap-x-7 md:w-3/6 md:border-r border-r-[#ffffffa4]'>
                    <h4 className='text-lg md:text-3xl font-semibold taracking-wider'>{data.data[0].number}</h4>
                    <p className='font-normal text-sm md:text-lg'>{data.data[0].content}</p>
                </div>
                
                <div className='flex items-center md:px-7 px-5 border-b md:border-b-0 border-b-[#ffffffa4]  py-3 justify-start gap-x-7 md:w-3/6'>
                    <h4 className='text-lg md:text-3xl font-semibold taracking-wider'>{data.data[1].number}</h4>
                    <p className='font-normal text-sm md:text-lg'>{data.data[1].content}</p>
                </div>
            </div>


            <div className="h-fit md:h-28 cert-inner-bottom md:border-t border-t-[#ffffffa4] md:flex justify-between w-full">
                <div className='flex items-center md:px-7 px-5 border-b md:border-b-0 border-b-[#ffffffa4]  py-3 justify-start gap-x-7 md:w-3/6 border-r border-r-[#ffffffa4]'>
                    <h4 className='text-lg md:text-3xl font-semibold taracking-wider'>{data.data[2].number}</h4>
                    <p className='font-normal text-sm md:text-lg'>{data.data[2].content}</p>
                </div>
                
                <div className='flex items-center md:px-7 px-5 border-b md:border-b-0 border-b-[#ffffffa4]  py-3 justify-start gap-x-7 md:w-3/6'>
                    <h4 className='text-lg md:text-3xl font-semibold taracking-wider'>{data.data[3].number}</h4>
                    <p className='font-normal text-sm md:text-lg'>{data.data[3].content}</p>
                </div>
            </div>
        </div>
      }
    </div>
  )
}

const getMatrix = async () =>{
  const matrices = '/custom/v1/matrices/'
  const result = await fetchApi(matrices)
  return result;
}

export default CertNumber