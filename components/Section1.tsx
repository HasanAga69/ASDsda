import React from 'react'
import Button from './Button'
import { love } from '@/constants'

const Section1 = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center lg:max-w-6xl lg:mx-auto h-screen [&_p]:text-black">
      {/* <p className='text-8xl'>I Love the way you dress.</p>
      <p className='text-7xl'>I Love the way you speak.</p>
      <p className='text-6xl'>I Love the way you walk !</p>
      <p className='text-5xl'>I Love the voice of yours !</p>
      <p className='text-4xl'>I Love you with my heart !</p>
      <p className='text-3xl'>I want to kiss you !</p>
      <p className='text-2xl'>I want to hug you !</p>
      <p className='text-xl'>I want to marry you !</p>
      <p className='text-xl'>I Love You !</p>
      <p className='text-lg'>I Love You !</p>
      <p className='text-base'>I Love You !</p>
      <p className='text-sm'>I Love You !</p> */}

      {love.map((item) => (
        <p className={`${item.mods}`}>{item.title}</p>
      ))}
        
          <Button 
        title="Go down"
        />
      </div>
  )
}

export default Section1