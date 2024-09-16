'use client'
import React, { useState } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import Navbar from './Navbar';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import axios from "axios";
import { Link } from 'lucide-react';
import Hero from './Hero';



export default function Home() {
  const [values, setValues] = useState({
    content: ''
  })

  const handleSubmit =  (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/comment', values)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    setInputValue("")
  }

  const [inputValue, setInputValue] = useState("");

  return (
<div >
    <Navbar></Navbar> 
    <Hero></Hero> 
    <div className="mx-auto font-mono px-4 py-2 max-w-6xl">
    <h1 className="text-2xl font-bold mb-2 text-[#b738c9] flex justify-center">
      GDSC SNIoE Dev Team Recruitments
    </h1>
    <div className="bg-[#f7e9f9] shadow-sm shadow-[#b738c9] rounded p-4 ">
      <p className="mb-2">
        Welcome to the GDSC SNIoE Dev Team recruitment test! We're excited to
        have you here. This page contains everything you need to know about
        the task, so let's walk through it together:
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ol className="list-decimal pl-4 space-y-2 w-full">
            <li>
              <strong>Style This Page</strong>:
              <ul className="list-disc pl-4 mt-1">
                <li>
                  This page is your starting point. It’s pretty simple right
                  now, but we want you to make it shine! Use TailwindCSS (or
                  any other CSS you prefer, even plain CSS) to enhance the
                  design, improve the layout, and give it your personal touch.
                  Your goal is to make this page look polished and
                  user-friendly. You can inspect this page and use the source
                  code as your base.
                </li>
              </ul>
            </li>
            <li>
              <strong>Create the Input Box</strong>:
              <ul className="list-disc pl-4 mt-1">
                <li>
                  You’ll notice there’s a placeholder here for an input box.
                  Your job is to add that input box so users can submit their
                  text. Style it, make sure it works smoothly, and ensure it
                  looks good on all devices, whether it’s a phone, tablet, or
                  desktop.
                </li>
              </ul>
            </li>
            <li>
              <strong>Build a Submission System</strong>:
              <ul className="list-disc pl-4 mt-1">
                <li>
                  Next up, you’ll need to set up a system to save what users
                  submit in the input box. You can use any backend technology
                  or storage method you like (e.g., a database, file system).
                  The important thing is that the data is saved and can be
                  retrieved later. You’re free to choose the tools and methods
                  that work best for you—there’s no right or wrong here, just
                  show us your thought process!
                </li>
              </ul>
            </li>
            <li>
              <strong>Display the Submissions</strong>:
              <ul className="list-disc pl-4 mt-1">
                <li>
                  Once you’ve got submissions coming in, you’ll want to
                  display them. This could be a simple list in html, or
                  something more elaborate like an admin panel with filtering
                  options. It’s up to you—just make sure it’s easy to use and
                  displays all your stored data properly.
                </li>
              </ul>
            </li>
            <li>
              <strong>Go Live</strong>:
              <ul className="list-disc pl-4 mt-1">
                <li>
                  When everything is working, it’s time to take your project
                  live! Deploy this page to a hosting service and method of
                  your choice, and make sure it’s accessible to anyone with
                  the link. Some recommendations are Vercel, Netlify and
                  Heroku. If your link is not up 24/7, that's not a problem.
                  We just want to see how you deploy your project.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div>
          <ol className="list-decimal pl-4 space-y-2" start={6}>
            <li>
              <strong>Add Some Documentation</strong>:
              <ul className="list-disc pl-4 mt-1">
                <li>
                  We’d love to hear about how you approached this task. Write
                  a brief README file that explains what you did, the tools
                  you used, the problems you faced and how to run everything
                  locally. Make sure to include the link to your deployed
                  page, too.
                </li>
              </ul>
            </li>
            <li>
              <strong>Take Your Time, But Not Too Much!</strong>:
              <ul className="list-disc pl-4 mt-1">
                <li>
                  You have 2 weeks (until 12:00 AM, 16th September 2024) to
                  complete this task. We’re not looking for perfection, we’re
                  interested in seeing how you approach problem-solving and
                  design. Focus on doing your best within the time you have,
                  and finish however much of this task you can! Even if you
                  don’t finish the project, submit what you’ve got—we just
                  wanna see how you approach problems. We’re evaluating your
                  programming skills, thought process, and even how you
                  research and learn along the way.
                </li>
              </ul>
            </li>
            <li>
              <strong>How We'll Evaluate</strong>:
              <ul className="list-disc pl-4 mt-1">
                <li>
                  Design &amp; Usability: How good does this page look, and
                  how easy is it to use?
                </li>
                <li>Functionality: Does everything work as expected?</li>
                <li>
                  Code Quality: Is your code clean, organized, and easy to
                  follow?
                </li>
                <li>
                  Creativity: Did you add any unique or innovative features?
                </li>
                <li>
                  Deployment: Is the page live and accessible via the link you
                  provide?
                </li>
                <li>
                  Your Approach: Did you clearly explain your approach in the
                  README?
                </li>
              </ul>
            </li>
            <li>
              <strong>How to Submit</strong>:
              <ul className="list-disc pl-4 mt-1">
                <li>
                  When you’re ready, push your code to a GitHub repository and
                  share the link along with the URL of your live page. Make
                  sure we can access everything so we can check out your work!
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <p className="mt-4">
        That's it! We're looking forward to seeing how you make this page your
        own. Have fun with the challenge, and good luck!
      </p>
    </div>
    <div>
    </div>
    <div className="mt-4 bg-white rounded p-4 flex justify-center">
    <Drawer>
      <DrawerTrigger className='text-bold text-xl bg-[#4285f4] p-3 rounded-lg text-white'>Wanna Send a Anonymous Message?</DrawerTrigger>
      <DrawerContent>
      <form onSubmit={handleSubmit}>
        <DrawerHeader>
          <DrawerDescription className='text-lg'>{`Please be nice to the Developer : )`}</DrawerDescription>
            <div>
            <input value={inputValue} className="border-2 w-full border-dashed border-gray-300 p-4 text-center text-black" placeholder={`TYPE HERE  Ex: You're selected, Welcome to the Dev Team!`} onChange={(e) => {setValues({...values, content: e.target.value}); setInputValue(e.target.value)}} ></input>
            </div>
        </DrawerHeader>
        <DrawerFooter>
        <Button>Send</Button>
        <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
    </div>
  </div>
    </div>
      )

}
