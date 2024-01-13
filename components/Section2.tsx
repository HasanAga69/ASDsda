import { firstSlide } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Section2 = () => {
  return (
    <div className="flex-1 flex flex-col justify-center lg:max-w-6xl lg:mx-auto h-screen ">
<div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
      <div className="flex flex-col gap-8 justify-center">
        {firstSlide.map((item) => (
          <>
          <h1 className="text-5xl xl:text-7xl font-bold text-white">{item.title}</h1>
          <p className="text-lg font-semibold text-zinc-400">{item.description}</p>
          </>
        ))}
      </div>
      <div>
        <div className="relative w-full h-[40rem]">
          <Image
            src="/assets/love.jpg"
            alt="Wi-Fi  E6 and 5G"
            fill
            style={{ objectFit: "contain" }}
            className="rounded-3xl" />
        </div>
      </div>
    </div>
      </div>
  )
}

export default Section2