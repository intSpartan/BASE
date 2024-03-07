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
  const [isSignUpButtonClicked2, setSignUpButtonClicked2] = useState(false);
  const [isSignInButtonClicked2, setSignInButtonClicked2] = useState(false);
  const [active, setActive] = useState(false)
  const handleSignUp = () => {
    setSignUpButtonClicked(!isSignUpButtonClicked);
  };
  const handleSignIn = () => {
<<<<<<< HEAD

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
          !active && <div className="w-[100%]  h-screen  items-center flex relative">
            <div className="h-full relative w-[55%] bg-gray-100 flex justify-center">
              <div className="bg-[url('/image.png')] z-20 h-[50%] w-[70%]  bg-contain  bg-no-repeat bottom-0 self-center absolute" >

              </div>
            </div>
            {/* <Image className=" h-screen w-[50%]" width={500} height={1000} src='/image.jpg'></Image> */}
            <div className="w-[45%] h-[100%]  absolute  right-0 flex flex-col items-center gap-[8px]">
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
                <div>

                </div>
                {isSignUpButtonClicked && <CompanySignUp />}
                {isSignInButtonClicked && <CompanySignIn />}
                <button className="text-zinc-800 text-2xl font-bold font-inter mt-[20px]" onClick={() => setActive(!active)}> Sign in as Student</button>
              </div>
              {/* <button >Sign In</button>{isSignInButtonClicked && <CompanySignIn active={isSignInButtonClicked} onclick={handleSignIn} />} */}
            </div>
          </div>
        }
        {
          active && <div>
            <button className="font-bold text-[40px]" onClick={() => setActive(!active)}>Student -</button>

            <button >Sign Up</button>{isSignUpButtonClicked2 && <StudentSignUp />}
            {/* <button >Sign In</button>{isSignInButtonClicked2 && <StudentSignIn active={isSignInButtonClicked2} onclick={handleSignIn2} />} */}
          </div>
        }
      </div>

    </div >
=======
    setSignInButtonClicked(!isSignInButtonClicked);
  };
  const handleSignUp2 = () => {
    setSignUpButtonClicked2(!isSignUpButtonClicked2);
  };
  const handleSignIn2 = () => {
    setSignInButtonClicked2(!isSignInButtonClicked2);
  };
  return (
    <div>
      <h1>Company -</h1>
      <button onClick={handleSignUp}>Sign Up</button>
      {isSignUpButtonClicked && <CompanySignUp />}
      <button onClick={handleSignIn}>Sign In</button>
      {isSignInButtonClicked && <CompanySignIn />}
      <h1>Student -</h1>
      <button onClick={handleSignUp2}>Sign Up</button>
      {isSignUpButtonClicked2 && <StudentSignUp />}
      <button onClick={handleSignIn2}>Sign In</button>
      {isSignInButtonClicked2 && <StudentSignIn />}
    </div>
>>>>>>> origin/OnlineAssessment
  );
}
