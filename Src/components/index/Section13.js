import React from 'react'

export default function Section13() {
  return (
    <div className='bg-[#FEFEFE] w-[100%] h-[200px] '>
        <div className='lg:flex justify-evenly md:flex Justify-between mt-12  pt-12 lg:ml-20 sm:ml-12'>

        <div className='lg:ml-8'>
            <div className='flex'>
          <img src='./images/logo.png' alt=''/>
          <h1 className='font-bold'>Turing SEO</h1>
            </div>
              <img className='mt-4' src='./images/social.png' alt=''/>
        </div>
              
        <div className='mt-8 lg:ml-12'>
           <h1 className='font-bold'>Helpful links</h1>
           <h2 className='mt-2'>Login</h2>
           <h3>Pricing</h3>
           <h3>Tutorials</h3>
        </div>


        <div className='mt-8 lg:ml-12'>
          <h1 className='font-bold'>Policies</h1>
          <h2>Privacy Policy</h2>
          <h3>Terms of Service</h3>
          
        </div>
        </div>

    </div>
  )
}
