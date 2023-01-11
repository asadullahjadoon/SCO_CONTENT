import React from 'react'

export default function Header() {
  return (
    <div className='khan'>
        <div className='mx-2 lg:mx-20 mt-[0px]'>
       <nav className='flex justify-between space-x-12 lg:space-x-20 lg:mr-12 py-8'>
            <div className='flex'>
                <img className='w-[272px] h-[80px]' src='./images/logo.svg' alt=''/>
                {/* <h1 className='text-[16px] lg:text-xl font-bold mx-2'>Turing SEO</h1> */}
            </div>

            <ul className='space-x-4 lg:space-x-12 flex '>
                <a href='Guide'><li className='text-[24px]'>Guide</li></a>
                <a href='Pricing'><li className='text-[24px]'>Pricing</li></a>
                <a href='FAQ'></a><li className='text-[24px]'>FQA</li>
            </ul>
            <div>
                <button className='bg-[#5680E9] text-[16px] px-6 py-[2]  lg:px-8 lg:py-4 rounded-full text-white ' >Log in</button>
            </div>
            </nav>
            <h1 className='text-6xl text-[#131821] font-bold text-center'>FAQ</h1>
                
            <div className='mx-48'>
            <h1 className='text-xl font-bold  mt-20'>Getting Started</h1>
            <hr className='w-[500px]'></hr>
            </div>           

                    
            <div className='flex justify-evenly mt-4'>

                <div className='w-[500px]'>
                       
                        <div className='flex justify-between mt-4  '>
                        <h2 className='text-xl'>Starter guide?</h2>
                        <img className='ml-12' src='./images/vector.svg' alt=''/>
                        </div>
                        <hr className='w-[100%] h-[2px]'></hr>
                        

                        <div className='flex justify-between mt-8 '>
                        <h3 className='text-xl'>How to install and activate TuringSEO?</h3>
                        <img src='./images/vector.svg' alt=''/>
                        </div>
                        <hr className='w-[100%]'></hr>

                        <div className='flex justify-between mt-8'>
                        <h4 className='text-xl'>What are credits and Why do I need them?</h4>
                        <img src='./images/vector.svg' alt=''/>
                        </div>
                         <hr className='w-[100%]' ></hr> 

                        <div className='flex justify-between mt-8'>
                        <h5 className='text-xl'>TuringSEO tools overview?</h5>
                        <img src='./images/vector.svg' alt=''/>
                        </div>
                        <hr className='w-[100%]'></hr>
                </div>
                
                <div className='w-[500px]'>
                     <div className='flex justify-between'>
                        <h1 className='text-xl'>What are the system requirements for TuringSEO?</h1>
                        <img src='./images/vector.svg' alt=''/>
                     </div>
                       <hr className='w-[100%]'></hr>
                      <div className='flex justify-between mt-4'>
                        <h2 className='text-xl'>What page builders or editors can I use with TuringSEO?</h2>
                        <img src='./images/vector.svg' alt=''/>
                      </div>

                      <div className='flex justify-between mt-4'>
                        <h3 className='text-[#5680E9] text-xl'>How to work with security plugins?</h3>
                        <img className='' src='./images/vector.svg' alt=''/>
                      </div>
                          <hr className='w-[100%]'></hr>

                      <div className='flex justify-between mt-4'>
                        <h4 className='text-xl' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h4>
                      </div>
                      <hr className='w-[100%]'></hr>
                            
                         
                </div>





            </div>
          
      </div>

    </div>
  )
}
