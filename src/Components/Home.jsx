import React from 'react'

const Home = () => {
  return (
    <div className="items-center justify-center grid grid-cols-2 gap-30 text-white h-screen ">
      <div className='grid grid-row-2 items-center justify-center'>
        <h1 className='text-5xl font-bold mb-2'>Hello There</h1>
        <p className='text-4xl font-bold'>I am Gulshan Khemani </p>
      </div>
      <div className='relative items-center justify-center top-[2em] h-[35rem] w-[35rem] '>
        <img src="./Computer.svg" alt="image not found" />
      </div>
    </div>
  )
}

export default Home
