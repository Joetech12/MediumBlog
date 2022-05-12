import React from 'react'

function Hero() {
  return (
    <div className="bg-[#ffc017] mx-auto mt-[0px] flex max-w-7xl items-center px-4 py-[70px]">
      <div className="flex-1">
        <h1 className="text-[40px] font-bold leading-[40px] tracking-[-1px]">
          Medium is a place to write, read and connect
        </h1>
        <p className="mt-[20px]">
          it's easy and free to post your thinking on any topic and connect with
          millions of readers{' '}
        </p>
      </div>
      <div className="flex flex-1 justify-center">
        <img className="w-[200px]" src="/MediumLogoM.svg" alt="" />
      </div>
    </div>
  )
}

export default Hero
