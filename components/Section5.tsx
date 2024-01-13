import Image from 'next/image'
import React from 'react'

const Section5 = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <Image 
      alt="asdads"
      src="/assets/sechil.png"
      width={400}
      height={400}
      />

      <p className='text-7xl font-semibold'>Because<span className='text-red-500 font-bold underline'>you</span> matter !</p>
      </div>

  )
}

export default Section5