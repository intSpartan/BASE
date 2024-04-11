import React from 'react'

const Footer = () => {
    return (
        <div class="w-full h-[264px] flex-col justify-start items-center gap-6 inline-flex">
            <div class="justify-start items-center gap-[92px] inline-flex ">
                <div class="justify-center items-start gap-[400px] flex">
                    <div class="flex-col justify-start items-start gap-3 inline-flex">
                        <img class="w-[75px] h-[29px]" src="https://via.placeholder.com/75x29" alt="Logo" />
                        <div class="flex-col justify-start items-start gap-2 flex">
                            <div class="text-black text-xs font-medium font-['Inter']">Terms and Conditions</div>
                            <div class="text-black text-xs font-medium font-['Inter']">Privacy policy</div>
                        </div>
                    </div>
                    <div class="flex-col justify-start items-start gap-3 inline-flex">
                        <div class="text-black text-sm font-semibold font-['Inter']">Contact us</div>
                        <div class="flex-col justify-start items-start gap-2 flex">
                            <div class="justify-start items-start gap-1 inline-flex">
                                <div class="w-3.5 h-3.5 relative"></div>
                                <div class="text-black text-xs font-medium font-['Inter']">+91 9873226005</div>
                            </div>
                            <div class="justify-start items-start gap-1 inline-flex">
                                <div class="w-3.5 h-3.5 px-[2.92px] pt-[2.33px] pb-[1.75px] justify-center items-center flex"></div>
                                <div class="text-black text-xs font-medium font-['Inter']">Delhi, India</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-col justify-start items-start gap-3 inline-flex">
                        <div class="text-black text-sm font-semibold font-['Inter']">Support</div>
                        <div class="justify-start items-end gap-1 inline-flex">
                            <div class="w-3.5 h-3.5 relative"></div>
                            <div class="text-black text-xs font-medium font-['Inter']">support@edmertion.com</div>
                        </div>
                    </div>
                    <div class="flex-col justify-start items-start gap-3 inline-flex">
                        <div class="text-black text-sm font-semibold font-['Inter']">Collaboration</div>
                        <div class="justify-start items-start gap-1 inline-flex">
                            <div class="w-3.5 h-3.5 relative"></div>
                            <div class="text-black text-xs font-medium font-['Inter']">info@edmertion.com</div>
                        </div>
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-[15px] inline-flex">
                    <div class="w-6 h-6 relative"></div>
                    <div class="w-6 h-6 p-[1.45px] justify-center items-center inline-flex">
                        <div class="w-[21.09px] h-[21.09px] relative">
                            <div class="w-[11.71px] h-[11.71px] left-[4.69px] top-[4.69px] absolute"></div>
                        </div>
                    </div>
                    <div class="w-6 h-6 relative">
                        <div class="w-6 h-6 left-0 top-0 absolute bg-sky-500 rounded-full"></div>
                    </div>
                    <div class="w-6 h-6 pt-[4.50px] pb-[3px] justify-center items-center inline-flex">
                        <div class="w-6 h-[16.50px] relative"></div>
                    </div>
                    <div class="w-6 h-6 justify-center items-center inline-flex">
                        <div class="w-6 h-6 relative"></div>
                    </div>
                </div>
            </div>
            <div class="pb-6 flex-col justify-start items-center gap-6 flex">
                <div class="w-[2000px] h-[0px] border border-black"></div>
                <div class="justify-start items-center gap-1 inline-flex">
                    <div class="w-2 h-2 relative"></div>
                    <div class="text-black text-[10px] font-normal font-['Inter']">2023 Edmertion.com, All rights reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
