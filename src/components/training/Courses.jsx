import React from 'react'
import C1 from '../../assets/images/Course1.png'
import C2 from '../../assets/images/course2.png'
import C3 from '../../assets/images/course3.png'
import C4 from '../../assets/images/course4.png'

const Courses = () => {
    const courseInfo = [
        {
            title:'Course Content for PMP training',
            offers:['The 35-hour contact course is mandatory for candidates wanting to appear for the PMP certification Exam and is designed towards exam preparation.','The 35-hour contact course is mandatory for candidates wanting to appear for the PMP certification Exam and is designed towards exam preparation.', 'The 35-hour contact course is mandatory for candidates wanting to appear for the PMP certification Exam and is designed towards exam preparation.', 'The 35-hour contact course is mandatory for candidates wanting to appear for the PMP certification Exam and is designed towards exam preparation.' ],
            para:'',
            image:C1,
        },
        {
            title:'Course Content for PMP training ',
            offers:['The understanding agile planning & estimating, executing and reporting of a small / medium projects in agile method','The understanding of different Agile methodologies commonly used (few will be covered in depth)', 'A simulated game experience on using agile in a project (enabling a hands-on experience in a classroom environment)', 'Effectively participate in Business/ Delivery discussion on selecting agile method over other methods.' ],
            para:'This program has been conceptualized as a short program to get into foundations of Agile Methodologies and apply them on small and medium projects. <br/><br/> The program design aims to provide participants:',
            image:C2,
        },
        {
            title:'Course Content for Two Day Agile Advanced',
            offers:['Agile Principles & practices, including various flavours of Agile','Competitive advantage of Agile', 'Validate your understanding of Scrum in detail and the concept of ARC', 'Working with Agile to deliver value', 'How to effectively plan & estimate, deliver, manage risk, and communicate the Agile way.', 'XP, Lean and Hybrid Agile methodologies', 'Softer aspects of Agile, such as coaching & people management', 'Softer aspects of Agile, such as coaching & people management', 'Building your product by games & exercises using Agile principles as the basis', "Requirements specification: when can we ensure a 'common' understanding of 'what we deliver'?", 'Change management: why a strategic approach is a must here?', 'Solution: which is the best?'  ],
            para:'The two day program will provide the participants to learn:',
            image:C3,
        },
        {
            title:'Course Content for One Day Workshop on BA',
            offers:['Need assessment of the business and its scope: is the development team oblivious of the business aspects','Planning and stakeholder analysis: how thick is the line separating the business and the project?', 'Planning and stakeholder analysis: how thick is the line separating the business and the project?' ],
            para:'The topics covered will be:',
            image:C4,
        },
    ]

  return (
    <div className='w-full'>
        <div className='w-[90%] md:w-5/6 mx-auto' id='courses'>
            <h3 className='font-bold text-2xl md:text-5xl leading-snug text-center capitalize'>courses</h3>
        
            <div className="course-body">
                <div>
                    {courseInfo.map((e, index)=>(
                        <div className={`border-b border-b-[#DBD8D1] pt-3 md:py-6 md:flex justify-between gap-x-20 items-start ${index === courseInfo.length-1 && 'border-none'}`} key={index}>

                            <div className='w-auto text-lg font-normal md:flex justify-between gap-x-10 text-[#200F3B]'>
                                <h4 className='text-lg md:text-3xl font-bold text-dark w-full md:w-2/6'>{e.title}</h4>
                                <div className='space-y-2 w-full text-sm md:text-xl   md:w-4/6'>
                                    <p  dangerouslySetInnerHTML={{ __html: e.para }} />
                                    <ul className='list-disc pl-7'>
                                        {e.offers.map((offer, index)=>(
                                            <li key={index}>{offer}</li>
                                        ))}
                                    </ul>
                                    {index === courseInfo.length-1 && (
                                        <p>The Workshop will engage participants in groups to fish out answers to the above using case study based hands-on sessions and best practice sharing.</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className='md:min-w-[20rem] w-full md:w-[20rem] h-[11rem] rounded-2xl overflow-hidden my-3'>
                                <img src={e.image} alt="" className='w-full h-full object-cover object-top'/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses