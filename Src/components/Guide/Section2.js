import React from 'react'

export default function Section2() {
  return (
    <div className='lg:mt- sm:mx-28 lg:mx-48'>
        <div className='mt-12 lg:flex justify-between'>
            <div>
            <h1 className='text-[20px]  lg:text-6xl text-center font-bold'>Bulk Updates Made With SEOs <br></br>in Mind</h1>
            </div>
            <div>
                <button className='bg-[#5680E9] py-4 px-8 rounded-full'>Next</button>
            </div>

            
        </div>
        <div className=' flex space-x-16   mt-20'>
            <div>
            <img className='sm:w-[300px] sm:h-[300px] lg:w-[750px] lg:h-[400px] ' src='./images/screen.png' alt=''/>
            <p className='mt-12'> <span className='font-bold'>At Turing SEO,</span> we understand that optimizing a website can be a daunting and <br></br>time-consuming task - because as SEOs ourselves, we’ve been there just like you.<br></br> That’s why we’re introducing our new plugin designed to make the process as easy<br></br> and efficient as possible. Turing SEO is the perfect solution for busy SEO...</p>
            <img className='mt-12' src='./images/mirror.png' alt/>
            </div>

           <div className=''>
            <img src='./images/side3.png' alt=''/>
            <h1 className='font-bold mt-2'>16 Best Free WordPress<br></br> Plugins You Need in 2022</h1>
            <img className='mt-4' src='./images/side1.png' alt=''/>
            <h2 className='font-bold mt-2'>How to Disable RSS Feeds in<br></br> WordPress</h2>
            <img className='mt-4' src='./images/side2.png' alt=''/>
            <h3 className='font-bold mt-2'>How to Delete URL<br></br> Parameters from Google <br></br>Search Console</h3>
           </div>
         </div>
    </div>
  )
}
