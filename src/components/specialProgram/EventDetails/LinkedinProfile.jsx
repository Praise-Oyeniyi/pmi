import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router';

const LinkedinProfile = ({name,link, role, image, date, regLink}) => {

    function isDateInPast(date) {
        const parts = date.split(' ');
        const day = parseInt(parts[0], 10);
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(parts[1]);
        const year = 2000 + parseInt(parts[2], 10); 
        const inputDate = new Date(year, month, day);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        return inputDate < today;
      }

  return (
    <div className='w-full'>
        <div className="mx-auto w-[90%] md:w-5/6 bg-white space-y-3 md:space-y-0 rounded-3xl border border-[#E8E8E8] p-3 md:p-4 md:flex justify-between items-center">
            
            <div className='flex items-center gap-x-3 md:gap-x-5'>
                <div className="avatar min-h-12 min-w-12 max-w-12 max-h-12 md:max-w-[6.25rem] md:max-h-[6.25rem] md:min-w-[6.25rem] md:min-h-[6.25rem] rounded-full overflow-hidden">
                    <img src={image} alt="" className='w-full h-full object-cover object-top'/>
                </div>
                <div className="bio">
                    <h4 className='text-lg md:text-2xl font-bold flex items-center gap-x-3'>{name} 
                        <Link to={link} target={'_blank'}>
                            <FaLinkedin className='text-[#0077B5] mt-1' size={20}/>
                        </Link>
                    </h4>
                    <h6 className='capitalize text-sm md:text-lg font-semibold'>{role}</h6>
               </div>
            </div>

            {!isDateInPast(date) && 
                (<Link to={`${regLink}`}>
                    <button className='flex w-fit mx-auto transition-all ease-in duration-300 hover:opacity-75 cursor-pointer justify-center items-center md:mr-3 rounded-full bg-secondary text-white px-10 py-2 text-sm md:text-lg font-bold'>
                        Register
                    </button>
                </Link>
                )
            }
        </div>

    </div>
  )
}

export default LinkedinProfile