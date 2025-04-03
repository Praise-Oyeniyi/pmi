import React from 'react'

const GSForm = () => {
    const general = (e) =>{
        e.preventDefault();
    }

  return (
    <div className='w-full'>
        <div className="mx-auto w-5/6 flex justify-between gap-x-20 pt-5">
            <div className="form-left w-3/6 ">
                <h4 className='font-bold text-3xl'>Send Us Message</h4>

                <form action="#" onSubmit={(e)=>general(e)} className="py-5 w-full space-y-5">
                    <div className='w-full flex gap-x-5'>
                        <div className="name-input w-3/6">
                            <label htmlFor="name" className=' text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Name*</label>
                            <input required type="text" name="name" id="name" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                        </div>

                        <div className="email-input w-3/6">
                            <label htmlFor="email" className=' text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Email*</label>
                            <input required type="email" name="email" id="email" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                        </div>
                    </div>

                    <div className="subj-input">
                        <label htmlFor="subject" className=' text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Subject*</label>
                        <input required type="text" name="subject" id="subject" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'/>
                    </div>

                    <div className="subj-input">
                        <label htmlFor="message" className=' text-xl font-normal text-[#6B5E64] block capitalize mb-1'>Message</label>
                        <textarea name="message" id="" cols="30" rows="10" className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-24'>
                        </textarea>
                    </div>

                    <div className='flex gap-x-3 items-center'>
                        <input type="checkbox" name="storage" id="storage" className='accent-purple border-[#E4E2DE]'/>
                        <label htmlFor="storage" className='text-sm font-normaltext-[#6B5E64]'>By using this form, you agree with the storage and handling of your data by this website in accordance with our <span className='underline underline-offset-1 text-purple-light'>Privacy Policy</span> </label>
                    </div>

                    <button className='text-lg font-semibold text-white px-7 py-3 bg-purple rounded-full mt-1 my-3'>Submit</button>

                </form>
            </div>


            <div className="form-right w-3/6">
                <h4 className='font-bold text-3xl'>Get In Touch</h4>

                <div className="contact-info py-7 text-xl font-semibold text-[#6B5E64] space-y-3">
                    <div className='flex items-center gap-x-1'>
                        <h4 className='w-1/6'>
                            Address:
                        </h4>
                        <p className='font-normal text-lg'>Wework, The Pavilion, Church Street, Bangalore-560001</p>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <h4 className='w-1/6'>
                            Email: 
                        </h4>
                        <p className='font-normal text-lg'>support@pmibangalore.org</p>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <h4 className='w-1/6'>
                            Tel: 
                        </h4>
                        <p className='font-normal text-lg'>+91-81053 54822/+91-98868 14078</p>
                    </div>
                </div>

                <div className='bg-purple mt-5'>
                    <div className='py-5 w-5/6 mx-auto text-xl font-normal'>
                        <p className='text-center text-white'>
                            Our offices are presently closed. Not to worry! You can always reach out to us over email or 
                            phone numbers shown above.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GSForm