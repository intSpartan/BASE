import React from 'react'

const jobcard = ({props}) => {
  return (

    <div class="flex-col border-2  bg-[#FFFFFF] rounded-lg shadow-lg my-4">
      <div class="flex m-3">
        <img src="portfolio .png" class="w-10 border-2 rounded-full h-8" />
        <div class="flex-col px-4">
          <h1 class="text-xl font-semibold">{props.title}</h1>
          <h2 class="text-sm font-medium">{props.companyid}</h2>
        </div>
        <div class="flex justify-end w-3/4 text-white">
          <button
            class="border-2 text-sm h-12 mx-2 p-3 rounded-lg bg-green-600 shadow-xl"
          >
            View Details
          </button>
          <button
            class="border-2 text-sm h-12 mx-2 p-3 rounded-lg bg-green-600 shadow-xl"
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
