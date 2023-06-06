import React from 'react'

const Body = () => {
  return (
    <div>

      <div className='grid grid-cols-2 '>
        <div>

          <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_va081n22.json" speed="1" loop autoplay="true"></lottie-player>

        </div>

        <div className='py-40 px-9'>
          <h1 className='text-3xl font-bold animate-pulse '>Hi, I am Luez</h1>
          <p className='text-red-800'>Some Dev,Freelancer,Rounder</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore optio nostrum pariatur fugit aperiam praesentium distinctio quia corrupti ex repudiandae voluptas, tenetur aliquid placeat maxime. Magni cumque eos velit nihil odio quia neque incidunt dolorum ex, accusamus consequatur voluptate quibusdam architecto voluptatum ipsa vel fugiat eligendi expedita sapiente reiciendis.</p>
        </div>


      </div>
    </div>
  )
}

export default Body