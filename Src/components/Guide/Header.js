import React from 'react'

function Header() {
  return (
    <div className=' khan-1 '>
      <div className='mx- lg:mx-20 mt-[0px]'>
       <nav className='flex justify-between space-x-12 lg:space-x-20 lg:mr-12 py-'>
            <div className='flex'>
                <img className='w-[272px] h-[80px]' src='./images/logo.svg' alt=''/>
                {/* <h1 className='text-[16px] lg:text-xl font-bold mx-2'>Turing SEO</h1> */}
            </div>

            <ul className='space-x-4 lg:space-x-16 flex '>
                <a href='Guide'><li className='text-[24px]'>Guide</li></a>
                <a href='Pricing'><li className='text-[24px]'>Pricing</li></a>
                <a href='FAQ'><li className='text-[24px]'>FQA</li></a>
            </ul>
            <div>
                <button className='bg-[#5680E9] text-[16px] px-6 py-[2]  lg:px-8 lg:py-4 rounded-full text-white ' >Log in</button>
            </div>
            </nav>
            <div className='mt-4'>
        <h1 className='lg:text-6xl font-bold ml-20 sm:text-center lg:flex justify-center'>Learn how to use plugin <br></br>effectively</h1>
        <p className='ml-20 sm:text-center lg:text-center mt-8 text-xl'>In the Academy you will find video walkthroughs and articles to help you learn<br></br> how to manage your bulk curations and SEO automations</p>
        </div>
        <div className='flex justify-center'>
         <button className='lg:px-12 lg:py-4 bg-[#5680E9] rounded-full text-white font-bold mt-8'>Get TURINGSEO Now</button>
        </div>
      </div>

    </div>
  )
}

export default Header