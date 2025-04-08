import React from 'react'



const ChapterTable = ({item}) => {

  return (
    <div className="overflow-x-hidden">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-purple text-center">
            <tr className='text-sm md:text-2xl font-semibold'>
                <th 
                scope="col" 
                className="w-2/4 py-3 border-r border-r-[#fff] text-sm md:text-2xl font-semibold text-white"
                >
                Portfolio
                </th>
                <th 
                scope="col" 
                className="w-2/4 py-3 text-sm md:text-2xl font-semibold text-white"
                >
                Name
                </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
                {item?.map((e, index)=>(
                <tr className='text-sm md:text-2xl font-semibold' key={index}>
                    <td className=" py-3 uppercase border-r border-r-[#BFBFBF] whitespace-nowrap">
                        {e?.portfolio}
                    </td>
                    <td className=" whitespace-nowrap text-left p">
                       {e.Name.map((name, pos)=>(
                        <p key={pos} className={`border-b-[#BFBFBF] py-3  pl-3 md:pl-5 ${pos === e.Name.length-1? 'border-0':'border-b'}`}>{name}</p>
                       ))}
                    </td>
                </tr>

                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default ChapterTable