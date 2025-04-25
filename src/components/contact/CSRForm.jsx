import React, { useState } from 'react'
import { sendApi } from '../../apis';
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


const CSRForm = () => {
    const [sending, setSending] = useState(false);

    // Form state with initial values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        mobile: '',
        message: '',
    });

    // Error state for validation
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    // Handle form input changes
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

    const validateMobile = (mobile) => {
        const mobileRegex = /^[0-9]{10,15}$/;
        if (!mobile) return 'Mobile number is required';
        if (!mobileRegex.test(mobile)) return 'Please enter a valid mobile number (10-15 digits)';
        return '';
    };

    // Validate the form before submission
    const validateForm = () => {
        const newErrors = {
            name: validateName(formData.name),
            email: validateEmail(formData.email),
            mobile: validateMobile(formData.mobile),
            message: ''
        };
        
        setErrors(newErrors);
        
        // Check if there are any errors
        return !Object.values(newErrors).some(error => error !== '');
    };

    const iEnquire = async (e) => {
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
                'template_pastj38',     
                formData,
                'KKddIFUjR-JosfdPh'     
            );
            toast.success('Email sent');
            setFormData({name: '', mobile: '', email: '', organization: '', message: ''});    
            setSending(false);
        } catch (error) {
            setFormData({name: '', mobile: '', email: '', organization: '', message: ''});    
            toast.error('Email failed:', error);
            setSending(false);
        }
    };

    return (
        <div className='w-full'>
            <div className="w-[90%] md:w-3/6 mx-auto md:pt-5 relative" id='csr'>
                <h4 className='font-bold text-2xl md:text-2xl tracking-wide relative'>CSR Activity Collaboration Request Form</h4>
                <Toaster position="top-right" />



                <form action="#" onSubmit={iEnquire} className="py-5 w-full space-y-5">
                    <div className='w-full md:flex gap-x-5 space-y-5 md:space-y-0'>
                        <div className="name-input w-full md:w-3/6">
                            <label htmlFor="name" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Name of Requestor*</label>
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

                        <div className="tel-input w-full md:w-3/6">
                            <label htmlFor="mobile" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Mobile No of Requestor*</label>
                            <input 
                                required 
                                type="tel" 
                                name="mobile" 
                                id="tel" 
                                pattern="[0-9]*" 
                                minLength="10" 
                                maxLength="15"
                                className={`w-full block bg-[#FBF9F8] border ${errors.mobile ? 'border-red-500' : 'border-[#E4E2DE]'} rounded-xs outline-none px-3 h-12`}
                                value={formData.mobile} 
                                onChange={(e) => {
                                    // Allow only numbers
                                    const re = /^[0-9\b]+$/;
                                    if (e.target.value === '' || re.test(e.target.value)) {
                                        handleChange(e);
                                    }
                                }}
                                onBlur={() => {
                                    const mobileError = validateMobile(formData.mobile);
                                    setErrors(prev => ({...prev, mobile: mobileError}));
                                }}
                            />
                            {errors.mobile && (
                                <span className="text-red-500 text-xs mt-1">{errors.mobile}</span>
                            )}
                        </div>
                    </div>

                    <div className="email-input">
                        <label htmlFor="email" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Email ID of Requestor*</label>
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

                    <div className="org-name">
                        <label htmlFor="organization" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Name of organization</label>
                        <input 
                            type="text" 
                            name="organization" 
                            id="org-name" 
                            className='w-full block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-12'
                            value={formData.organization} 
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="subj-input">
                        <label htmlFor="message" className='text-sm md:text-base font-normal text-[#6B5E64] block capitalize mb-1'>Additional Information (1000 characters)</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10" 
                            className='w-full py-1 block bg-[#FBF9F8] border border-[#E4E2DE] rounded-xs outline-none px-3 h-24'
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
                            className='accent-purple border-[#E4E2DE] focus:outline-none'
                        />
                        <label htmlFor="storage" className='text-sm font-normal text-[#6B5E64]'>
                            By using this form, you agree with the storage and handling of your data by this website in accordance with our <span className='underline underline-offset-1 text-purple-light'>Privacy Policy</span>
                        </label>
                    </div>

                    <button 
                        type="submit" 
                        className='text-sm md:text-base font-semibold text-white px-7 py-3 bg-purple rounded-full mt-1 my-3 transition-all ease-linear duration-300'
                    >
                        {sending === null ? 'Please try again' : sending ? 'Sending Enquiry...' : 'Submit Enquiry'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CSRForm;



// const dataEnpoint = '/customforms/v1/csr-activity-collaboration';

        // try {
        //     const result = await sendApi(formData, dataEnpoint)
        //     if (result.success){        
        //         setSending(false)   
        //         console.log(formData)
        //         setFormData({name: '',email: '',organization:'',mobile: '',message: '',})

        //     } else {    
        //         console.log(result)
        //         setSending(null)
        //     }
        // } 
        // catch (error) {
        //     console.log(error)
        // }