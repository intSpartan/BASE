import { useState } from "react";
import supabase from "../authCompany";
import CompanySignIn from "./companySignIn";

export default function CompanySignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [username, setUsername] = useState("");
  const [signInn, signInClicked] = useState(false)
  const handleSignup = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            role: "company",
            username: username,
          },
          emailRedirectTo: "http://localhost:3000/company/dashboard",
        },
      });

      if (error) {
        console.error("Error signing up:", error.message);
        alert("Error Signing Up!");
      } else {
        alert("Signup successful");
        console.log("Signup successful:", user);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const handleSignInClick = () => {
    signInClicked(false)
  }

  return (
    (!signInn) ? <div className="flex w-[100%] h-[100%] flex-col justify-center items-center">

      <div className="w-[45%] flex flex-col gap-y-[36px]">
        <div className="flex flex-col gap-2 ">
          <label className="text-neutral-600 text-base font-medium font-inter leading-snug">Email:</label>
          <input className="h-7  pb-1 border-b border-slate-300 flex-col justify-start items-start gap-2 flex placeholder:text-neutral-600 text-sm placeholder:font-normal  placeholder:leading-snug placeholder:font-inter placeholder:items-start placeholder:left-0"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="text-neutral-600 text-base font-medium font-inter leading-snug">Password:</label>
          <input className="h-7  pb-1 border-b border-slate-300 flex-col justify-start items-start gap-2 flex placeholder:text-neutral-600 text-sm placeholder:font-normal  placeholder:leading-snug placeholder:font-inter placeholder:items-start placeholder:left-0"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="text-neutral-600 text-base font-medium font-inter leading-snug">Company Name:</label>
          <input className="h-7  pb-1 border-b border-slate-300 flex-col justify-start items-start gap-2 flex placeholder:text-neutral-600 text-sm placeholder:font-normal  placeholder:leading-snug placeholder:font-inter placeholder:items-start placeholder:left-0"
            type="text"
            value={companyname}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter Company name"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="text-neutral-600 text-base font-medium font-inter leading-snug">Username:</label>
          <input className="h-7  pb-1 border-b border-slate-300 flex-col justify-start items-start gap-2 flex placeholder:text-neutral-600 text-sm placeholder:font-normal  placeholder:leading-snug placeholder:font-inter placeholder:items-start placeholder:left-0"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </div>

        <div className="flex items-center justify-between">
          <button onClick={handleSignup} className="w-[100%] h-12 px-[31px] py-4 bg-slate-600 rounded-lg shadow flex-col justify-center items-center gap-2.5 inline-flex text-center text-white text-sm font-medium font-inter hover:bg-[#7ab9d6]" type="button">
            Sign up
          </button>

        </div>
        {/* <div>
          <button onClick={() => signInClicked(true)}>sign in instead</button>
        </div> */}
      </div>
    </div> : <CompanySignIn click={handleSignInClick} />
  );
}
