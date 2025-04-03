import React from 'react'

const CSRForm = () => {
  return (
    <div className='w-full'>
        <div className="w-3/6 mx-auto pt-5">
            <h4 className='font-bold text-3xl'>CSR Activity Collaboration Request Form</h4>

            <form action="#" onSubmit={(e)=>iEnquire(e)} className="py-5 w-full space-y-5">
                <div className='w-full flex gap-x-5'>
                    <div className="name-input w-3/6">
                        <label htmlFor="name" className=' text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Name  of Requestor*</label>
                        <input required type="text" name="name" id="name" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                    </div>

                    <div className="tel-input w-3/6">
                        <label htmlFor="tel" className=' text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Mobile No of Requestor*</label>
                        <input required type="tel" name="tel" id="tel" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                    </div>
                </div>

                <div className="email-input">
                    <label htmlFor="email" className=' text-xl font-normal text-[#6B5E64] block capitalize mb-1'>email ID of Requested*</label>
                    <input required type="email" name="email" id="email" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                </div>

                <div className="org-name">
                    <label htmlFor="org-name" className=' text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Name of organization</label>
                    <input type="text" name="org-name" id="org-name" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                </div>
                
                <div className="subj-input">
                    <label htmlFor="message" className=' text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Additional Information (1000 characters)</label>
                    <textarea name="message" id="" cols="30" rows="10" className='w-full py-1 block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-24'>
                    </textarea>
                </div>

                <div className='flex gap-x-3 items-center'>
                    <input type="checkbox" name="storage" id="storage" className='accent-purple border-[#E4E2DE] focus:outline-none'/>
                    <label htmlFor="storage" className='text-sm font-normaltext-[#6B5E64]'>By using this form, you agree with the storage and handling of your data by this website in accordance with our <span className='underline underline-offset-1 text-purple-light'>Privacy Policy</span> </label>
                </div>

                <button className='text-lg font-semibold text-white px-7 py-3 bg-purple rounded-full mt-1 my-3'>Submit Enquiry</button>

            </form>
        </div>
    </div>
  )
}

export default CSRForm