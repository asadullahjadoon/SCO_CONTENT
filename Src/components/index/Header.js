import React from 'react'


function Header() {
  return (
    <div className=' khan '>
      <div className='mx-2 lg:mx-20 mt-[px]'>
       <nav className='flex justify-between  lg:space-x-20 lg:mr-12 py-4'>
            <div className='flex'>
                <img className='lg:w-[272px] lg:h-[80px]' src='./images/logo.svg' alt=''/>
                {/* <h1 className='text-[16px] lg:text-xl font-bold mx-2'>Turing SEO</h1> */}
            </div>

            <ul className='space-x-2 lg:space-x-16 flex mt-2'>
                <a href='Guide'><li className='lg:text-[24px]'>Guide</li></a>
                <a href='Pricing'><li className='lg:text-[24px]'>Pricing</li></a>
                <a href='FAQ'><li className='lg:text-[24px] cursor-pointer'>FQA</li></a>
            </ul>
            <div>
                <button className='bg-[#5680E9] text-[8px] lg:text-[16px] px-4 py-[2]  lg:px-8 lg:py-4 rounded-full text-white ' >Log in</button>
            </div>
            </nav>
              
            <div className='mt-12 lg:mt-[204px]'>
        <h1 className='lg:text-6xl font-bold lg:ml-20 text-center sm:text-center lg:text-center'>Fixing Seo Issues Just Got<br></br> a Whole Lot Easier</h1>
        <p className='lg:ml-20 text-center sm:text-center lg:text-center mt-[24px]'>Finally a WordPress plugin to help you Get SEO Done</p>
        </div>
        <div className='flex justify-center'>
         <button className='lg:px-12 lg:py-4 bg-[#5680E9] rounded-full text-white font-bold mt-[98px]'>Get TURINGSEO Now</button>
        </div>
      </div>

    </div>
  )
}

export default Header