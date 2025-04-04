import React from 'react'
import Box1 from '../../assets/icons/box1.svg'
import Box2 from '../../assets/icons/box2.svg'
import Box3 from '../../assets/icons/box3.svg'
import CertBox from './CertBox'



const CertSupport = () => {
    const supportBox = [
        {
            imageIcon:Box1,
            title:'PMP®',
            mainTitle:'Project Management Professional®', 
            subTitle:'3-5 years of experience', 
            boxInfo:'The PMP® validates skills and knowledge in managing & directing people, processes, and priorities for a project team from start to finish.',
            gradient:'from-[#14062A] to-[#2B0C58]',
            titleColor:'text-[#B365FD]'

        },
        {
            imageIcon:Box2,
            title:'CAPM®',
            mainTitle:'Certified Associate in project Management®', 
            subTitle:'No experience required', 
            boxInfo:"This certification demonstrates an understanding of the foundational skills that project teams demand.",
            gradient:'from-[#041120] to-[#02384D]',
            titleColor:'text-[#05BFE0]'

        },
        {
            imageIcon:Box3,
            title:'PMI-ACP®',
            mainTitle:'PMI Agile Certified Practitioner (PMI-ACP)®', 
            subTitle:'2+ years of experience', 
            boxInfo:'This Certification validates your ability to engage stakeholders, apply agile approaches, and lead teams.',
            gradient:'from-[#FEFEFE] to-[#D3BEAE]',
            titleColor:'text-[#200F3B]'

        }

    ]

  return (
    <div className='top-cert-outer w-full pb-20'>
        <div className="cert-inner w-[90%] md:w-5/6 mx-auto pb-10">
            <div className="top md:flex w-full justify-between items-center">
                <div className='space-y-3 md:space-y-5'>
                    <h3 className='text-xl md:text-5xl font-bold w-5/6 md:w-4/6 leading-snug tracking-wider md:tracking-normal'>Top Certifications We Support</h3>
                    <button className='bg-white hidden rounded-full md:flex justify-center items-center border border-cgray px-7 h-[3rem]'>View all certifications</button>
                </div>

                <p className='text-sm md:text-2xl font-semibold md:w-2/6 md:text-right'>Boost your professional credibility
                    with globally recognized certifications.
                    Whether you're starting your journey
                    or upskilling for leadership, PMI
                    Bangalore offers the top programs to
                    help you stand out and succeed.
                </p>

                <button className='bg-white md:hidden text-sm rounded-full flex justify-center items-center border border-cgray px-5 h-[2.6rem] mt-4'>View all certifications</button>

            </div>
        </div>


        <div className="certBox flex w-[90%] md:w-5/6 mx-auto gap-x-4 min-h-fit justify-between items-stretch overflow-x-auto">
            {supportBox.map((e,index)=>(
                <div key={index} className="md:max-w-2/6 md:w-2/6 w-[90%] max-w-full h-auto">
                    <CertBox title={e.title} mainTitle={e.mainTitle} subTitle={e.subTitle} image={e.imageIcon} gradient={e.gradient} boxInfo={e.boxInfo} titleColor={e.titleColor}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CertSupport