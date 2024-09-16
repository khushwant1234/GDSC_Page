'use client'
import { useEffect, useState } from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import Navbar from '@/app/Navbar';
import { BackgroundLines } from "@/components/ui/background-lines";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import axios from "axios";


const page = () => {
    const [data, setData] = useState([]); 
    useEffect(() => {
      axios.get("http://localhost:8080/")
        .then(res => setData(res.data))  
        .catch(err => console.log(err));
    }, []);
  return (
 
      <BackgroundLines>
        <div className='mb-3 '>
      <Navbar></Navbar>  
      <div className="flex flex-wrap justify-center items-center py-2 my-3 mx-2">
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={data} className="gap-10"/>
    </div>
      </div>
      </div>
      </BackgroundLines>

  )
}

export default page
