import React from 'react'

export default function Section10() {
  return (
    <div className='lg:mx-8'>

        <h1 className='text-6xl font-bold text-center '>Pricing</h1>
        <div className='lg:flex justify-center md:flex Justify-center space-x-4 mt-6 sm:ml-12 '>
            <div className='w-[300px] h-[450px] bg-[#EBEEF6] rounded-xl lg:ml-28 '>
                    
                   <h1 className='text-center pt-6 font-bold'>Basic</h1>
                   <h2 className='text-center text-4xl text-[#5680E9] font-bold mt-4'>Free</h2>
                   <p className='text-center mt-4'>Free plan for all users</p>
                   <ul class="list-disc ml-12 space-y-4 mt-4">
                  <li>Unlimited personal websites </li>
                  <li> Free 25 Content AI Credits </li>
                  <li> Track 1,000 Keywords</li>
                  <li> owerful Schema Generator</li>
                  <li> 24/7 Support</li>
                    </ul>
                    <div className='flex justify-center'>
                     <button className='text-center bg-[#5680E9] rounded-full text-white mt-4 py-3 px-8'>Get Started Free</button>
                     </div>
            </div>
             <div>

            <div className='w-[300px] h-[450px] bg-[#5680E9] rounded-xl   lg:ml-24 '>
                    
                    <h1 className='text-center pt-6 font-bold text-white'>Professional</h1>
                    <h2 className='text-center text-4xl  font-bold mt-4 text-white'>$50/month</h2>
                    <p className='text-center mt-4 text-white'>Ideal for individual creators</p>
                    <ul class="list-disc ml-12 space-y-4 mt-4">
                   <li className='text-white'>Supports 200 client websites </li>
                   <li className='text-white'>Free 200 Content AI Credits </li>
                   <li className='text-white'>Track 20,000 Keywords</li>
                   <li className='text-white'>  Powerful Schema Generator</li>
                   <li className='text-white'> 24/7 Priority Support</li>
                     </ul>

                     <div className='flex justify-center'>
                     <button className='text-center bg-white rounded-full text-[#5680E9] mt-4 py-3 px-8'>Get Started Free</button>
                     </div>

             </div>
             </div>
        </div>

        
    </div>
  )
}
