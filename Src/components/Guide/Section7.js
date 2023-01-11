import React from 'react'

export default function Section7() {
  return (
    <div className='lg:flex justify-center md:flex   mt-12'>
        <div className='bg-[#FAFAFC] md:w-[800px] lg:w-[1050px] lg:h-[500px] md:ml-12'>
            <h1 className='lg:text-center text-3xl font-bold pt-12 ml-40 '>Customer Reviews</h1>
            <div className='lg:flex ml-20'>
                <div className='w-[350px] h-[300px] bg-white mt-12  md:ml-28 rounded-xl '>
                    <img src='./images/star.png' alt=''/>
                    <h1 className='font-bold mt-2'>Highly Recommended!</h1>
                    <p className='mt-2'>Turing Seo is a must-have SEO tool in any WordPress Site with excellent functions to go beyond basic on-page optimization, whether it be for web page or blog. </p>
                    <div className='flex'>
                        <img src='./images/Ellipse 10.png' alt=''/>
                        <h1 className='mt-4 ml-2'> <span className='font-bold'>Chris AshleyCEO,</span> Forbes Agency Council Member, US </h1>
                    </div>
                </div>


                <div className='w-[350px] h-[300px] bg-white mt-12  md:ml-28 rounded-xl '>
                    <img src='./images/star.png' alt=''/>
                    <h1 className='font-bold mt-2'>Highly Recommended!</h1>
                    <p className='mt-2'>Turing Seo is a must-have SEO tool in any WordPress Site with excellent functions to go beyond basic on-page optimization, whether it be for web page or blog. </p>
                    <div className='flex'>
                        <img src='./images/pict 2.png' alt=''/>
                        <h1 className='mt-4 ml-2'> <span className='font-bold'>Chris AshleyCEO,</span> Forbes Agency Council Member, US </h1>
                    </div>
                </div>

            </div>


               <div className='lg:flex justify-center md:flex Justify-center mt-12'>
                <img src='./images/pagi.png' alt=''/>
               </div>
       </div>
    </div>
  )
}
