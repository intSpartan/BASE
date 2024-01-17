// Assuming this is CompanySignUp.js

import { useState } from "react";
import supabase from "../authCompany";

export default function CompanySignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: "http://localhost:3000/company",
        },
      });

      if (error) {
        console.error("Error signing up:", error.message);
      } else {
        console.log(user)
        console.log("Signup successful:", user);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
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

        <label>Company Name:</label>
        <input
          type="text"
          value={companyname}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}
