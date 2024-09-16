import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from 'axios';
import Link from "next/link";

const DialogBox = (idx, values) => {
    const handleUpdate = (event) => {
        event.preventDefault();
         axios.put("http://localhost:8080/update"+idx, values)
         .then(res => {
            console.log(res)
         })
      }
  return (
    <div className="flex gap-2 justify-center items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-[#e8e06f]">
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white">
                <form onSubmit={handleUpdate} className="flex flex-col gap-2">
                <DialogHeader>
                    <DialogTitle>Message:</DialogTitle>
                  </DialogHeader>
                  <div className="border-0 rounded-md flex justify-center">
                    <input
                      className="border-2 w-full border-gray-300 p-4 text-center text-black" 
                      value={values.content}
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit" >Save changes</Button>
                  </DialogFooter>
                </form>
                  
                </DialogContent>
              </Dialog>
            <Link href="/messages"><Button className="bg-[#fbbc05] text-black hover:text-white">Delete</Button></Link>
            </div>
  )
}

export default DialogBox
