"use client"
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section4'
import Section4 from '@/components/Section3'
import Navbar from '@/components/shared/Navbar'
import Image from 'next/image'
import Section5 from '@/components/Section5'
import React, { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({
      left: e.pageX,
      top: e.pageY,
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);   

  console.log(position)
    
  return (
    <div className='relative'>
    <Navbar />
      <section className='sticky top-0 bg-pink-50 '>
        <Section1 />
      </section>
      <section className='sticky top-0 bg-pink-100'>
        <Section2 />
      </section>
      <section className='sticky top-0 bg-pink-200'>
        <Section4 />
      </section>
      <section className='sticky top-0 bg-pink-300'>
        <Section3 />
      </section>
      <section className='sticky top-0 bg-pink-400'>
        <Section5 />
      </section>

    {/* TRAIL CUSTOR
    Animations 
    Sticky header */}
    </div>
  )
}
