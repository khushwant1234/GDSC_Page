import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
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
import axios from "axios";




export const HoverEffect = ({
  items,
  className
}) => {

  let [hoveredIndex, setHoveredIndex] = useState(null);


  const [values, setValues] =  useState({
    content: ''
  })

  const [idxx, setIdxx] = useState(0);

  const handleUpdate = (event) => {
      event.preventDefault();
      axios.put("http://localhost:8080/update/"+ idxx, values)
      .then(res => {
          console.log(res)
          location.reload();
      })
    }

  const handleDelete = (id) => {
    axios.delete('http://localhost:8080/delete/'+ id)
    .then(res => {
      console.log("deleted successfully")
      location.reload();

    })
    .catch((err) => console.log(err))
  }

  return (
    (<div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-1 ", className)}>
      {items.map((item, idx) => (
        <div 
          key={idx}
          className="relative group  block p-2 h-full w-full no-underline"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#fbbc05] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.10 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.10, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card className="flex flex-col min-h-54 w-auto items-center justify-evenly border-black bg-[#a91d3a] rounded-xl z-0 overflow-x-auto shadow-[#fbbc05] shadow-sm">
            <CardDescription className="text-white text-lg tracking-wide font-semibold max-w-96 break-all">{item.content}</CardDescription>
            <div className="flex gap-2 justify-center items-center">
            <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" className="bg-[#e8e06f] border-black">
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
                defaultValue={item.content} onChange={e => setValues({...values, content: e.target.value})}
            />
            </div>
            <DialogFooter>
            <Button type="submit" onClick={() => setIdxx(item.id)} >Save changes</Button>
            </DialogFooter>
        </form>
        </DialogContent>
        </Dialog>
              <Button variant="outline" onClick={() => handleDelete(item.id)} className="bg-[#fbbc05] text-black border-black hover:text-white">Delete</Button>
            </div>
          </Card>
        </div>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "rounded-2xl h-full w-full p-1 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>)
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>)
  );
};
