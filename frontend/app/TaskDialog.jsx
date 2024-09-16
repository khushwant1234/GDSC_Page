import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'

const TaskDialog = ({title, desc, idx}) => {
  return (
      <Dialog className="">
      <DialogTrigger asChild className='flex aspect-square m-8  '>
        <button className="p-2 aspect-square rounded-md bg-[#fbbc05] text-black flex flex-col justify-center items-center text-xl border-1 gap-3 border-black ">{idx}. {title} {idx == 1 && <p>{"{"}Click Me{"}"}</p>}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#eeeeee] text-black">
        <DialogHeader>
          <DialogTitle className="text-black">{title}</DialogTitle>
          <DialogDescription className="text-black">
            {desc}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default TaskDialog
