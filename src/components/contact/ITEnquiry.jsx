import React from 'react'

const ITEnquiry = () => {
    const iEnquire = (e) =>{
        e.preventDefault();
    }

  return (
    <div className='w-full'>
        <div className="w-[90%] md:w-3/6 mx-auto md:pt-5">
            <h4 className='font-bold text-2xl md:text-3xl'>Individual Training Enquiry</h4>

            <form action="#" onSubmit={(e)=>iEnquire(e)} className="py-5 w-full space-y-5">
                <div className='w-full md:flex gap-x-5 space-y-5 md:space-y-0'>
                    <div className="name-input w-full md:w-3/6">
                        <label htmlFor="name" className='text-sm md:text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Name  of Requestor*</label>
                        <input required type="text" name="name" id="name" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                    </div>

                    <div className="tel-input w-full md:w-3/6">
                        <label htmlFor="tel" className='text-sm md:text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Mobile No of Requestor*</label>
                        <input required type="tel" name="tel" id="tel" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                    </div>
                </div>

                <div className="email-input">
                    <label htmlFor="email" className='text-sm md:text-xl font-normal text-[#6B5E64] block capitalize mb-1'>email ID of Requested*</label>
                    <input required type="email" name="email" id="email" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                </div>

                <div className="org-name">
                    <label htmlFor="org-name" className='text-sm md:text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Name of organization</label>
                    <input type="text" name="org-name" id="org-name" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                </div>

                <div className="training-subj">
                    <label htmlFor="training-subj" className='text-sm md:text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Training Subjects</label>
                    <select name="training-subj" id="training-subj"  className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12 accent-[#6B5E64]'>
                        <option value={'PMP Training(ATP Accredited)'} disabled>Training Subjects</option>
                    </select>
                </div>

                <div className='w-full md:flex gap-x-5 items-end space-y-5 md:space-y-0'>
                    <div className="date-input w-full md:w-2/6">
                        <label htmlFor="date" className='text-sm md:text-xl font-normal text-[#6B5E64] block mb-1'>Preferred training date</label>
                        <input type="number" min="1900" max="2099" step="1" placeholder='Year'  name="date" id="date-year" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                    </div>

                    <div className="date-input w-full md:w-2/6">
                        <input required type="number" min="1" max="12" step="1" name="date" id="date-month" placeholder='Month' className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                    </div>

                    <div className="date-input w-full md:w-2/6">
                        <input required type="number" min="1" max="4" step="1" placeholder='Week' name="date" id="date-week" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                    </div>
                </div>


                <div className="subj-input">
                    <label htmlFor="message" className='text-sm md:text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Additional Information (1000 characters)</label>
                    <textarea name="message" id="" cols="30" rows="10" className='w-full py-1 block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-24'>
                    </textarea>
                </div>

                <div className='flex gap-x-3 items-center'>
                    <input type="checkbox" name="storage" id="storage" className='accent-purple border-[#E4E2DE] focus:outline-none'/>
                    <label htmlFor="storage" className='text-sm font-normal text-[#6B5E64]'>By using this form, you agree with the storage and handling of your data by this website in accordance with our <span className='underline underline-offset-1 text-purple-light'>Privacy Policy</span> </label>
                </div>

                <button type='submit' className='text-sm md:text-lg font-semibold text-white px-7 py-3 bg-purple rounded-full mt-1 my-3'>Submit Enquiry</button>

            </form>
        </div>
    </div>
  )
}

export default ITEnquiry