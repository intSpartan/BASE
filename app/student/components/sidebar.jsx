import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
         <>
        <h1 class="text-3xl font-bold py-6">Dashboard</h1>
        <div class="bg-[#FFFFFF] border-2 rounded-lg w-3/4 px-[15px] py-[16px]">
          <ul class="text-left font-medium px-2">
            <li class="py-1 hover:bg-[#EBEBEB] hover:border-l-4 rounded-lg px-2 hover:border-black">
              <a href="#">Jobs Applied</a>
            </li>
            <li class="py-1 hover:bg-[#EBEBEB] hover:border-l-4 rounded-lg px-2 hover:border-black">
            <a href="#">Interviews</a>
            </li>
            <li class="py-1 hover:bg-[#EBEBEB] hover:border-l-4 rounded-lg px-2 hover:border-black">
            <a href="#">OA</a>
            </li>
            <li class="py-1 hover:bg-[#EBEBEB] hover:border-l-4 rounded-lg px-2 hover:border-black">
            <a href="#">Upload Resume</a>
            </li>
          </ul>
        </div>
        </>
    
    
  )
}

export default Sidebar
