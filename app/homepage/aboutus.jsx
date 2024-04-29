export default function Aboutus() {
    return (
        <div className=" flex justify-center items-center">
            <div className="max-w-[1700px] px-[100px] w-full py-[100px] flex flex-col  justify-between items-center">
                <div className=" h-[150px] w-full justify-between items-center  inline-flex">
                    <div className="flex-col justify-start items-start gap-4 inline-flex">
                        <div className="text-zinc-700 text-[32px] font-bold font-['Inter']">About us</div>
                        <div className="w-[627px] text-justify text-black text-base font-medium font-['Inter']">Edmertion, a visionary endeavor, reimagines the landscape of career guidance and education. Fueled by technology and inspired by limitless human potential, we illuminate unique pathways in this journey of self-discovery. We're not just shaping the future of learning, but crafting a world where everyone can architect their own destiny.</div>
                    </div>
                    <div className="px-5 py-2 bg-white rounded flex-col justify-center items-end gap-4 inline-flex">
                        <div className="justify-center items-center gap-1 inline-flex">
                            <div className="text-center text-neutral-700 text-sm font-medium font-['Inter'] leading-snug">View All</div>
                            <div className="w-4 h-4 relative" />
                        </div>
                    </div>
                </div>
                <div className="  mt-[50px] w-full h-[516px] justify-between flex ">
                    <div className="w-[628px] flex-col justify-between items-center gap-3 inline-flex">
                        <div className="w-[282px] h-[344px] relative">
                            {/* <img className="w-[222px] h-[296px] left-[5px] top-0 absolute" src="./withoutBg_2 (2).png" /> */}
                            <div className="w-[282px] h-[282px] left-0 top-[62px] absolute bg-indigo-100 rounded-full" />
                            <div className="w-[282px] h-[282px] left-0 top-[62px] absolute bg-zinc-300 rounded-full" />
                            <img className="w-[230px] h-[325px] left-[5px] top-0 absolute" src="./withoutBg_2 (2).png" />
                        </div>
                        <div className="flex-col justify-start items-center  mt-[50px] flex">
                            <div className="flex-col justify-start items-center gap-1.5 flex">
                                <div className="text-center text-zinc-800 text-xl font-bold font-['Inter'] mt-[10px]">Puneet Dang</div>
                                <div className="text-center text-black text-[10px] font-normal font-['Inter']">Founder</div>
                            </div>
                            <div className="w-[519px] relative top-[20px]  text-center text-neutral-500 text-sm font-medium font-['Inter']">Puneet Dang is our visionary founder whose passion and experience drive our operations. As a seasoned entrepreneur with a history of success in the education technology sector, he brings his relentless energy and innovative spirit to our team.  His strength lies in identifying opportunities in challenges and navigating our team through the complex landscape of the ed-tech industry. </div>
                        </div>
                    </div>
                    <div className="w-[628px] flex-col justify-start items-center gap-3 inline-flex">
                        <div className="w-[282px] h-[344px] relative">
                            {/* <img className="w-[222px] h-[296px] left-[5px] top-0 absolute" src="./withoutBg_2 (2).png" /> */}
                            <div className="w-[282px] h-[282px] left-0 top-[62px] absolute bg-indigo-100 rounded-full" />
                            <div className="w-[282px] h-[282px] left-0 top-[62px] absolute bg-zinc-300 rounded-full" />
                            <img className="w-[230px] h-[325px] left-[19px] top-0 absolute" src="./withoutBg_1.png" />
                        </div>
                        <div className="flex-col justify-start items-center gap-4 flex">
                            <div className="flex-col justify-start items-center gap-1.5 flex">
                                <div className="text-center text-zinc-800 text-xl font-bold font-['Inter']">Rahul Jainer</div>
                                <div className="text-center text-black text-[10px] font-normal font-['Inter']">Founder</div>
                            </div>
                            <div className="w-[519px] text-center text-neutral-500 text-sm font-medium font-['Inter']">Rahul Jainer is our dynamic founder and marketing genius. His years of experience in the education industry, coupled with his natural flair for sales, makes him an invaluable asset to our team. Rahul is the driving force behind our marketing strategies, utilizing his insights to connect with our audience and spread awareness about our groundbreaking services. <br /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}