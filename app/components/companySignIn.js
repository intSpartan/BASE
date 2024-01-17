"use client";
import { useState } from "react";
import supabase from "./../authCompany";

export default function CompanySignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
    if (error) {
      console.log(supabase);
      console.error("Error signing in:", error.message);
    } else {
      console.log(supabase);
      window.location="http://localhost:3000/company"
      console.log("Signed in successfully:", data);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
