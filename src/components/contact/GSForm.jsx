import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const GSForm = () => {
    const [sending, setSending] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Error state for validation
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        
        // Clear error when user begins typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validation functions
    const validateName = (name) => {
        if (!name) return 'Name is required';
        if (name.length < 2) return 'Name must be at least 2 characters';
        return '';
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return 'Email is required';
        if (!emailRegex.test(email)) return 'Please enter a valid email address';
        return '';
    };

    const validateSubject = (subject) => {
        if (!subject) return 'Subject is required';
        if (subject.length < 3) return 'Subject must be at least 3 characters';
        return '';
    };

    // Validate the form before submission
    const validateForm = () => {
        const newErrors = {
            name: validateName(formData.name),
            email: validateEmail(formData.email),
            subject: validateSubject(formData.subject),
            message: ''
        };
        
        setErrors(newErrors);
        
        // Check if there are any errors
        return !Object.values(newErrors).some(error => error !== '');
    };

    const general = async (e) => {
        e.preventDefault();
        
        // First validate the form
        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }
        
        setSending(true);

        try {
            const response = await emailjs.send(
                'service_iqmmizr',       
                'template_tyn7zjs',     
                formData,
                'KKddIFUjR-JosfdPh'     
            );
            toast.success('Email sent');
            setFormData({name: '', email: '', subject: '', message: ''});
            setSending(false);
        } catch (error) {
            toast.error('Email failed:', error);
            setSending(false);
        }
    };

    return (
        <div className='w-full'>
            <div className="mx-auto w-[90%] md:w-5/6 md:flex justify-between gap-x-20 md:pt-5">
                <Toaster position="top-right" />
                <div className="form-left w-full md:w-3/6 ">
                    <h4 className='font-bold text-2xl tracking-wide'>Send Us Message</h4>

                    <form action="#" onSubmit={general} className="py-5 w-full space-y-5">
                        <div className='w-full md:flex gap-x-5 space-y-5 md:space-y-0'>
                            <div className="name-input w-full md:w-3/6">
                                <label htmlFor="name" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Name*</label>
                                <input 
                                    required 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className={`w-full block bg-[#FBF9F8] border ${errors.name ? 'border-red-500' : 'border-[#E4E2DE]'} rounded-xs outline-none px-3 h-12`}
                                    value={formData.name} 
                                    onChange={handleChange}
                                    onBlur={() => {
                                        const nameError = validateName(formData.name);
                                        setErrors(prev => ({...prev, name: nameError}));
                                    }}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-xs mt-1">{errors.name}</span>
                                )}
                            </div>

                            <div className="email-input w-full md:w-3/6">
                                <label htmlFor="email" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Email*</label>
                                <input 
                                    required 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className={`w-full block bg-[#FBF9F8] border ${errors.email ? 'border-red-500' : 'border-[#E4E2DE]'} rounded-xs outline-none px-3 h-12`}
                                    value={formData.email} 
                                    onChange={handleChange}
                                    onBlur={() => {
                                        const emailError = validateEmail(formData.email);
                                        setErrors(prev => ({...prev, email: emailError}));
                                    }}
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                                )}
                            </div>
                        </div>

                        <div className="subj-input">
                            <label htmlFor="subject" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Subject*</label>
                            <input 
                                required 
                                type="text" 
                                name="subject" 
                                id="subject" 
                                className={`w-full block bg-[#FBF9F8] border ${errors.subject ? 'border-red-500' : 'border-[#E4E2DE]'} rounded-xs outline-none px-3 h-12`}
                                value={formData.subject} 
                                onChange={handleChange}
                                onBlur={() => {
                                    const subjectError = validateSubject(formData.subject);
                                    setErrors(prev => ({...prev, subject: subjectError}));
                                }}
                            />
                            {errors.subject && (
                                <span className="text-red-500 text-xs mt-1">{errors.subject}</span>
                            )}
                        </div>

                        <div className="subj-input">
                            <label htmlFor="message" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                cols="30" 
                                rows="10" 
                                className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-24'
                                value={formData.message} 
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className='flex gap-x-3 items-center'>
                            <input 
                                required 
                                type="checkbox" 
                                name="storage" 
                                id="storage" 
                                className='accent-purple border-[#E4E2DE]'
                            />
                            <label htmlFor="storage" className='text-sm font-normal text-[#6B5E64]'>
                                By using this form, you agree with the storage and handling of your data by this website in accordance with our <span className='underline underline-offset-1 text-purple-light'>Privacy Policy</span>
                            </label>
                        </div>

                        <button 
                            type='submit' 
                            className='text-sm md:text-base font-semibold text-white px-7 py-3 bg-purple rounded-full mt-1 my-3'
                        >
                            {sending === null ? 'Please try again' : sending ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>

                <div className="form-right w-full md:w-3/6">
                    <h4 className='font-bold text-2xl tracking-wide'>Get In Touch</h4>

                    <div className="contact-info py-3 md:py-7 text-sm md:text-base font-semibold text-[#6B5E64] space-y-3">
                        <div className='flex items-start md:items-center gap-x-2 md:gap-x-1'>
                            <h4 className='w-1/6'>
                                Address:
                            </h4>
                            <p className='font-normal text-sm md:text-base'>Wework, The Pavilion, Church Street, Bangalore-560001</p>
                        </div>
                        <div className='flex items-start md:items-center gap-x-2 md:gap-x-1'>
                            <h4 className='w-1/6'>
                                Email: 
                            </h4>
                            <p className='font-normal text-sm md:text-base'>support@pmibangalore.org</p>
                        </div>
                        <div className='flex items-start md:items-center gap-x-2 md:gap-x-1'>
                            <h4 className='w-1/6'>
                                Tel: 
                            </h4>
                            <p className='font-normal text-sm md:text-base'>+91-81053 54822/+91-98868 14078</p>
                        </div>
                    </div>

                    <div className='bg-purple mt-5'>
                        <div className='md:py-5 py-7 w-5/6 mx-auto text-sm md:text-base font-normal'>
                            <p className='text-center text-white'>
                                Our offices are presently closed. Not to worry! You can always reach out to us over email or 
                                phone numbers shown above.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GSForm;







 // const dataEnpoint = '/customforms/v1/general-support';

        // try {
        //     const result = await sendApi(formData, dataEnpoint)
        //     if (result.success){        
        //         setSending(false)   
        //         console.log(formData)
        //         setFormData({name: '',email: '',subject:'',phone: '',message: '',})

        //     } else {    
        //         console.log(result)
        //         setSending(null)
        //     }
        // } 
        // catch (error) {
        //     console.log(error)
        // }