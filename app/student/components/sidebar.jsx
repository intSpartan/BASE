import React from 'react'

const Sidebar = () => {
  return (
    <div>
          <div className="w-[302px] h-[190px] px-4 py-[15px] bg-white rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="w-[270px] p-2.5 bg-white rounded-lg justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[41px] text-zinc-800 text-sm font-medium font-['Inter']">Home</div>
                  </div>
                  <div className="w-[270px] p-2.5 bg-white rounded-lg justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[41px] text-zinc-800 text-sm font-medium font-['Inter']">Blogs</div>
                  </div>
                  <div className="w-[270px] p-2.5 bg-gray-200 rounded-lg justify-start items-center gap-2 inline-flex">
                      <div className="text-zinc-800 text-sm font-medium font-['Inter']">Services</div>
                  </div>
                  <div className="w-[270px] p-2.5 bg-white rounded-lg justify-start items-center gap-2.5 inline-flex">
                      <div className="text-zinc-800 text-sm font-medium font-['Inter']">Support</div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Sidebar
