"use client";
import CompanySignIn from "./components/companySignIn";
import CompanySignUp from "./components/companySignup";
import { useState } from "react";

export default function Home() {
  const [isSignUpButtonClicked, setSignUpButtonClicked] = useState(false);
  const [isSignInButtonClicked, setSignInButtonClicked] = useState(false);
  const handleSignUp = () => {
    setSignUpButtonClicked(!isSignUpButtonClicked);
  };
  const handleSignIn = () => {
    setSignInButtonClicked(!isSignInButtonClicked);
  }
  return (
    <div>
      <button onClick={handleSignUp}>Sign Up</button>{isSignUpButtonClicked && <CompanySignUp/> }
      <button onClick={handleSignIn}>Sign In</button>{isSignInButtonClicked && <CompanySignIn/> }
    </div>
  );
}
