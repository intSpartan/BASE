"use client";

import { useState } from "react";
import supabase from "./../authCompany";
import { useRouter } from "next/navigation";

export default function CompanySignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log(supabase);
      alert(error.message);
    } else {
      console.log(supabase);
      router.push("/student");
    }
  };

  return (
    <div className="w-[45%]">


      <form action={handleSignIn} className="gap-y-[36px] flex flex-col">
        <div className="flex flex-col gap-2">
          <label className="text-neutral-600 text-base font-medium font-inter leading-snug">Email:</label>
          <input
            className="h-7  pb-1 border-b border-slate-300 flex-col justify-start items-start gap-2 flex placeholder:text-neutral-600 text-sm placeholder:font-normal  placeholder:leading-snug placeholder:font-inter placeholder:items-start placeholder:left-0"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col  gap-2">
          <label className="text-neutral-600 text-base font-medium font-inter leading-snug">Password:</label>
          <input
            className="h-7  pb-1 border-b border-slate-300 flex-col justify-start items-start gap-2 flex placeholder:text-neutral-600 text-sm placeholder:font-normal  placeholder:leading-snug placeholder:font-inter placeholder:items-start placeholder:left-0"
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[7px]  items-center  justify-between">
          <button type="submit" className="w-[100%] h-12 px-[31px] py-4 bg-slate-600 rounded-lg shadow flex-col justify-center items-center gap-2.5 inline-flex text-center text-white text-sm font-medium font-inter hover:bg-[#7ab9d6]">Sign In</button>
          <a className="   font-medium text-[14px] text-[#ec6464cd] hover:text-pink-800" href="#">
            Forgot Password?
          </a>
        </div>
        {/* <button type="submit">Sign In</button> */}
      </form>
    </div>
  );
}
