import React from 'react'

const Footer = () => {
  return (
    <div>
      <h1 className=' text-3xl font-bold text-center'>Technologies I use</h1>
      <br />
      <div className='grid grid-cols-4 my-5 space-y-9  px-9'>
        <i className="fa-brands fa-react fa-10x "></i>
        <i className="fa-brands fa-java fa-10x"></i>
        <i className="fa-brands fa-html5 fa-10x"></i>
        <i className=" animate-bounce fa-brands fa-css3-alt fa-10x"></i>
        <i className="fa-brands fa-python fa-10x"></i>
        <i className="fa-brands fa-node fa-10x"></i>


      </div>

      <div>
        <h1 className='text-center text-4xl font-bold'>Who am I</h1>
        <div className='flex items-center justify-center py-7'>
          <div className='w-60 h-60 bg-black rounded-full shadow-sm text-center py-16 text-white text-sm border-4 border-green-800'>
            <h1>Name:Sushant Tamang</h1>
            <h1>Email:Sushantlama49@gmail.com</h1>
            <h1>Tel:9777777</h1>
            <h1>Age:26</h1>
            <h1>Experience:html,css,javascript,react</h1>
          </div>
        </div>


        <div className='relative'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path></svg>


          <div className=' absolute bottom-0 text-white  inset-x-5 top-[50%] flex justify-center flex-col items-center'>
            <h1> Develop By</h1>
            <h1>Some One Anonymous</h1>
          </div>


        </div>


      </div>






    </div>
  )
}

export default Footer