import React, { useState } from 'react'
import { sendApi } from '../../apis';

const CEnquiry = () => {
    const [sending, setSending] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        phone:'',
        email: '',
        orgName:'',
        trainingSubject:'',
        date : {dateYear:'',dateMonth: '',dateWeek:''},
        message: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };


    const cEnquire = async (e) =>{
        e.preventDefault();
        setSending(true)
        const dataEnpoint = '/customforms/v1/corporate-bulk-training-enquiry';

       try {
            const result = await sendApi(formData, dataEnpoint)
            if (result.success){        
                setSending(false)
                setFormData({name: '', phone:'', email: '', orgName:'',trainingSubject:'',dateYear:'',dateMonth: '', dateWeek:'',message: '',})    
            } else {
                console.log(result)
                setSending(null)
            }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className='w-full'>
        <div className="w-[90%] md:w-3/6 mx-auto md:pt-5">
            <h4 className='font-bold text-2xl md:text-2xl tracking-wide'>Corporate (Bulk Training) Enquiry </h4>

            <form action="#" onSubmit={cEnquire} className="py-5 w-full space-y-5">
                <div className='w-full md:flex gap-x-5 space-y-5 md:space-y-0'>
                    <div className="name-input w-full md:w-3/6">
                        <label htmlFor="name" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Name  of Requestor*</label>
                        <input required type="text" name="name" id="name" 
                            className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                            value={formData.name} onChange={handleChange}
                        />
                    </div>

                    <div className="tel-input w-full md:w-3/6">
                        <label htmlFor="tel" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Mobile No of Requestor*</label>
                        <input required type="tel" name="tel" id="tel" 
                            className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                            value={formData.phone} onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="email-input">
                    <label htmlFor="email" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>email ID of Requested*</label>
                    <input required type="email" name="email" id="email" 
                        className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                        value={formData.email} onChange={handleChange}
                    />
                </div>

                <div className="org-name">
                    <label htmlFor="orgName" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Name of organization</label>
                    <input type="text" name="orgName" id="org-name" 
                        className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                        value={formData.orgName} onChange={handleChange}
                    />
                </div>

                <div className="training-subj">
                    <label htmlFor="trainingSubj" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Training Subjects</label>
                    <select name="trainingSubject" id="training-subj"  
                        className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12 accent-[#6B5E64]'
                        value={formData.trainingSubject} onChange={handleChange}
                    >
                        <option value={'PMP Training(ATP Accredited)'} disabled>PMP Training(ATP Accredited)</option>
                    </select>
                </div>

                <div className='items-end w-full md:flex gap-x-5 space-y-5 md:space-y-0'>
                    <div className="date-input w-full md:w-2/6 ">
                        <label htmlFor="date" className='text-sm md:text-base font-normal text-[#6B5E64] block mb-1'>Preferred training date</label>
                        <input type="number" min="1900" max="2099" step="1" placeholder='Year'  name="dateYear" id="date-year" 
                            className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                            value={formData.dateYear} onChange={handleChange}
                        />
                    </div>

                    <div className="date-input w-full md:w-2/6">
                        <input required type="number" min="1" max="12" step="1" name="dateMonth" id="date-month" placeholder='Month' 
                            className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                            value={formData.dateMonth} onChange={handleChange}
                        />
                    </div>

                    <div className="date-input w-full md:w-2/6">
                        <input required type="number" min="1" max="4" step="1" placeholder='Week' name="dateWeek" id="date-week" 
                            className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                            value={formData.dateWeek} onChange={handleChange}
                        />
                    </div>
                </div>


                <div className="subj-input">
                    <label htmlFor="message" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Additional Information (1000 characters)</label>
                    <textarea name="message" id="" cols="30" rows="10" 
                        className='w-full py-1 block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-24'
                        value={formData.message} onChange={handleChange}
                    >
                    </textarea>
                </div>

                <div className='flex gap-x-3 items-center'>
                    <input required type="checkbox" name="storage" id="storage" className='accent-purple border-[#E4E2DE] focus:outline-none'/>
                    <label htmlFor="storage" className='text-sm font-normal text-[#6B5E64]'>By using this form, you agree with the storage and handling of your data by this website in accordance with our <span className='underline underline-offset-1 text-purple-light'>Privacy Policy</span> </label>
                </div>

                <button type='submit' className='text-sm md:text-base font-semibold text-white px-7 py-3 bg-purple rounded-full mt-1 my-3'>{sending === null? 'Please try again':sending?'Sending Enquiry...':'Submit Enquiry'} </button>

            </form>
        </div>
    </div>
  )
}

export default CEnquiry