import React from 'react'

const jobcard = () => {
  return (

    <div class="flex-col border-2  bg-[#FFFFFF] rounded-lg shadow-lg my-4">
      <div class="flex m-3">
        <img src="portfolio .png" class="w-12 border-2 rounded-full h-12" />
        <div class="flex-col px-4">
          <h1 class="text-3xl font-semibold">Job Title</h1>
          <h2 class="text-xl font-medium">Company Name</h2>
        </div>
        <div class="flex justify-end w-3/4 text-white">
          <button
            class="border-2 mx-2 p-4 rounded-lg bg-[#F36E54] shadow-xl"
          >
            View Details
          </button>
          <button
            class="border-2 mx-2 p-4 rounded-lg bg-[#F36E54] shadow-xl"
          >
            Apply Now
          </button>
        </div>
      </div>
      
      <div class="mx-12 mb-4">
        <span class="text-sm font-light bg-[#EBEBEB] m-2 p-2 rounded-lg">
          React.js
        </span>
        <span class="text-sm font-light bg-[#EBEBEB] m-2 p-2 rounded-lg">
          NodeJS
        </span>
      </div>
    </div>
  )
}

export default jobcard
