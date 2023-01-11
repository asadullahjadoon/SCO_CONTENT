import React from 'react'

export default function Section1() {
  return (
    <div className='mt-40' >
        <h1 className='text-center font-bold text-4xl'>Compare plans</h1>
        <p className='text-center text-2xl'>Join 5,000,000+ Professionals who use Turing seo to Improve Their Website</p>
        <div className='flex justify-center mt-16'>
            <img className='w-[200px] h-[200px] mt-12' src='./images/Bage.png' alt=''/>
            
           
           <div className='w-[300px] h-[300px] khan-3 lg:ml-60 rounded-xl '>
                <h1 className='text-xl font-bold text-center mt-4'>Basic</h1>
                <h2 className='text-6xl text-[#5680E9] font-bold text-center mt-8'>Free</h2>
                <p className='text-center mt-4'>Free plan for all users</p>
                <div className='flex justify-center mt-8'>
                <button className='px-8 py-4 rounded-full bg-[#5680E9] text-white font-bold' >Get Started</button>
                </div>

           </div>

           <div className='w-[300px] h-[300px] bg-[#D7E2FC] rounded-xl '>
                 <h1 className='text-xl font-bold text-center mt-4'>Professional</h1>
                 <h2 className='text-4xl font-bold text-center mt-8 text-[#5680E9]'>$50/month</h2>
                 <p className='text-center mt-4'>Ideal for individual creators</p>
                 <div className='flex justify-center mt-8'>
                <button className='px-8 py-4 rounded-full bg-[#5680E9] text-white font-bold' >Get Started</button>
                </div>
           </div>
               
        </div>
             <div className='flex justify-center mr-16'>
              <img src='./images/table.png' alt=''/>

             </div>
             <div className='flex justify-center mr-16'>

                <div className='w-[1105px] h-[400px] border border-[#E2EBF6]  '>
                    <div className='flex justify-start ml-12'>
                         <img className='mt-8' src='./images/hand.png' alt=''/>
                         <div>
                             <h1 className='font-bold text-2xl ml-12 pt-20'>Our 100% No-Risk Money Back Guarantee</h1>
                              <p className=' text-xl ml-12'> We’re excited to have you experience Turing SEO. Over the next 10 days, if<br></br> Turing SEO isn’t the best fit, simply reach out! We’ll happily refund 100% of your<br></br> money. No questions asked.</p>
                         </div>

                 </div>
                    
                    <div className='flex justify-evenly mt-12'>
                    <p className=''>All pricing is in USD. You can change plans or cancel your <br></br>account at any time.<br></br>* Special   introductory pricing, all renewals are at full price.</p>
                        <div className=''>
                        <img className='' src='./images/icon.png' alt=''/>
                        </div>
                    </div>

                    
                </div>


             </div>


    </div>
  )
}

