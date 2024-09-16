import React from 'react'
import { Compare } from "@/components/ui/compare";
import Image from 'next/image';


const Hero = () => {
  
  return (
    <div className="flex flex-col items-center justify-center p-4 px-4">
      <h1 className="text-2xl font-bold my-3 text-[#b738c9] flex justify-center">
        BEFORE/AFTER
      </h1>
      <Compare
        firstImage="https://i.postimg.cc/ncZj44jR/before.jpg"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  )
}

export default Hero
