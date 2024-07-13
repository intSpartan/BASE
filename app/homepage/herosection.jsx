export default function Herosection() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex max-w-[1700px] w-full  py-[100px] px-[100px] pt-[150px]">
        <div className="w-[100%] flex flex-col justify-center relative ">
          <p className="leading-[30px]">
            welcome to <br />{" "}
            <span className="bg-gradient-to-r  capitalize from-[#F67036] to-[#AB3BD2] font-bold font-['Inter'] text-transparent bg-clip-text text-[50px] leading-[50px]">
              JoBro
            </span>{" "}
            <br />
            where your future takes flight
          </p>
          <div className="flex gap-2 mt-[10px]">
            <button className="px-4 py-2 border-2 border-[#F67036] text-[#F67036] font-medium rounded-md">
              Applicants
            </button>
            <button className="px-4 py-2 border-2 border-[#AB3BD2] text-[#5d276f] font-medium rounded-md">
              Companies
            </button>
          </div>
        </div>
        <div className="  w-[100%]">
          <div class=" h-[430px] flex-col justify-start items-start gap-[38px] inline-flex">
            <div class="justify-start items-center gap-6 inline-flex">
              <div class="w-[296px] h-[196px] relative">
                <img
                  class="w-[296px] h-[196px] left-[-0px] top-0 absolute rounded"
                  src="./pexels-ivan-samkov-4240507.png"
                />
                <div class="w-[296px] h-[196px] left-0 top-0 absolute">
                  <div class="w-[296px] h-[196px] left-0 top-0 absolute bg-neutral-700 bg-opacity-50 rounded"></div>
                  <div class="w-[51.85px] h-12 left-[122.07px] top-[74px] absolute"></div>
                </div>
              </div>
              <div class="flex-col justify-start items-start gap-3 inline-flex">
                <div class="text-center text-zinc-800 text-xl font-semibold font-['Inter'] leading-snug">
                  For Applicants
                </div>
                <p class="w-[302px] text-neutral-600 text-base font-medium font-['Inter']">
                  "Launch your career with tailored job matches, seamless
                  assessments, and interview opportunities. Your future starts
                  here."
                  <br />
                </p>
              </div>
            </div>
            <div class="justify-start items-center gap-6 inline-flex">
              <div class="flex-col justify-start items-start gap-3 inline-flex">
                <p class="text-center text-zinc-800 text-xl font-semibold font-['Inter'] leading-snug">
                  For Companies
                </p>
                <p class="w-[302px] text-neutral-600 text-base font-medium font-['Inter']">
                  “Simplify recruitment with streamlined processes, connect with
                  top talent effortlessly, and build your dream team
                  efficiently. Elevate your hiring experience today.”
                  <br />
                </p>
              </div>
              <div class="w-[296px] h-[196px] relative">
                <img
                  class="w-[295.79px] h-[196px] left-0 top-0 absolute rounded-lg"
                  src="./pexels-ivan-samkov-4240507.png"
                />
                <div class="w-[296px] h-[196px] left-0 top-0 absolute">
                  <div class="w-[296px] h-[196px] left-0 top-0 absolute bg-neutral-700 bg-opacity-50 rounded"></div>
                  <div class="w-[51.85px] h-12 left-[122.07px] top-[74px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
