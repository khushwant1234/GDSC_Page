import React from 'react'
import { Compare } from "@/components/ui/compare";


const Hero = () => {
  
  return (
    <div className="flex flex-col items-center justify-center p-4 px-4">
      <div className='flex gap-1 justify-center'>
      <h1 className="text-2xl font-bold my-2 text-[#ea4335] flex justify-center">
        BEFORE
      </h1>
      <h1 className="text-2xl font-bold my-2 text-[#fbbc05] flex justify-center">
        /
      </h1>
      <h1 className="text-2xl font-bold my-2 text-[#ea4335] flex justify-center">
        AFTER
      </h1>
      </div>
      <Compare
        firstImage="https://i.postimg.cc/5tFV0Lk3/before.jpg"
        secondImage="https://i.postimg.cc/63RKdfQM/after.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  )
}

export default Hero
