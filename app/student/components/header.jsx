import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="w-[1440px] h-[72px] bg-white justify-center items-center gap-[545px] inline-flex">
                <img className="w-[104.62px] h-10" src="https://via.placeholder.com/105x40" />
                <div className="justify-start items-center gap-4 flex">
                    <div className="w-[59px] p-2.5 bg-white rounded justify-center items-center gap-2.5 flex">
                        <div className="text-center text-neutral-400 text-sm font-medium font-['Inter']">Users</div>
                    </div>
                    <div className="w-[94px] p-2.5 bg-white rounded justify-center items-center gap-2.5 flex">
                        <div className="text-center text-blue-950 text-sm font-medium font-['Inter']">Dashboard</div>
                    </div>
                    <div className="w-[82px] p-2.5 bg-white rounded justify-center items-center gap-2.5 flex">
                        <div className="text-center text-neutral-400 text-sm font-medium font-['Inter']">Analytics</div>
                    </div>
                    <div className="w-[88px] p-2.5 bg-white rounded justify-center items-center gap-2.5 flex">
                        <div className="text-center text-neutral-400 text-sm font-medium font-['Inter']">Approvals</div>
                    </div>
                    <div className="w-[67px] p-2.5 bg-white rounded justify-center items-center gap-2.5 flex">
                        <div className="text-center text-neutral-400 text-sm font-medium font-['Inter']">Logout</div>
                    </div>
                    <div className="justify-start items-center gap-4 flex">
                        <div className="w-10 h-10 relative">
                            <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-50 rounded-full" />
                            <div className="w-5 h-5 left-[10px] top-[10px] absolute">
                                <div className="w-[5px] h-[5px] left-[11.66px] top-[4.17px] absolute bg-red-600 rounded-full border border-neutral-50" />
                            </div>
                        </div>
                        <div className="w-[141px] h-10 relative">
                            <div className="w-[89px] left-0 top-[12px] absolute text-right text-black text-sm font-medium font-['Inter']">Admin name</div>
                            <div className="w-10 h-10 left-[101px] top-0 absolute bg-zinc-300 rounded-full" />
                            <img className="w-10 h-10 left-[101px] top-0 absolute" src="https://via.placeholder.com/40x40" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
