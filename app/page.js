"use client";
import CompanySignIn from "./components/companySignIn";
import CompanySignUp from "./components/companySignup";
import StudentSignIn from "./components/studentSignIn";
import StudentSignUp from "./components/studentSignup";
import { useState } from "react";

export default function Home() {
  const [isSignUpButtonClicked, setSignUpButtonClicked] = useState(false);
  const [isSignInButtonClicked, setSignInButtonClicked] = useState(false);
  const [isSignUpButtonClicked2, setSignUpButtonClicked2] = useState(false);
  const [isSignInButtonClicked2, setSignInButtonClicked2] = useState(false);
  const handleSignUp = () => {
    setSignUpButtonClicked(!isSignUpButtonClicked);
  };
  const handleSignIn = () => {
    setSignInButtonClicked(!isSignInButtonClicked);
  }
  const handleSignUp2 = () => {
    setSignUpButtonClicked2(!isSignUpButtonClicked2);
  }
  const handleSignIn2 = () => {
    setSignInButtonClicked2(!isSignInButtonClicked2);
  }
  return (
    <div>
      <h1>Company -</h1>
      <button onClick={handleSignUp}>Sign Up</button>{isSignUpButtonClicked && <CompanySignUp/> }
      <button onClick={handleSignIn}>Sign In</button>{isSignInButtonClicked && <CompanySignIn/> }
      <h1>Student -</h1>
      <button onClick={handleSignUp2}>Sign Up</button>{isSignUpButtonClicked2 && <StudentSignUp/> }
      <button onClick={handleSignIn2}>Sign In</button>{isSignInButtonClicked2 && <StudentSignIn/> }
    </div>
  );
}
