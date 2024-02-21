"use client";
import CompanySignIn from "./components/companySignIn";
import CompanySignUp from "./components/companySignup";
import StudentSignIn from "./components/studentSignIn";
import StudentSignUp from "./components/studentSignup";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isSignUpButtonClicked, setSignUpButtonClicked] = useState(true);
  const [isSignInButtonClicked, setSignInButtonClicked] = useState(false);
  const [isSignUpButtonClicked2, setSignUpButtonClicked2] = useState(true);
  const [isSignInButtonClicked2, setSignInButtonClicked2] = useState(false);
  const [active, setActive] = useState(false)
  const handleSignUp = () => {
    setSignUpButtonClicked(!isSignUpButtonClicked);
  };
  const handleSignIn = () => {

  }
  const handleSignUp2 = () => {
  }
  const handleSignIn2 = () => {
    ;
  }
  return (
    <div className="flex w-[100%] h-[100%]  justify-center items-center">

      <div className="w-[100%] ">
        {
          <div className="w-[100%]  h-screen  bg-white items-center  relative" style={{ height: (active) ? '0' : '', zIndex: (active) ? '-10' : '' }}>
            <div className="h-full relative w-[55%]  bg-gray-100 flex justify-center" style={{
              left: !active ? '0' : '45%',
              position: 'absolute',
              transition: 'left 0.75s ease-in-out'
            }}>
              <div className="bg-[url('/image.png')]  z-20 h-[50%] w-[70%]  bg-contain  bg-no-repeat bottom-0 self-center absolute" >

              </div>
            </div>
            {/* <Image className=" h-screen w-[50%]" width={500} height={1000} src='/image.jpg'></Image> */}
            <div className="w-[45%] h-[100%] bg-white z-[40]  absolute  right-0 flex flex-col items-center gap-[8px]" style={{
              right: !active ? '0' : '55%',
              position: 'absolute',
              transition: 'right 0.75s ease-in-out',
            }}>
              <div className="">
                <button className="text-zinc-800 text-[35px] font-bold font-inter left-4 absolute top-0 ">Company </button>

              </div>

              <div className="w-full gap-y-2 flex flex-col mt-[80px] items-center">
                <div className="font-inter" style={{ width: 198, height: 29, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                  <div className="font-inter text-[#333333] text-[24px] font-bold break-words "  >Get Started Here</div>
                </div>
                <p className="font-inter text-[#ADADAD] text-[14px] font-normal" >We help you make better future for yourself</p>
                <div className="font-inter w-[302px] h-[48px] px-[20px] py-[6px] bg-[#F0F2F8] rounded-[4px] justify-start items-start gap-[16px] inline-flex " >
                  <div className="font-inter w-[115px] px-[36px] py-[8px] rounded-[4px] justify-center items-center flex gap-[10px]" style={{ backgroundColor: (isSignInButtonClicked) ? 'white' : '' }}>
                    <button className="font-inter text-center text-[#414B64] text-[16px] font-semibold break-words" onClick={() => {
                      setSignInButtonClicked(true);
                      setSignUpButtonClicked(false)
                    }}
                    >Login</button>
                  </div>
                  <div className="w-[133px] px-[36px] py-[8px] flex  rounded-[4px] justify-center items-center gap-[10px]"
                    style={{ backgroundColor: (isSignUpButtonClicked) ? 'white' : '' }}>
                    <button className="font-inter text-center text-[#414B64] text-[16px] font-semibold w-[133px]" onClick={() => {
                      setSignInButtonClicked(false);
                      setSignUpButtonClicked(true)
                    }} >Sign Up</button>
                  </div>
                </div>

                {isSignUpButtonClicked && <CompanySignUp />}
                {isSignInButtonClicked && <CompanySignIn />}

              </div>
              <button className="text-zinc-800 text-2xl font-bold font-inter mt-[20px]" onClick={() => setActive(!active)}> Sign in as Student</button>
              {/* <button >Sign In</button>{isSignInButtonClicked && <CompanySignIn active={isSignInButtonClicked} onclick={handleSignIn} />} */}
            </div>
          </div>
        }
        {                                                                                            //student part
          <div className="w-[100%]  h-screen items-center  relative" style={{ height: (!active) ? '0' : "", height: (!active) ? '-10' : '30' }}>
            {console.log(active)}
            <div className="w-[45%] h-[100%] bg-white z-[20]  right-0 absolute flex flex-col items-center gap-[8px]" style={{
              left: active ? '0' : '55%',
              position: 'absolute',
              transition: 'left 0.75s ease-in-out'
            }}>

              <div>
                <button className="text-zinc-800 text-[35px] font-bold font-inter left-4 absolute top-0 ">Student</button>

              </div>
              <div className="w-full gap-y-2 flex flex-col mt-[80px] items-center">
                <div className="font-inter" style={{ width: 198, height: 29, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                  <div className="font-inter text-[#333333] text-[24px] font-bold break-words "  >Get Started Here</div>
                </div>
                <p className="font-inter text-[#ADADAD] text-[14px] font-normal" >We help you make better future for yourself</p>
                <div className="font-inter w-[302px] h-[48px] px-[20px] py-[6px] bg-[#F0F2F8] rounded-[4px] justify-start items-start gap-[16px] inline-flex " >
                  <button className="font-inter w-[115px] font-inter text-center text-[#414B64] text-[16px] font-semibold break-words px-[36px] py-[8px] rounded-[4px] justify-center items-center flex gap-[10px]" style={{ backgroundColor: (isSignInButtonClicked2) ? 'white' : '' }} onClick={() => {
                    setSignInButtonClicked2(true);
                    setSignUpButtonClicked2(false)
                  }}>
                    Login
                  </button>
                  <button className="w-[133px] px-[32px] py-[8px] flex  rounded-[4px] justify-center items-center font-inter text-center text-[#414B64] text-[16px] font-semibold  gap-[10px]" onClick={() => {
                    setSignInButtonClicked2(false);
                    setSignUpButtonClicked2(true)
                  }}
                    style={{ backgroundColor: (isSignUpButtonClicked2) ? 'white' : '' }}>
                    Sign Up
                  </button>
                </div>
                {isSignUpButtonClicked2 && <StudentSignUp />}
                {isSignInButtonClicked2 && <StudentSignIn />}

              </div>
              <button className="text-zinc-800 text-2xl font-bold font-inter mt-[20px]" onClick={() => setActive(!active)}>Sign in is copmany</button>
            </div>
            <div className="h-full z-[50] absolute  w-[55%] bg-gray-100 flex justify-center" style={{
              right: active ? '0' : '45%',
              position: 'absolute',
              transition: 'right 0.75s ease-in-out'
            }}>
              <div className="bg-[url('/image.png')]  z-20 h-[50%] w-[70%]  bg-contain  bg-no-repeat bottom-0 self-center absolute" >

              </div>
            </div>

            {/* <button >Sign In</button>{isSignInButtonClicked2 && <StudentSignIn active={isSignInButtonClicked2} onclick={handleSignIn2} />} */}
          </div>
        }
      </div>

    </div >
  );
}
