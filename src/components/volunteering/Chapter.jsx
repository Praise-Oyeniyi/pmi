import React from 'react'
import ChapterTable from './ChapterTable'

const Chapter = () => {
    const info = {
        Volunteers:[
            {
                portfolio: 'ACADEMIC RELATIONS',
                Name:['Mr. Bhaskar Jaganathan', 'Mr. Srikanta Konanur']
            },
            {
                portfolio: 'MARCOM',
                Name:['Mr. Agasthiyappan A', 'Mr. Ashok Choudhury', 'Mr. Shwas Tikoo']
            },
            {
                portfolio: 'MARCOM - Essence',
                Name:['Ms. Indupriya Sasidharan', 'Mr. Shashank Burli', 'Mr. Raja S']
            },
            {
                portfolio: 'Membership',
                Name:['Mr. Raja S']
            },
            {
                portfolio: 'Outreach',
                Name:['Mr. Anurag Agarwal']
            },
            {
                portfolio: 'Projects & initiatives',
                Name:['Mr. Krishnaprasad TR', 'Mr. Mohan Bangar', 'Mr. Prakhar Kumar']
            },
        ],
        AVP:[
            {
                portfolio: 'E & C forum',
                Name:['Mr. Sharat Rajan']
            },
            {
                portfolio: 'marcom',
                Name:['Mr. Prateek Sharma']
            },
            {
                portfolio: 'marcom - esscence ',
                Name:['Mr. Chankit Jain']
            },
            {
                portfolio: 'outreach',
                Name:['Mr. Amruth Kulkarni', 'Mr. Rakesh', 'Mr. Sundar Raghavan']
            },
            {
                portfolio: 'special program',
                Name:['Mr. Jagadish Koodiyedath', 'Mrs. Sujata K']
            },
            {
                portfolio: 'Technology',
                Name:['Mr. Kaushik M, PMP', 'Mr. Krishna R Rao']
            },
            {
                portfolio: 'Volunteering',
                Name:['Ms. Lakshmi Ramachandran']
            },
        ]
    }

  return (
    <div className='w-full'>
        <div className="mx-auto w-[90%] md:w-5/6 space-y-10" id='chapter'>
            <div className='bg-hero-bg rounded-3xl overflow-hidden border border-[#BFBFBF]'>
                <h4 className='w-full py-2 md:py-4 text-center text-base font-semibold md:text-lg'>Volunteers</h4>
                <ChapterTable item={info.Volunteers}/>
            </div>

            <div className='bg-hero-bg rounded-3xl overflow-hidden border border-[#BFBFBF]'>
                <h4 className='w-full py-2 md:py-4 text-center text-base font-semibold md:text-lg'>AVP</h4>
                <ChapterTable item={info.AVP}/>
            </div>
        </div>
    </div>
  )
}

export default Chapter