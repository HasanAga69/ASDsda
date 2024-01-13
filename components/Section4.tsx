import { thirdSlide } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Section4 = () => {
  return (
    <div className="flex-1 flex flex-col justify-center lg:max-w-6xl lg:mx-auto h-screen">
<div className="flex flex-col gap-4 mt-6">
        <div className="relative h-[30rem] flex justify-center items-center  w-full">
          <Image
            src="/assets/sechilhor.jpg"
            alt="Wi-Fi  E6 and 5G"
            width={700}
            height={700}
            style={{ objectFit: "contain" }} />
        </div>
      <div className="flex flex-col gap-2 justify-center">
        {thirdSlide.map((item) => (
          <>
                  <h1 className="text-5xl xl:text-7xl text-center font-bold text-white">
                 {item.title}
                </h1>
                 <p className="text-xl font-semibold text-center text-zinc-400">
                  {item.description}
               </p>
          </>
        ))}

       
      </div>
    </div>
      </div>
  )
}

export default Section4