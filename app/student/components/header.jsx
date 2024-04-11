import React from 'react'

const Header = () => {
    return (
        <div class="w-full h-[72px] bg-white shadow px-20 py-4 flex justify-between items-center">
            <div class="flex justify-start items-center space-x-4">
                <img class="w-28 h-10" src="https://via.placeholder.com/105x40" alt="Logo" />
                <div class="flex space-x-4">
                    <div class="bg-white p-2.5 rounded">
                        <div class="text-sm text-neutral-400 font-medium font-['Inter']">About Us</div>
                    </div>
                    <div class="bg-white p-2.5 rounded">
                        <div class="text-sm text-neutral-400 font-medium font-['Inter']">Services</div>
                    </div>
                    <div class="bg-white p-2.5 rounded">
                        <div class="text-sm text-neutral-400 font-medium font-['Inter']">Blog</div>
                    </div>
                    <div class="bg-white p-2.5 rounded">
                        <div class="text-sm text-blue-950 font-medium font-['Inter']">Support</div>
                    </div>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <div class="relative">
                    <div class="absolute right-0 top-[50%] transform -translate-y-1/2 text-right text-black text-sm font-medium font-['Inter']">Rohan Nair</div>
                    {/* <div class="w-10 h-10 bg-zinc-300 rounded-full"></div> */}
                    {/* <img class="w-10 h-10 ml-4" src="https://via.placeholder.com/40x40" alt="Profile" /> */}
                </div>
            </div>
        </div>


    )
}

export default Header
